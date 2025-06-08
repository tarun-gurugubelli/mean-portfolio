"use server"

import { z } from "zod"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export async function submitContactForm(formData: FormData) {
  try {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    // Validate the data
    const validatedData = contactSchema.parse(data)

    // In a real application, you would:
    // 1. Send email using a service like Resend, SendGrid, or Nodemailer
    // 2. Save to database
    // 3. Send notifications

    // For demo purposes, we'll just log and return success
    console.log("Contact form submission:", validatedData)

    // Simulate email sending
    const emailSent = await sendEmail(validatedData)

    if (!emailSent) {
      throw new Error("Failed to send email")
    }

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form data and try again.",
        errors: error.errors,
      }
    }

    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

// Simulate email sending function
async function sendEmail(data: any) {
  // In a real app, integrate with email service:
  /*
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'john.developer@email.com',
    subject: `Portfolio Contact: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  })
  */

  // For demo, always return true
  return true
}
