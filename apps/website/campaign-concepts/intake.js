const form = document.querySelector("#intake-form");
const steps = [...document.querySelectorAll(".intake-step")];
const dots = [...document.querySelectorAll(".progress-dots li")];
const nextButton = document.querySelector("[data-next]");
const backButton = document.querySelector("[data-back]");
const submitButton = document.querySelector("[data-submit]");
const actions = document.querySelector("[data-actions]");
const success = document.querySelector("[data-success]");
const exploratory = form.elements.is_exploratory;
const propertyFields = ["property_name_or_area", "google_maps_url", "listing_url"].map((name) => form.elements[name]);
let currentStep = 1;

try {
  const prefill = JSON.parse(sessionStorage.getItem("rumperIntakePrefill") || "{}");
  form.elements.full_name.value = prefill.name || "";
  form.elements.whatsapp_number.value = prefill.whatsapp || "";
} catch (_) {}

const showError = (element, invalid) => {
  const field = element.closest(".field");
  if (field) field.classList.toggle("invalid", invalid);
  element.setAttribute("aria-invalid", String(invalid));
};

const hasValidUrl = (input) => !input.value || input.validity.valid;
const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
})[character]);

const validateStep = () => {
  const step = steps[currentStep - 1];
  let valid = true;
  step.querySelectorAll("[required]").forEach((input) => {
    const inputValid = input.type === "radio"
      ? [...form.elements[input.name]].some((item) => item.checked)
      : input.type === "checkbox" ? input.checked : input.checkValidity();
    showError(input, !inputValid);
    valid = valid && inputValid;
  });

  if (currentStep === 2) {
    propertyFields.forEach((input) => showError(input, !hasValidUrl(input)));
    const hasReference = propertyFields.some((input) => input.value.trim());
    const propertyValid = exploratory.checked || hasReference;
    step.querySelector("[data-property-error]").classList.toggle("visible", !propertyValid);
    valid = valid && propertyValid && propertyFields.every(hasValidUrl);
  }

  if (currentStep === 5) {
    const hasConcern = [...form.querySelectorAll('[name="risk_concerns"]')].some((input) => input.checked);
    step.querySelector("[data-concern-error]").classList.toggle("visible", !hasConcern);
    valid = valid && hasConcern;
  }

  if (currentStep === 6) {
    const consentValid = form.elements.whatsapp_contact_consent.checked && form.elements.privacy_acknowledgement.checked;
    step.querySelector("[data-consent-error]").classList.toggle("visible", !consentValid);
    valid = valid && consentValid;
  }
  return valid;
};

const selectedValue = (name) => form.querySelector(`[name="${name}"]:checked`)?.value || "Belum diisi";
const updateReview = () => {
  const property = propertyFields.find((input) => input.value.trim())?.value || "Masih eksplorasi";
  const concerns = [...form.querySelectorAll('[name="risk_concerns"]:checked')].map((input) => input.value).join(", ") || "Belum dipilih";
  document.querySelector("[data-review]").innerHTML = `
    <div><span>Buyer</span><strong>${escapeHTML(form.elements.full_name.value || "Belum diisi")}</strong><small>${escapeHTML(form.elements.whatsapp_number.value || "Belum diisi")}</small></div>
    <div><span>Kandidat</span><strong>${escapeHTML(property)}</strong></div>
    <div><span>Tahap keputusan</span><strong>${escapeHTML(form.elements.buying_stage.value || "Belum diisi")}</strong><small>${escapeHTML(form.elements.decision_timeline.value || "")}</small></div>
    <div><span>Risiko utama</span><strong>${escapeHTML(concerns)}</strong></div>`;
};

const render = () => {
  steps.forEach((step, index) => step.classList.toggle("active", index === currentStep - 1));
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentStep - 1);
    dot.classList.toggle("complete", index < currentStep - 1);
  });
  const percent = Math.round((currentStep / steps.length) * 100);
  document.querySelector("[data-progress-label]").textContent = `Langkah ${currentStep} dari ${steps.length}`;
  document.querySelector("[data-progress-percent]").textContent = `${percent}%`;
  document.querySelector("[data-progress-bar]").style.width = `${percent}%`;
  backButton.disabled = currentStep === 1;
  nextButton.hidden = currentStep === steps.length;
  submitButton.hidden = currentStep !== steps.length;
  if (currentStep === 6) updateReview();
  steps[currentStep - 1].querySelector("input, select, textarea")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
};

exploratory.addEventListener("change", () => {
  propertyFields.forEach((input) => {
    input.disabled = exploratory.checked;
    if (exploratory.checked) input.value = "";
  });
});

propertyFields.forEach((input) => input.addEventListener("input", () => {
  if (input.value.trim()) exploratory.checked = false;
}));

nextButton.addEventListener("click", () => {
  if (!validateStep()) return;
  currentStep += 1;
  render();
});

backButton.addEventListener("click", () => {
  currentStep -= 1;
  render();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateStep()) return;
  const nearStages = ["Sudah punya kandidat", "Sudah survei lokasi", "Hampir bayar booking fee", "Hampir bayar DP", "Sudah booking dan ingin validasi"];
  const nearTimelines = ["Kurang dari 1 bulan", "1–3 bulan"];
  const nearTerm = nearStages.includes(form.elements.buying_stage.value) && nearTimelines.includes(form.elements.decision_timeline.value);
  const hasReference = propertyFields.some((input) => input.value.trim());
  const purpose = selectedValue("purchase_purpose");
  const classification = purpose === "Investasi" || !nearTerm ? "low_fit" : hasReference ? "qualified_candidate" : "exploratory";
  const labels = {
    qualified_candidate: ["Permintaan lokasi kandidat", "Kandidat spesifik dan keputusan dekat."],
    exploratory: ["Permintaan eksplorasi", "Relevan untuk Rumper, tetapi belum ada kandidat spesifik."],
    low_fit: ["Di luar fokus saat ini", "Belum mendekati keputusan atau berada di luar fokus buyer-side saat ini."]
  };
  document.querySelector("[data-classification-label]").textContent = labels[classification][0];
  document.querySelector("[data-classification-note]").textContent = labels[classification][1];
  document.querySelector("[data-request-id]").textContent = `RMP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
  steps[currentStep - 1].classList.remove("active");
  actions.hidden = true;
  document.querySelector(".intake-progress").hidden = true;
  success.classList.add("active");
  sessionStorage.removeItem("rumperIntakePrefill");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

render();
