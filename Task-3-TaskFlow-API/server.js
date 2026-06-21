import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import taskRoutes from "./src/routes/taskRoutes.js";
import errorHandler from "./src/middleware/errorHandler.js";
import notFound from "./src/middleware/notFound.js";
import { securityHeaders } from "./src/middleware/security.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(securityHeaders);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow API Running"
  });
});

app.use("/api/tasks", taskRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});