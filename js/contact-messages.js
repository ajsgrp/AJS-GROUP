import { db } from "./firebase-config.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const table = document.getElementById("contactTable");

async function loadMessages() {

    table.innerHTML = "";

    const snapshot = await getDocs(collection(db, "contacts"));

    snapshot.forEach((doc) => {

        const data = doc.data();

        table.innerHTML += `
        <tr>

            <td>${data.name}</td>

            <td>${data.email}</td>

            <td>${data.phone}</td>

            <td>${data.subject}</td>

            <td>${data.message}</td>

            <td>${new Date(data.date.seconds * 1000).toLocaleString()}</td>

        </tr>
        `;

    });

}

loadMessages();