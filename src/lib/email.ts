import { Resend } from "resend";
import { RESEND_API_KEY, FROM_EMAIL, APP_NAME } from "@/env";

const resend = new Resend(RESEND_API_KEY);

export const sendEmail = async (data: {
  to: string;
  subject: string;
  text: string;
}) => {
  try {
    console.log({
      RESEND_API_KEY,
      FROM_EMAIL,
      APP_NAME,
    });
    await resend.emails.send({
      from: `${APP_NAME} <${FROM_EMAIL}>`,
      to: data.to,
      subject: data.subject,
      text: data.text,
    });
    console.log(`Email sent successfully to ${data.to}`);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
};
