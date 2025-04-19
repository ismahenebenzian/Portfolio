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
    .send("service_jy1uamr", "template_ynbnnw5", params, "qGiYXWsGbUXB3sqcG")
    .then(() => {
      alert("Message envoyé avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi :", error);
      alert("Une erreur est survenue. Réessaye plus tard.");
    });
}
