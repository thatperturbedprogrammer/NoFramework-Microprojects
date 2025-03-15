const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON body

// Handle form submission
app.post("/submit", (req, res) => {
  const { fname, lname } = req.body;

  if (!fname || !lname) {
    return res.status(400).json({ error: "Both fields are required!" });
  }

  res.json({ message: "Form submitted successfully", data: { fname, lname } });
});

app.get("/", (req, res) => {
  res.send("JS Form Submission - Server");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
