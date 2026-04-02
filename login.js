// Firebase Email/Password Login
const form = document.querySelector(".login-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();
    const errorMsg = document.getElementById("error");

    if (!email || !password) {
      errorMsg.innerText = "Please fill all fields";
      return;
    }

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User:", userCredential.user);
        errorMsg.innerText = "";
        alert("Login successful 🔥");
        window.location.href = "index.html";
      })
      .catch((error) => {
        errorMsg.innerText = error.message;
      });
  });
}


// Google Login
const provider = new firebase.auth.GoogleAuthProvider();

function loginWithGoogle() {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log("User:", result.user);
      alert("Login with Google successful ✅");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      document.getElementById("error").innerText = error.message;
    });
}
