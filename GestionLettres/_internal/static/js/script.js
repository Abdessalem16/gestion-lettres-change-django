document.addEventListener("DOMContentLoaded", () => {
  // 1. Focus automatique sur le premier champ de formulaire s'il existe
  const firstInput = document.querySelector("form input:not([type='hidden'])");
  if (firstInput) {
    firstInput.focus();
  }

  // 2. Feedback lors du clic sur le bouton d'enregistrement ou de connexion
  const submitBtn = document.querySelector("button[type='submit']");
  const form = document.querySelector("form");

  if (form && submitBtn) {
    form.addEventListener("submit", () => {
      submitBtn.disabled = true;
      submitBtn.style.opacity = "0.7";
      submitBtn.innerText = "Traitement en cours...";
    });
  }

  // 3. Indicateur de chargement pour le téléchargement PDF
  const pdfLink = document.querySelector("a[href*='pdf']");
  if (pdfLink) {
    pdfLink.addEventListener("click", () => {
      pdfLink.style.opacity = "0.7";
      pdfLink.innerText = "Téléchargement en cours...";
      setTimeout(() => {
        pdfLink.style.opacity = "1";
        pdfLink.innerText = "Télécharger PDF";
      }, 2500);
    });
  }
});