import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, limit, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPj6kt9a1eud75ViungkGmRMnX6FiRSM0",
  authDomain: "memeclassroom-98d2b.firebaseapp.com",
  projectId: "memeclassroom-98d2b",
  storageBucket: "memeclassroom-98d2b.firebasestorage.app",
  messagingSenderId: "981337458392",
  appId: "1:981337458392:web:23c34f7ac50a5b3dc8b9ad"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkCollection(name) {
  try {
    const q = query(collection(db, name), limit(5));
    const snap = await getDocs(q);
    console.log(`Collection: ${name}, Count: ${snap.size}`);
    snap.forEach(doc => {
      console.log(` - ID: ${doc.id}, Data:`, JSON.stringify(doc.data()).substring(0, 100));
    });
  } catch (err) {
    console.error(`Error querying ${name}:`, err.message);
  }
}

async function main() {
  console.log("Checking Firestore database...");
  await checkCollection("users");
  await checkCollection("memes");
  await checkCollection("templates");
  await checkCollection("staffroom_posts");
  process.exit(0);
}

main();
