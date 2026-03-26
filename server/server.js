require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoutes = require("./src/routes/analyze.routes");

const app = express();
const PORT = process.env.PORT;
app.use(cors({
  origin: "ai-resume-analyzer-c8qcyc1ae-hellboyoo7s-projects.vercel.app",
  credentials: true
}));
app.use(express.json());

app.use("/api/analyze", analyzeRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
