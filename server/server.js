import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";
import transporter from "./config/mailer.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://jasvinder-portfolio.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use(
  "/api/contact",
  contactRoutes
);

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(
      "Server Running"
    );
  }
);