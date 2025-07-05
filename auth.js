// auth.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDq30mA9QOx0p5_Xe_ZxFepCcgMSp8uHnc",
  authDomain: "chiefartcinema.firebaseapp.com",
  projectId: "chiefartcinema",
  storageBucket: "chiefartcinema.appspot.com",
  messagingSenderId: "529393442759",
  appId: "1:529393442759:web:b337894f414bbbbe73c3e2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction inscription
window.register = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Compte créé avec succès !");
  } catch (error) {
    alert(error.message);
  }
};

// Fonction connexion
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Connexion réussie !");
  } catch (error) {
    alert(error.message);
  }
};

// Fonction déconnexion
window.logout = async function () {
  await signOut(auth);
  alert("Déconnecté");
};
