"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Users,
  Zap,
  Server,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "./components/theme-toggle"
import { ScrollProgress } from "./components/scroll-progress"
import { TypingAnimation } from "./components/typing-animation"
import { ParticleBackground } from "./components/particle-background"
import { LoadingScreen } from "./components/loading-screen"
import { useIntersectionObserver } from "./hooks/use-intersection-observer"
import { Testimonials } from "./components/testimonials"
import { ContactForm } from "./components/contact-form"
import { SkillsProficiency } from "./components/skills-proficiency"
// import { Floating3DElements } from "./components/floating-3d-elements"
// import { Hero3D } from "./components/hero-3d"

const skillIcons = {
  // Frontend
  Angular: "🅰️",
  React: "⚛️",
  TypeScript: "🔷",
  JavaScript: "🟨",
  HTML5: "🌐",
  CSS3: "🎨",
  Bootstrap: "🅱️",
  "Tailwind CSS": "💨",
  RxJS: "🔄",

  // Backend
  "Node.js": "🟢",
  "Express.js": "🚀",
  "RESTful APIs": "🔗",
  GraphQL: "📊",
  "Socket.io": "⚡",
  "JWT Authentication": "🔐",

  // Database
  MongoDB: "🍃",
  MySQL: "🐬",
  PostgreSQL: "🐘",
  Redis: "🔴",
  Mongoose: "🦫",

  // Tools
  Git: "📝",
  Docker: "🐳",
  AWS: "☁️",
  Heroku: "💜",
  Postman: "📮",
  "VS Code": "💻",
  Webpack: "📦",
  "npm/yarn": "📋",
}

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = {
    frontend: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "RxJS"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "Socket.io", "JWT Authentication"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Mongoose"],
    tools: ["Git", "Docker", "AWS", "Heroku", "Postman", "VS Code", "Webpack", "npm/yarn"],
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with Angular frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.",
      tech: ["Angular", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with real-time updates, file sharing, and team communication features built using MEAN stack.",
      tech: ["Angular", "Node.js", "MongoDB", "Socket.io", "JWT"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with data visualization, scheduled posting, and performance tracking.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js", "Express.js"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      period: "2023 - Present",
      description:
        "Lead development of enterprise web applications using MEAN stack. Mentored junior developers and implemented CI/CD pipelines.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      period: "2022 - 2023",
      description:
        "Developed and maintained multiple client projects using Angular, Node.js, and MongoDB. Improved application performance by 40%.",
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2021 - 2022",
      description:
        "Built responsive web applications and RESTful APIs. Collaborated with cross-functional teams in agile environment.",
    },
  ]

  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-background relative">
        <ParticleBackground />
        {/* <Floating3DElements /> */}
        <ScrollProgress />

        {/* Navigation */}
        <nav
          className={`fixed top-1 w-full z-40 transition-all duration-300 ${
            isScrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-background/80 backdrop-blur-sm"
          }`}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold transition-all duration-300 hover:scale-105">John Developer</div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="#about" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  About
                </Link>
                <Link href="#skills" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  Skills
                </Link>
                <Link href="#projects" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  Projects
                </Link>
                <Link href="#experience" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  Experience
                </Link>
                <Link href="#contact" className="hover:text-primary transition-all duration-300 hover:scale-105">
                  Contact
                </Link>
                <ThemeToggle />
              </div>

              {/* Mobile Navigation */}
              <div className="md:hidden flex items-center gap-2">
                <ThemeToggle />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="transition-all duration-300 hover:scale-110"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`md:hidden transition-all duration-300 overflow-hidden ${
                isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="py-4 space-y-2 border-t mt-4">
                <Link
                  href="#about"
                  className="block py-2 hover:text-primary transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="#skills"
                  className="block py-2 hover:text-primary transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="#projects"
                  className="block py-2 hover:text-primary transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#experience"
                  className="block py-2 hover:text-primary transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="#contact"
                  className="block py-2 hover:text-primary transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 relative z-10">
          <div className="container mx-auto text-center">
            <AnimatedSection>
              <div className="mb-8">
                {/* <Hero3D /> */}
                <div className="animate-in zoom-in duration-700 delay-200">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Profile"
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-6 border-4 border-primary/20 transition-all duration-500 hover:scale-110 hover:border-primary/40"
                  />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  <TypingAnimation text="John Developer" speed={150} />
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-in slide-in-from-bottom duration-700 delay-1000">
                  Senior MEAN Stack Developer
                </p>
                <p className="text-lg max-w-2xl mx-auto mb-8 animate-in slide-in-from-bottom duration-700 delay-1200">
                  Passionate full-stack developer with 3+ years of experience building scalable web applications using
                  MongoDB, Express.js, Angular, and Node.js. Specialized in creating efficient, user-friendly solutions
                  for complex business problems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in slide-in-from-bottom duration-700 delay-1400">
                  <Button size="lg" className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                  <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:scale-105">
                    <Link href="#contact">Get In Touch</Link>
                  </Button>
                </div>
                <div className="flex justify-center space-x-6 animate-in slide-in-from-bottom duration-700 delay-1600">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  >
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  >
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1"
                  >
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-muted/50 relative z-10">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-lg mb-6">
                    I'm a dedicated MEAN stack developer with a passion for creating innovative web solutions. With over
                    3 years of professional experience, I've successfully delivered numerous projects ranging from
                    e-commerce platforms to enterprise applications.
                  </p>
                  <p className="text-lg mb-6">
                    My expertise lies in building scalable, maintainable applications using modern JavaScript
                    technologies. I enjoy working in collaborative environments and am always eager to learn new
                    technologies and best practices.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary" />
                      <span>3+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      <span>15+ Projects Completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-primary" />
                      <span>Performance Optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="w-5 h-5 text-primary" />
                      <span>Full-Stack Development</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        Education
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-semibold">Bachelor of Computer Science</p>
                      <p className="text-muted-foreground">University of Technology • 2017-2021</p>
                    </CardContent>
                  </Card>
                  <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>San Francisco, CA</p>
                      <p className="text-muted-foreground">Open to remote opportunities</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4 relative z-10">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
              <SkillsProficiency />
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4 bg-muted/50 relative z-10">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <AnimatedSection key={index}>
                    <Card className="overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl group h-full">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      </div>
                      <CardHeader>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs transition-all duration-300 hover:scale-110"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="transition-all duration-300 hover:scale-105"
                          >
                            <Link href={project.github} className="gap-2">
                              <Github className="w-4 h-4" />
                              Code
                            </Link>
                          </Button>
                          <Button size="sm" asChild className="transition-all duration-300 hover:scale-105">
                            <Link href={project.live} className="gap-2">
                              <ExternalLink className="w-4 h-4" />
                              Live Demo
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
              <Testimonials />
            </AnimatedSection>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 px-4 relative z-10">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
              <div className="max-w-3xl mx-auto">
                {experience.map((exp, index) => (
                  <AnimatedSection key={index}>
                    <div className="relative">
                      {index !== experience.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-24 bg-border"></div>
                      )}
                      <div className="flex gap-6 mb-8">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                            <Building className="w-6 h-6 text-primary-foreground" />
                          </div>
                        </div>
                        <Card className="flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                          <CardHeader>
                            <CardTitle>{exp.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <span>{exp.company}</span>
                              <Separator orientation="vertical" className="h-4" />
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {exp.period}
                              </span>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p>{exp.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4 bg-muted/50 relative z-10">
          <div className="container mx-auto">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Let's work together</h3>
                  <p className="text-muted-foreground mb-8">
                    I'm always interested in new opportunities and exciting projects. Whether you have a project in mind
                    or just want to chat about technology, feel free to reach out!
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>john.developer@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t relative z-10">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground">© {new Date().getFullYear()} John Developer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  )
}
