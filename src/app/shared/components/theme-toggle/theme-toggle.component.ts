import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Sun, Moon } from 'lucide-angular';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      (click)="theme.toggle()"
      class="inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
      aria-label="Toggle theme"
    >
      @if (theme.theme() === 'light') {
        <lucide-icon name="sun" [size]="20"></lucide-icon>
      } @else {
        <lucide-icon name="moon" [size]="20"></lucide-icon>
      }
    </button>
  `,
})
export class ThemeToggleComponent {
  theme = inject(ThemeService);
  readonly Sun = Sun;
  readonly Moon = Moon;
}
