import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

if (process.env.NODE_ENV === "test") {
  var server = app.listen(0, () => {});
} else {
  var server = app.listen(port, () => {
    console.log(`Hobby Hive backend listening on port ${port}`);
  });
}

export default server;