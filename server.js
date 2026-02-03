const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Medical AI Server is running"
  });
});

app.post("/diagnose", (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms) {
    return res.status(400).json({
      error: "No symptoms provided"
    });
  }

  // تشخيص تجريبي (مبدئي)
  let diagnosis = "يرجى مراجعة طبيب مختص";

  if (symptoms.includes("صداع")) {
    diagnosis = "قد يكون إجهاد أو صداع توتري";
  } else if (symptoms.includes("حمى")) {
    diagnosis = "قد تكون عدوى فيروسية";
  }

  res.json({
    symptoms,
    diagnosis
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
