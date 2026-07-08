import { db } from "./firebase-config.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const table = document.getElementById("applicationsTable");

async function loadApplications() {

    table.innerHTML = "";

    const snapshot = await getDocs(collection(db, "jobApplications"));

    snapshot.forEach((doc) => {

        const data = doc.data();

        table.innerHTML += `
        <tr>

            <td>${data.full_name}</td>

            <td>${data.position}</td>

            <td>
                <a href="${data.resume}" target="_blank" class="download-btn">
                    ⬇ Download
                </a>
            </td>

            <td>Pending</td>

            <td>
                <a href="${data.resume}" target="_blank" class="view-btn">
                   👁 View
                </a>
            </td>

        </tr>
        `;

    });

}

loadApplications();