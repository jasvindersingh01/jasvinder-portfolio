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

app.get("/test-mail", async (req, res) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "Portfolio Test Email",
      html: `
        <h2>✅ Email Working Successfully</h2>
        <p>Nodemailer is configured correctly.</p>
      `,
    });

    res.status(200).json({
      success: true,
      message: "Test email sent successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

app.listen(
  process.env.PORT || 5000,
  () => {
    console.log(
      "Server Running"
    );
  }
);