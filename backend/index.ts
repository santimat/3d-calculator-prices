import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    msg: "Hi! This is the backend for the 3D Calculator Prices.",
  });
});

app.listen(PORT, () => {
  console.log("server running on: http://localhost:" + PORT);
});
