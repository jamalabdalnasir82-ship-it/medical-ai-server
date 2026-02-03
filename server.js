const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// اختبار أن السيرفر يعمل
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Medical AI Server is running"
  });
});

// API التشخيص
app.post("/diagnose", (req, res) => {
  const { symptoms } = req.body;

  if (!symptoms || symptoms.trim() === "") {
    return res.status(400).json({
      error: "No symptoms provided"
    });
  }

  // 🔹 تشخيص ذكي مبدئي (قابل للاستبدال بـ AI حقيقي)
  let diagnosis = "الأعراض غير واضحة بشكل كافٍ.";
  let advice = "يُنصح بمراجعة طبيب مختص.";

  if (symptoms.includes("حمى") || symptoms.includes("حرارة")) {
    diagnosis = "قد تكون عدوى أو التهاب.";
    advice = "اشرب سوائل، خذ قسطًا من الراحة، وراقب درجة الحرارة.";
  } else if (symptoms.includes("صداع")) {
    diagnosis = "قد يكون صداعًا ناتجًا عن إجهاد أو توتر.";
    advice = "استرح، اشرب ماء، وتجنب الشاشات لفترة.";
  } else if (symptoms.includes("سعال")) {
    diagnosis = "قد تكون نزلة برد أو التهاب بالجهاز التنفسي.";
    advice = "اشرب مشروبات دافئة، وإذا استمر السعال راجع الطبيب.";
  }

  res.json({
    symptoms,
    diagnosis,
    advice
  });
});

// Render / Railway / Heroku compatible port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
