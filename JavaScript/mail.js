// JavaScript/mail.js

function sendMail() {
    // Récupérer les valeurs des champs
    let name = document.getElementById("name").value.trim();
    let surname = document.getElementById("surname").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Vérifier que tous les champs sont remplis
    if (name === "" || surname === "" || email === "" || message === "") {
        alert("⚠️ Veuillez remplir tous les champs du formulaire.");
        return;
    }

    // Vérifier le format de l'email
    if (!email.includes("@") || !email.includes(".")) {
        alert("⚠️ Veuillez entrer une adresse email valide.");
        return;
    }

    // Préparer les paramètres pour EmailJS
    let params = {
        from_name: name + " " + surname,
        from_email: email,
        message: message
    };

    // ✅ TES VRAIS IDS (maintenant complets !)
    const SERVICE_ID = "service_jy1uamr";
    const TEMPLATE_ID = "template_dnupvec";   // ← Ton Template ID récupéré depuis l'URL

    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
        .then(
            function(response) {
                alert("✅ Merci " + name + " ! Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais.");
                // Réinitialiser le formulaire
                document.getElementById("name").value = "";
                document.getElementById("surname").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            },
            function(error) {
                alert("❌ Erreur lors de l'envoi du message. Veuillez réessayer.\n\nDétails : " + JSON.stringify(error));
                console.error("Erreur EmailJS :", error);
            }
        );
}