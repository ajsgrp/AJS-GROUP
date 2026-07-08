import { app } from "./firebase-config.js";

import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const auth = getAuth(app);

// Check Login
onAuthStateChanged(auth, (user) => {

    if (user) {

        const welcome = document.getElementById("welcomeAdmin");

        if (welcome) {
            welcome.innerHTML = "Welcome, <b>" + user.email + "</b>";
        }

    } else {

        window.location.href = "admin-login.html";

    }

});

// Logout
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async (e) => {

        e.preventDefault();

        try {

            await signOut(auth);

            alert("Logged Out Successfully");

            window.location.href = "admin-login.html";

        } catch (error) {

            console.error(error);

            alert("Logout Failed");

        }

    });

}