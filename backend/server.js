const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Start server
const PORT = 5001;
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New contact form submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.json({ message: "Message received! Thank you for contacting me." });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
