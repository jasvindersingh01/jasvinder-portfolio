import transporter from "../config/mailer.js";

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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: process.env.EMAIL_USER,

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

    await transporter.sendMail({
      from: process.env.EMAIL_USER,

      to: email,

      subject:
        "Thank you for contacting me",

      html: `
        <h2>Hello ${name},</h2>

        <p>
          Thank you for reaching out.
          I have received your message
          and will get back to you soon.
        </p>

        <br/>

        <p>
          Regards,
          <br/>
          Jasvinder Singh
        </p>
      `,
    });

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