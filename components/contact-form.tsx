"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = (data: FormData): string | null => {
    if (!data.firstName.trim()) return "First name is required"
    if (!data.lastName.trim()) return "Last name is required"
    if (!data.email.trim()) return "Email is required"
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email address"
    if (!data.subject.trim()) return "Subject is required"
    if (data.message.trim().length < 10) return "Message must be at least 10 characters"
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      // Validate form
      const validationError = validateForm(formData)
      if (validationError) {
        setResult({
          success: false,
          message: validationError,
        })
        return
      }

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a static export, you would typically:
      // 1. Use a third-party service like Formspree, Netlify Forms, or EmailJS
      // 2. Send data to an external API
      // 3. Use mailto: links for simple contact

      // For demo purposes, we'll simulate success
      console.log("Contact form submission:", formData)

      // Example with EmailJS (you would need to set up EmailJS):
      // await emailjs.send('service_id', 'template_id', formData, 'public_key')

      // Example with Formspree:
      // await fetch('https://formspree.io/f/your-form-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // })

      setResult({
        success: true,
        message: "Thank you for your message! I'll get back to you within 24 hours.",
      })

      // Reset form on success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Contact form error:", error)
      setResult({
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
            <Input
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            />
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
          <Input
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
          <Textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />

          {result && (
            <Alert className={result.success ? "border-green-500" : "border-red-500"}>
              {result.success ? (
                <CheckCircle className="h-4 w-4 text-green-500" />
              ) : (
                <AlertCircle className="h-4 w-4 text-red-500" />
              )}
              <AlertDescription className={result.success ? "text-green-700" : "text-red-700"}>
                {result.message}
              </AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
