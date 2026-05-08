import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

const testimonials = [
  { id: 1, name: 'Saurabh Vasant Muley', role: 'Senior Principal Technology Architect', company: 'Infosys Ltd.', image: '/saurabh.png', rating: 5, text: 'Yet to be added' },
  { id: 2, name: 'Chander Mohan Bhargava', role: 'Principal Consultant', company: 'Infosys Ltd.', image: '/chander.png', rating: 5, text: 'Yet to be added' },
  { id: 3, name: 'Poonam Nitesh Ghadge', role: 'Senior Technology Architect', company: 'Infosys Ltd.', image: '/poonam.png', rating: 5, text: 'Yet to be added' },
  { id: 4, name: 'Gopinath Ratinakali', role: 'Project Manager', company: 'Infosys Ltd.', image: '/gopi.png', rating: 5, text: 'Yet to be added' },
];

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="relative">
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          [style.transform]="'translateX(-' + currentIndex() * 100 + '%)'"
        >
          @for (t of testimonials; track t.id) {
            <div class="w-full flex-shrink-0">
              <div class="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-4xl">
                <div class="p-8">
                  <div class="flex flex-col md:flex-row items-center gap-6">
                    <div class="flex-shrink-0">
                      <img
                        [src]="t.image"
                        [alt]="t.name"
                        width="80" height="80"
                        class="rounded-full border-4 border-primary/20 w-20 h-20 object-cover"
                        (error)="onImgError($event)"
                      />
                    </div>
                    <div class="flex-1 text-center md:text-left">
                      <lucide-icon name="quote" [size]="32" class="text-primary/30 mb-4 mx-auto md:mx-0 block"></lucide-icon>
                      <p class="text-lg mb-4 italic">{{ t.text }}</p>
                      <div class="flex items-center justify-center md:justify-start gap-1 mb-2">
                        @for (star of getStars(t.rating); track $index) {
                          <lucide-icon name="star" [size]="16" class="fill-yellow-400 text-yellow-400"></lucide-icon>
                        }
                      </div>
                      <p class="font-semibold">{{ t.name }}</p>
                      <p class="text-sm text-muted-foreground">{{ t.role }} at {{ t.company }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <div class="flex justify-center items-center gap-4 mt-6">
        <button
          (click)="prev()"
          class="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
        >
          <lucide-icon name="chevron-left" [size]="16"></lucide-icon>
        </button>

        <div class="flex gap-2">
          @for (t of testimonials; track $index; let i = $index) {
            <button
              (click)="goTo(i)"
              [class]="i === currentIndex()
                ? 'w-3 h-3 rounded-full bg-primary scale-125'
                : 'w-3 h-3 rounded-full bg-muted-foreground/30 hover:bg-muted-foreground/50'"
              class="transition-all duration-300"
            ></button>
          }
        </div>

        <button
          (click)="next()"
          class="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
        >
          <lucide-icon name="chevron-right" [size]="16"></lucide-icon>
        </button>
      </div>
    </div>
  `,
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonials = testimonials;
  currentIndex = signal(0);
  private isAutoPlaying = true;
  private interval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  next(): void {
    this.currentIndex.update(i => (i + 1) % this.testimonials.length);
    this.stopAutoPlay();
  }

  prev(): void {
    this.currentIndex.update(i => (i - 1 + this.testimonials.length) % this.testimonials.length);
    this.stopAutoPlay();
  }

  goTo(i: number): void {
    this.currentIndex.set(i);
    this.stopAutoPlay();
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).src = '/placeholder-user.jpg';
  }

  private startAutoPlay(): void {
    this.interval = setInterval(() => {
      if (this.isAutoPlaying) {
        this.currentIndex.update(i => (i + 1) % this.testimonials.length);
      }
    }, 5000);
  }

  private stopAutoPlay(): void {
    this.isAutoPlaying = false;
  }
}
