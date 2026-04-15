const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose"); // 1. Import mongoose

// 2. Connect to MongoDB (Localhost)
mongoose.connect("mongodb://127.0.0.1:27017/quizDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting:", err));

// 3. Create a Simple Schema and Model
const scoreSchema = new mongoose.Schema({
  quizName: String,
  score: Number,
  date: { type: Date, default: Date.now }
});

const Score = mongoose.model("Score", scoreSchema);

// View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

// ================= ROUTES =================
app.get("/", (req, res) => {
  res.render("Home.ejs");
});

app.get("/quiz1", (req, res) => {
  res.render("quiz1.ejs");
});



// ================= QUIZ 1 SUBMIT =================
app.post("/quiz1/submit", async (req, res) => {
  const answers1 = { q1: "C", q2: "B", q3: "B", q4: "B", q5: "B", q6: "C", q7: "C", q8: "A", q9: "B", q10: "D" };
  let score1 = 0;

  for (let key in answers1) {
    if (req.body[key] === answers1[key]) {
      score1++;
    }
  }

  // 4. Save to MongoDB
  const newScore = new Score({
    quizName: "General Knowledge",
    score: score1
  });
  await newScore.save(); 

  res.render("viewscore1.ejs", { score1 });
});


// ================= LEADERBOARD ROUTE =================
// 6. New route to see all scores
app.get("/leaderboard", async (req, res) => {
  try {
    const allScores = await Score.find().sort({ score: -1 });
    // This sends the data to your leaderboard.ejs file
    res.render("leaderboard.ejs", { allScores }); 
  } catch (err) {
    res.status(500).send("Error fetching leaderboard");
  }
});
app.listen(8080, () => {
  console.log("Server running at http://localhost:8080");
});
