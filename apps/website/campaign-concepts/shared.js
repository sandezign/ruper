const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    if (entry.target.classList.contains("report-spread")) entry.target.classList.add("revealed");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal, .report-spread").forEach((element) => observer.observe(element));

const sticky = document.querySelector(".sticky-cta");
const hero = document.querySelector("[data-hero]");
const offer = document.querySelector("[data-offer]");

if (sticky && hero) {
  const updateSticky = () => {
    const heroBottom = hero.getBoundingClientRect().bottom;
    const offerTop = offer ? offer.getBoundingClientRect().top : Infinity;
    sticky.classList.toggle("visible", heroBottom < 0 && offerTop > window.innerHeight * 0.75);
  };
  addEventListener("scroll", updateSticky, { passive: true });
  updateSticky();
}

document.querySelectorAll("[data-hero-scroll]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    history.replaceState(null, "", link.getAttribute("href"));
    const navHeight = document.querySelector(".nav")?.offsetHeight || 0;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navHeight - 18;
    window.scrollTo({ top: targetTop, behavior: "smooth" });
  });
});

document.querySelectorAll("[data-sample-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let valid = true;
    form.querySelectorAll("[required]").forEach((input) => {
      const field = input.closest(".field");
      const fieldValid = input.value.trim().length >= 3;
      field.classList.toggle("invalid", !fieldValid);
      input.setAttribute("aria-invalid", String(!fieldValid));
      if (!fieldValid && valid) input.focus();
      valid = valid && fieldValid;
    });
    if (!valid) return;
    const button = form.querySelector("button");
    const name = form.querySelector('input[autocomplete="name"]')?.value.trim() || "";
    const whatsapp = form.querySelector('input[autocomplete="tel"]')?.value.trim() || "";
    sessionStorage.setItem("rumperIntakePrefill", JSON.stringify({ name, whatsapp }));
    button.textContent = "Membuka formulir...";
    setTimeout(() => {
      window.location.href = "intake.html";
    }, 300);
  });
});
