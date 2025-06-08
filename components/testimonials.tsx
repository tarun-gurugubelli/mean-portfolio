"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Solutions",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "John delivered an exceptional e-commerce platform that exceeded our expectations. His expertise in the MEAN stack and attention to detail made the project a huge success. The application handles thousands of users seamlessly.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Innovations Ltd",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Working with John was a game-changer for our startup. He built our entire backend infrastructure using Node.js and MongoDB, and the performance improvements were remarkable. Highly recommended!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Designer",
    company: "Creative Agency",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "John's ability to translate complex designs into functional Angular applications is outstanding. He's not just a developer, but a problem solver who brings creative solutions to technical challenges.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Startup Founder",
    company: "StartupHub",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As a junior developer, John showed incredible growth and dedication. His code quality and collaborative spirit made him an invaluable team member. He's now one of the best developers I know.",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <Card className="mx-auto max-w-4xl">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex-shrink-0">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-primary/20"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="w-8 h-8 text-primary/30 mb-4 mx-auto md:mx-0" />
                      <p className="text-lg mb-4 italic">{testimonial.text}</p>
                      <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary scale-125" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
