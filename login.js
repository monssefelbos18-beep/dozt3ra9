const form = document.querySelector(".login-form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const emailInput = document.querySelector("input[type='email']");
    const passwordInput = document.querySelector("input[type='password']");
    const errorMsg = document.getElementById("error");

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check empty fields
    if (!email || !password) {
      errorMsg.innerText = "Please fill all fields";
      return;
    }

    // Fake login check
    if (email === "admin@gmail.com" && password === "123456") {
      errorMsg.innerText = "";
      alert("Login successful 🔥");
      window.location.href = "index.html";
    } else {
      errorMsg.innerText = "Wrong email or password";
    }
  });
}
