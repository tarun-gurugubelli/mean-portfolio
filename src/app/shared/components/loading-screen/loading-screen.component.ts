import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isLoading()) {
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div class="text-center">
          <div class="mb-8">
            <div class="w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <h2 class="text-2xl font-bold mb-2">Tarun Gurugubelli</h2>
            <p class="text-muted-foreground">Loading Portfolio...</p>
          </div>
          <div class="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-300 ease-out"
              [style.width.%]="progress()"
            ></div>
          </div>
          <p class="text-sm text-muted-foreground mt-2">{{ progress() | number:'1.0-0' }}%</p>
        </div>
      </div>
    }
  `,
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  isLoading = signal(true);
  progress = signal(0);
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress.update(p => {
        if (p >= 100) {
          clearInterval(this.timer);
          setTimeout(() => this.isLoading.set(false), 500);
          return 100;
        }
        return Math.min(p + Math.random() * 15, 100);
      });
    }, 100);
  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }
}
