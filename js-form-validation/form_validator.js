document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let isValid = true;

  // Reset error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required!";
    isValid = false;
  }

  // Email validation
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required!";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format!";
    isValid = false;
  }

  // If all fields are valid, redirect
  if (isValid) {
    window.location.href = "success.html"; // Redirect to another page
  }
});
