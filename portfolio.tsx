"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Database,
  Globe,
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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
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
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold">John Developer</div>
            <div className="hidden md:flex space-x-6">
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#experience" className="hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">John Developer</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Senior MEAN Stack Developer</p>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Passionate full-stack developer with 3+ years of experience building scalable web applications using
              MongoDB, Express.js, Angular, and Node.js. Specialized in creating efficient, user-friendly solutions for
              complex business problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <Download className="w-4 h-4" />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                I'm a dedicated MEAN stack developer with a passion for creating innovative web solutions. With over 3
                years of professional experience, I've successfully delivered numerous projects ranging from e-commerce
                platforms to enterprise applications.
              </p>
              <p className="text-lg mb-6">
                My expertise lies in building scalable, maintainable applications using modern JavaScript technologies.
                I enjoy working in collaborative environments and am always eager to learn new technologies and best
                practices.
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
              <Card>
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
              <Card>
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
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-primary" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-primary" />
                  Database
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.database.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-primary" />
                  Tools & Others
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.github} className="gap-2">
                        <Github className="w-4 h-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={project.live} className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experience.map((exp, index) => (
              <div key={index} className="relative">
                {index !== experience.length - 1 && <div className="absolute left-6 top-12 w-0.5 h-24 bg-border"></div>}
                <div className="flex gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Building className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <Card className="flex-1">
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6">Let's work together</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or
                just want to chat about technology, feel free to reach out!
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
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input type="email" placeholder="Email Address" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={4} />
                  <Button className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© {new Date().getFullYear()} John Developer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
