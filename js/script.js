import { db } from "./firebase-config.js";
console.log("Script Loaded Successfully");
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = this;

    const formData = {
        name: form.from_name.value,
        phone: form.phone.value,
        email: form.from_email.value,
        subject: form.subject.value,
        message: form.message.value,
        date: new Date()
    };
    console.log(formData);

    emailjs.sendForm(
        "service_3dz9ssr",
        "template_bhqy5zo",
        this
    ).then(async function () {

        await addDoc(collection(db, "contacts"), formData);

        alert("✅ Thank you! Your message has been sent successfully.");

        document.getElementById("contact-form").reset();

    }, function (error) {

        alert("❌ Failed to send message.\n\n" + JSON.stringify(error));

    });
});
// Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

    });

}
// Hamburger Menu

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Menu item click -> menu close
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
        });
    });

}