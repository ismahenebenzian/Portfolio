// Empêche le scroll automatique pendant le chargement
if (window.location.hash) {
  // Sauvegarde l’ancre
  const target = window.location.hash;

  // Scroll en haut temporairement
  window.scrollTo(0, 0);

  // Attendre que tout soit bien chargé (images, etc.)
  window.addEventListener("load", () => {
    // Puis scroller vers l’ancre avec animation douce
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
}

function sendMail() {
  let params = {
    first_name: document.getElementById("name").value,
    last_name: document.getElementById("surname").value,
    email_ID: document.getElementById("email").value,
    message: document.getElementById("message").value,
    name:
      document.getElementById("name").value +
      " " +
      document.getElementById("surname").value,
  };

  emailjs
    .send("service_jy1uamr", "template_lgka6cb", params)
    .then(() => {
      alert("Message envoyé avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue. Réessaye plus tard.");
    });
}
