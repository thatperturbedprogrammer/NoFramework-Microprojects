document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("saved-note").innerText =
    localStorage.getItem("userNote") || "No saved note";
});

// save note
function saveNote() {
  const note = document.getElementById("note").value;
  localStorage.setItem("userNote", note);
  document.getElementById("saved-note").innerText = note;
}

function deleteNote() {
  localStorage.removeItem("userNote");
  document.getElementById("saved-note").innerText = "No saved note";
}
