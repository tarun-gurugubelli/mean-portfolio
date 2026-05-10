import {
  Component, signal, HostListener, OnInit, OnDestroy,
  ElementRef, ViewChildren, QueryList, AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ThemeToggleComponent } from '../../shared/components/theme-toggle/theme-toggle.component';
import { ScrollProgressComponent } from '../../shared/components/scroll-progress/scroll-progress.component';
import { TypingAnimationComponent } from '../../shared/components/typing-animation/typing-animation.component';
import { ParticleBackgroundComponent } from '../../shared/components/particle-background/particle-background.component';
import { LoadingScreenComponent } from '../../shared/components/loading-screen/loading-screen.component';
import { SkillsProficiencyComponent } from './components/skills-proficiency/skills-proficiency.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialFormComponent } from './components/testimonial-form/testimonial-form.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const PROJECTS: { title: string; description: string; tech: string[]; github: string; live: string | null; image: string }[] = [
  {
    title: 'Codebase Assistant',
    description: 'An AI-powered web application enabling users to upload GitHub repositories or ZIP files and ask natural language questions about codebases. The agent performs semantic search, reads files, executes code, and generates suggestions — all grounded in the actual source code.',
    tech: ['Angular', 'Node.js', 'TypeScript', 'OpenAI GPT-4o', 'Pinecone', 'Express.js', 'Tailwind CSS'],
    github: 'https://github.com/tarun-gurugubelli/codebase-assistant',
    live: 'https://codeassist.tarun.win',
    image: '/codebase-assistant.svg',
  },
  {
    title: 'Self Healing RAG',
    description: 'A RAG system that automatically detects and corrects flawed answers by grading retrieved context, rewriting queries, and retrying up to 3 times — ensuring reliable, hallucination-free responses.',
    tech: ['Python', 'LangChain', 'LangGraph', 'ChromaDB', 'Groq', 'HuggingFace'],
    github: 'https://github.com/tarun-gurugubelli/self-healing-rag',
    live: null,
    image: '/self-healing-rag.svg',
  },
  {
    title: 'Dev-Ops Portfolio',
    description: 'A static Next.js web application that collects DevOps learning resources in one place, featuring modules, FAQs, installation guides, and command cheatsheets for practical learning.',
    tech: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Radix UI', 'GitHub Actions'],
    github: 'https://github.com/tarun-gurugubelli/devops-portfolio',
    live: 'https://devops.tarun.win',
    image: '/devops-portfolio.svg',
  },
];

const EXPERIENCE = [
  {
    title: 'Senior Full Stack Developer',
    role: 'Technology Analyst',
    company: 'at Infosys Ltd.',
    period: '2025 - Present',
    description: 'Driving end-to-end development of scalable MEAN stack applications with a focus on performance, reusability, and maintainability. Mentoring junior developers and collaborating across teams to deliver high-quality, production-ready solutions.',
  },
  {
    title: 'Full Stack Developer',
    role: 'Senior Systems Engineer',
    company: 'at Infosys Ltd.',
    period: '2023 - 2024',
    description: 'Led full-stack development efforts using Angular and Node.js, integrating APIs and ensuring responsive, accessible UI/UX across platforms. Actively contributed to Agile processes, documentation, and mentoring to support team productivity and code quality.',
  },
  {
    title: 'Angular Developer',
    role: 'Systems Engineer',
    company: 'at Infosys Ltd.',
    period: '2021 - 2023',
    description: 'Built and maintained robust web applications with a focus on frontend responsiveness and backend reliability. Ensured smooth delivery through active involvement in Agile practices, API integrations, and continuous performance optimization.',
  },
];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    ThemeToggleComponent,
    ScrollProgressComponent,
    TypingAnimationComponent,
    ParticleBackgroundComponent,
    LoadingScreenComponent,
    SkillsProficiencyComponent,
    TestimonialsComponent,
    TestimonialFormComponent,
    ContactFormComponent,
  ],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);
  showTestimonialForm = signal(false);

  projects = PROJECTS;
  experience = EXPERIENCE;
  currentYear = new Date().getFullYear();

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  toggleMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    this.closeMenu();
  }

  isLast(index: number): boolean {
    return index === this.experience.length - 1;
  }

  openTestimonialForm(): void {
    this.showTestimonialForm.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeTestimonialForm(): void {
    this.showTestimonialForm.set(false);
    document.body.style.overflow = '';
  }
}
