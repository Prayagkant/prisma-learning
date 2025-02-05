import "dotenv/config";
import routes from "./routes/index.js";
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Prisma Test");
});

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
