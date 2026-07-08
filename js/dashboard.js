import { db, app } from "./firebase-config.js";

import {
    collection,
    getDocs,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const auth = getAuth(app);

async function loadDashboard() {

    try {

        const contactSnapshot = await getDocs(collection(db, "contacts"));

        document.getElementById("contactCount").innerText =
            contactSnapshot.size;

        const applicationSnapshot = await getDocs(collection(db, "jobApplications"));

        document.getElementById("applicationCount").innerText =
            applicationSnapshot.size;
            // Visitor Count

            const visitorDoc = await getDoc(
            doc(db, "websiteStats", "visitors")
            );

            if (visitorDoc.exists()) {

                document.getElementById("visitorCount").innerText =
                    visitorDoc.data().count;

            }

    } catch (error) {

        console.error("Dashboard Error:", error);

    }

}

onAuthStateChanged(auth, (user) => {

    if (user) {

        const welcome = document.getElementById("welcomeAdmin");

        if (welcome) {

            welcome.innerHTML =
                `<b>${user.email}</b>`;

        }

        loadDashboard();

    } else {

        window.location.href = "admin-login.html";

    }

});