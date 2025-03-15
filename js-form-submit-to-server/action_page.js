document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("myForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault(); // Prevent form from reloading

      const firstName = document.getElementById("fname").value;
      const lastName = document.getElementById("lname").value;

      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fname: firstName, lname: lastName }),
      });

      const result = await response.json();

      document.body.innerHTML = `<h2>${result.message}</h2>
                                   <p>First Name from server: ${result.data.fname}</p>
                                   <p>Last Name from server: ${result.data.lname}</p>`;
    });
});
