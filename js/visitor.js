import { db } from "./firebase-config.js";

import {
    doc,
    updateDoc,
    increment,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

async function increaseVisitor() {

    const visitorRef = doc(db, "websiteStats", "visitors");

    const snap = await getDoc(visitorRef);

    if (snap.exists()) {

        await updateDoc(visitorRef, {

            count: increment(1)

        });

    } else {

        await setDoc(visitorRef, {

            count: 1

        });

    }

}

increaseVisitor();