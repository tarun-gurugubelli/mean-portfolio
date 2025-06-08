"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Globe, Server } from "lucide-react"
import { useIntersectionObserver } from "../hooks/use-intersection-observer"

const skillsData = {
  frontend: [
    { name: "Angular", icon: "🅰️", proficiency: 90 },
    { name: "React", icon: "⚛️", proficiency: 85 },
    { name: "TypeScript", icon: "🔷", proficiency: 88 },
    { name: "JavaScript", icon: "🟨", proficiency: 92 },
    { name: "HTML5", icon: "🌐", proficiency: 95 },
    { name: "CSS3", icon: "🎨", proficiency: 87 },
    { name: "Tailwind CSS", icon: "💨", proficiency: 83 },
  ],
  backend: [
    { name: "Node.js", icon: "🟢", proficiency: 90 },
    { name: "Express.js", icon: "🚀", proficiency: 88 },
    { name: "RESTful APIs", icon: "🔗", proficiency: 92 },
    { name: "GraphQL", icon: "📊", proficiency: 75 },
    { name: "Socket.io", icon: "⚡", proficiency: 80 },
    { name: "JWT Authentication", icon: "🔐", proficiency: 85 },
  ],
  database: [
    { name: "MongoDB", icon: "🍃", proficiency: 90 },
    { name: "MySQL", icon: "🐬", proficiency: 82 },
    { name: "PostgreSQL", icon: "🐘", proficiency: 78 },
    { name: "Redis", icon: "🔴", proficiency: 75 },
    { name: "Mongoose", icon: "🦫", proficiency: 88 },
  ],
  tools: [
    { name: "Git", icon: "📝", proficiency: 92 },
    { name: "Docker", icon: "🐳", proficiency: 80 },
    { name: "AWS", icon: "☁️", proficiency: 75 },
    { name: "VS Code", icon: "💻", proficiency: 95 },
  ],
}

interface ProgressBarProps {
  skill: { name: string; icon: string; proficiency: number }
  isVisible: boolean
  delay: number
}

function ProgressBar({ skill, isVisible, delay }: ProgressBarProps) {
  const [animatedWidth, setAnimatedWidth] = useState(0)

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedWidth(skill.proficiency)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isVisible, skill.proficiency, delay])

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="font-medium">{skill.name}</span>
        </div>
        <Badge variant="outline" className="text-xs">
          {skill.proficiency}%
        </Badge>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedWidth}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsProficiency() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            Frontend
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsData.frontend.map((skill, index) => (
            <ProgressBar key={skill.name} skill={skill} isVisible={isIntersecting} delay={index * 100} />
          ))}
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="w-5 h-5 text-primary" />
            Backend
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsData.backend.map((skill, index) => (
            <ProgressBar key={skill.name} skill={skill} isVisible={isIntersecting} delay={index * 100} />
          ))}
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            Database
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsData.database.map((skill, index) => (
            <ProgressBar key={skill.name} skill={skill} isVisible={isIntersecting} delay={index * 100} />
          ))}
        </CardContent>
      </Card>

      <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            Tools & Others
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {skillsData.tools.map((skill, index) => (
            <ProgressBar key={skill.name} skill={skill} isVisible={isIntersecting} delay={index * 100} />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
