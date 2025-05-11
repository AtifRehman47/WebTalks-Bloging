// login.js
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login Successful!");
      window.location.href = "index.html"; // Ya jis page pe bhejna ho
    })
    .catch((error) => {
      alert("Login Error: " + error.message);
    });
});
