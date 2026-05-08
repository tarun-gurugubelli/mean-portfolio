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
import { ContactFormComponent } from './components/contact-form/contact-form.component';

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with Angular frontend, Node.js backend, and MongoDB database. Features include user authentication, payment integration, and admin dashboard.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
    github: '#', live: '#', image: '/placeholder.svg',
  },
  {
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features built using MEAN stack.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    github: '#', live: '#', image: '/placeholder.svg',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with data visualization, scheduled posting, and performance tracking.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Express.js'],
    github: '#', live: '#', image: '/placeholder.svg',
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
    ContactFormComponent,
  ],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  isMobileMenuOpen = signal(false);
  isScrolled = signal(false);

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
}
