import { Component, signal, OnInit, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

interface Skill { name: string; icon: string; proficiency: number; }

const skillsData = {
  frontend: [
    { name: 'Angular', icon: '🅰️', proficiency: 90 },
    { name: 'React', icon: '⚛️', proficiency: 85 },
    { name: 'TypeScript', icon: '🔷', proficiency: 88 },
    { name: 'JavaScript', icon: '🟨', proficiency: 92 },
    { name: 'HTML5', icon: '🌐', proficiency: 95 },
    { name: 'CSS3', icon: '🎨', proficiency: 87 },
    { name: 'Tailwind CSS', icon: '💨', proficiency: 83 },
  ],
  backend: [
    { name: 'Node.js', icon: '🟢', proficiency: 90 },
    { name: 'Express.js', icon: '🚀', proficiency: 88 },
    { name: 'RESTful APIs', icon: '🔗', proficiency: 92 },
    { name: 'GraphQL', icon: '📊', proficiency: 75 },
    { name: 'Socket.io', icon: '⚡', proficiency: 80 },
    { name: 'JWT Authentication', icon: '🔐', proficiency: 85 },
  ],
  database: [
    { name: 'MongoDB', icon: '🍃', proficiency: 90 },
    { name: 'MySQL', icon: '🐬', proficiency: 82 },
    { name: 'PostgreSQL', icon: '🐘', proficiency: 78 },
    { name: 'Redis', icon: '🔴', proficiency: 75 },
    { name: 'Mongoose', icon: '🦫', proficiency: 88 },
  ],
  tools: [
    { name: 'Git', icon: '📝', proficiency: 92 },
    { name: 'Docker', icon: '🐳', proficiency: 80 },
    { name: 'AWS', icon: '☁️', proficiency: 75 },
    { name: 'VS Code', icon: '💻', proficiency: 95 },
  ],
};

@Component({
  selector: 'app-skills-proficiency',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div #container class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Frontend -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div class="flex flex-col space-y-1.5 p-6">
          <div class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <lucide-icon name="globe" [size]="20" class="text-primary"></lucide-icon>
            Frontend
          </div>
        </div>
        <div class="p-6 pt-0 space-y-4">
          @for (skill of frontend; track skill.name; let i = $index) {
            <ng-container *ngTemplateOutlet="progressBar; context: { skill, delay: i * 100 }"></ng-container>
          }
        </div>
      </div>

      <!-- Backend -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div class="flex flex-col space-y-1.5 p-6">
          <div class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <lucide-icon name="server" [size]="20" class="text-primary"></lucide-icon>
            Backend
          </div>
        </div>
        <div class="p-6 pt-0 space-y-4">
          @for (skill of backend; track skill.name; let i = $index) {
            <ng-container *ngTemplateOutlet="progressBar; context: { skill, delay: i * 100 }"></ng-container>
          }
        </div>
      </div>

      <!-- Database -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div class="flex flex-col space-y-1.5 p-6">
          <div class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <lucide-icon name="database" [size]="20" class="text-primary"></lucide-icon>
            Database
          </div>
        </div>
        <div class="p-6 pt-0 space-y-4">
          @for (skill of database; track skill.name; let i = $index) {
            <ng-container *ngTemplateOutlet="progressBar; context: { skill, delay: i * 100 }"></ng-container>
          }
        </div>
      </div>

      <!-- Tools -->
      <div class="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div class="flex flex-col space-y-1.5 p-6">
          <div class="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
            <lucide-icon name="code-2" [size]="20" class="text-primary"></lucide-icon>
            Tools &amp; Others
          </div>
        </div>
        <div class="p-6 pt-0 space-y-4">
          @for (skill of tools; track skill.name; let i = $index) {
            <ng-container *ngTemplateOutlet="progressBar; context: { skill, delay: i * 100 }"></ng-container>
          }
        </div>
      </div>
    </div>

    <ng-template #progressBar let-skill="skill" let-delay="delay">
      <div class="space-y-2">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-lg">{{ skill.icon }}</span>
            <span class="font-medium">{{ skill.name }}</span>
          </div>
          <span class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
            {{ skill.proficiency }}%
          </span>
        </div>
        <div class="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
            [style.width.%]="isVisible() ? skill.proficiency : 0"
            [style.transition-delay]="delay + 'ms'"
          ></div>
        </div>
      </div>
    </ng-template>
  `,
})
export class SkillsProficiencyComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container') containerRef!: ElementRef;

  isVisible = signal(false);
  frontend = skillsData.frontend;
  backend = skillsData.backend;
  database = skillsData.database;
  tools = skillsData.tools;

  private observer!: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) this.isVisible.set(true); },
      { threshold: 0.2 }
    );
    this.observer.observe(this.containerRef.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
