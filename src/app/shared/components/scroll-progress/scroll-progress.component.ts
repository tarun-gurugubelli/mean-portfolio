import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed top-0 left-0 w-full h-1 bg-muted z-50">
      <div
        class="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-150 ease-out"
        [style.width.%]="scrollProgress()"
      ></div>
    </div>
  `,
})
export class ScrollProgressComponent {
  scrollProgress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    if (scrollHeight) {
      this.scrollProgress.set((window.scrollY / scrollHeight) * 100);
    }
  }
}
