import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

console.log("Career Script Loaded");

document.getElementById("career-form").addEventListener("submit", async function (e) {
     console.log("Submit Clicked");
    e.preventDefault();

    const form = this;
    const resumeFile = form.resume.files[0];

let resumeUrl = "";

if (resumeFile) {

    const uploadData = new FormData();

    uploadData.append("file", resumeFile);
    uploadData.append("upload_preset", "ajs_resume");

   const response = await fetch(
    "https://api.cloudinary.com/v1_1/swpczdvm/auto/upload",
    {
        method: "POST",
        body: uploadData
    }
);

        console.log("Status:", response.status);

        const result = await response.json();

console.log("Cloudinary Response:", result);

    if (!result.secure_url) {

    alert("Resume Upload Failed");

    console.log(result);

    return;

}

    resumeUrl = result.secure_url;
}

    const formData = {
        full_name: form.full_name.value,
        phone: form.phone.value,
        email: form.email.value,
        position: form.position.value,
        message: form.message.value,
        resume: resumeUrl,
        date: new Date()
    };

    try {

        await addDoc(collection(db, "jobApplications"), formData);

        alert("Application Submitted Successfully!");

        form.reset();

    } catch (error) {

        console.error(error);

        alert("Failed to submit application.");

    }

});