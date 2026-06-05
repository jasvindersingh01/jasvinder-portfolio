import { resend } from "../config/resend.js";

export const sendContact = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    // Mail to you

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "jasvindersingh0901@gmail.com",
      subject: `Portfolio Contact - ${subject}`,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Subject:</strong> ${subject}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });
    
    // Auto Reply
    res.status(200).json({
      success: true,
      message:
        "Message sent successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message:
        "Failed to send message",
    });
  }
};