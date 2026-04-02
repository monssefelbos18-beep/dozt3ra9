// Firebase Email/Password Login
const form = document.querySelector(".login-form");
const errorMsg = document.getElementById("error");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();

    // Validation
    if (!email || !password) {
      errorMsg.innerText = "Please fill all fields";
      return;
    }

    errorMsg.innerText = "";

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("User:", userCredential.user);

        alert("Login successful 🔥");
        window.location.href = "index.html";
      })
      .catch((error) => {
        errorMsg.innerText = "Invalid email or password";
        console.error(error);
      });
  });
}


// Google Login
const provider = new firebase.auth.GoogleAuthProvider();

function loginWithGoogle() {
  errorMsg.innerText = "";

  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      console.log("User:", result.user);

      alert("Welcome " + result.user.displayName + " 🔥");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error(error);
      errorMsg.innerText = "Google login failed";
    });
}
