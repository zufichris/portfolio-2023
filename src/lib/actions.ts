"use server";
import { Email, SenderEmail, SenderPass } from "@/constants";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
  user:SenderEmail!,
  pass:SenderPass!
  },
});

export const sendEmail = async (data: {
  email: string;
  name: string;
  message: string;
}) => {
  try {
    const { accepted, rejected } = await transport.sendMail({
      sender: {
        address: SenderEmail!,
        name: data.name,
      },
      from: `"${data.name}" <${data.email}>`,
      to: Email,
      subject: "Message Request From Portfolio",
      priority: "high",
      text: `New Message from ${data.name}-${data.email} `,
      html: `<p>${data.message}</p>`,
      date: new Date(Date.now()),
    });

    return { accepted, rejected };
  } catch (error) {
    throw new Error("Failed to send email"); 
  }
};
