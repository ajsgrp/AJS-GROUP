document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_3dz9ssr",
        "template_bhqy5zo",
        this
    ).then(function () {

        alert("✅ Thank you! Your message has been sent successfully.");

        document.getElementById("contact-form").reset();

    }, function (error) {

        alert("❌ Failed to send message.\n\n" + JSON.stringify(error));

    });

});