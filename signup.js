// signup.js
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth } from "./firebaseConfig.js";

const signupBtn = document.querySelector("button");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
    alert("Please fill all fields.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signup Successful!");
      window.location.href = "Login.html";
    })
    .catch((error) => {
      alert("Signup Error: " + error.message);
    });
});
