import { Component, signal, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

interface TestimonialFormData {
  fullName: string;
  roleTitle: string;
  company: string;
  areas: string[];
  rating: number;
  testimonial: string;
  usagePermission: string;
}

const FORM_RESPONSE_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSf1lQGWK-QbX4ZlEe49tXYIsHIDe5IBh2T_cqafH_V3Pj3Rpw/formResponse';

const AREAS = ['Frontend', 'Backend', 'Dev-Ops', 'Full Stack'];

const USAGE_OPTIONS = [
  'Yes, use my full name and testimonial.',
  'Yes, but only use my first name and company/role.',
  'No, please keep my feedback private.',
];

@Component({
  selector: 'app-testimonial-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <!-- Overlay -->
    <div
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      (click)="onOverlayClick($event)"
    >
      <div class="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      <!-- Modal Card -->
      <div
        class="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-lg border bg-card text-card-foreground shadow-lg"
        (click)="$event.stopPropagation()"
      >
        <!-- Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <div>
            <h2 class="text-2xl font-semibold leading-none tracking-tight">Register a Testimonial</h2>
            <p class="text-sm text-muted-foreground mt-1">Share your experience working together</p>
          </div>
          <button
            type="button"
            (click)="close()"
            class="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <lucide-icon name="x" [size]="16"></lucide-icon>
          </button>
        </div>

        <!-- Form Body -->
        <div class="p-6">
          <form (ngSubmit)="onSubmit()" #form="ngForm" class="space-y-5">

            <!-- Full Name -->
            <div class="space-y-1.5">
              <label class="text-sm font-medium">
                Full Name <span class="text-destructive">*</span>
              </label>
              <input
                name="fullName" [(ngModel)]="formData.fullName"
                placeholder="Your full name" required
                [disabled]="isSubmitting()"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              />
            </div>

            <!-- Role / Title -->
            <div class="space-y-1.5">
              <label class="text-sm font-medium">
                Role / Title <span class="text-destructive">*</span>
              </label>
              <input
                name="roleTitle" [(ngModel)]="formData.roleTitle"
                placeholder="e.g. Senior Engineer" required
                [disabled]="isSubmitting()"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              />
            </div>

            <!-- Company -->
            <div class="space-y-1.5">
              <label class="text-sm font-medium">
                Company / Organization
                <span class="text-muted-foreground text-xs font-normal">(optional)</span>
              </label>
              <input
                name="company" [(ngModel)]="formData.company"
                placeholder="Your company name"
                [disabled]="isSubmitting()"
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
              />
            </div>

            <!-- Testimonial Area -->
            <div class="space-y-1.5">
              <label class="text-sm font-medium">
                Testimonial Area <span class="text-destructive">*</span>
              </label>
              <div class="flex flex-wrap gap-2">
                @for (area of areas; track area) {
                  <button
                    type="button"
                    (click)="toggleArea(area)"
                    [disabled]="isSubmitting()"
                    [class]="isAreaSelected(area)
                      ? 'inline-flex items-center rounded-full border border-primary bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold transition-all duration-300 hover:scale-105'
                      : 'inline-flex items-center rounded-full border border-input bg-background px-3 py-1 text-xs font-semibold hover:bg-accent hover:border-primary/50 transition-all duration-300 hover:scale-105'"
                  >
                    {{ area }}
                  </button>
                }
              </div>
            </div>

            <!-- Performance Rating -->
            <div class="space-y-1.5">
              <label class="text-sm font-medium">
                Performance Rating <span class="text-destructive">*</span>
              </label>
              <div class="flex gap-1">
                @for (star of [1, 2, 3, 4, 5]; track star) {
                  <button
                    type="button"
                    (click)="setRating(star)"
                    (mouseenter)="hoverRating.set(star)"
                    (mouseleave)="hoverRating.set(0)"
                    [disabled]="isSubmitting()"
                    class="transition-all duration-150 hover:scale-125 disabled:pointer-events-none"
                  >
                    <lucide-icon
                      name="star"
                      [size]="28"
                      [class]="star <= (hoverRating() || formData.rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-none text-muted-foreground/40'"
                    ></lucide-icon>
                  </button>
                }
                @if (formData.rating > 0) {
                  <span class="ml-2 text-sm text-muted-foreground self-center">{{ formData.rating }}/5</span>
                }
              </div>
            </div>

            <!-- Testimonial Text -->
            <div class="space-y-1.5">
              <label class="text-sm font-medium">
                Your Testimonial <span class="text-destructive">*</span>
              </label>
              <textarea
                name="testimonial" [(ngModel)]="formData.testimonial"
                placeholder="A few sentences summarizing your experience and the results."
                rows="4" required
                [disabled]="isSubmitting()"
                class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 resize-none"
              ></textarea>
            </div>

            <!-- Usage Permission -->
            <div class="space-y-2">
              <label class="text-sm font-medium">
                Usage Permission <span class="text-destructive">*</span>
              </label>
              <div class="space-y-3">
                @for (opt of usageOptions; track opt) {
                  <label
                    class="flex items-start gap-3 cursor-pointer group"
                    (click)="formData.usagePermission = opt"
                  >
                    <div
                      [class]="formData.usagePermission === opt
                        ? 'mt-0.5 w-4 h-4 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 transition-all duration-200'
                        : 'mt-0.5 w-4 h-4 rounded-full border-2 border-input flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 transition-all duration-200'"
                    >
                      @if (formData.usagePermission === opt) {
                        <div class="w-2 h-2 rounded-full bg-primary"></div>
                      }
                    </div>
                    <span class="text-sm leading-relaxed select-none">{{ opt }}</span>
                  </label>
                }
              </div>
            </div>

            <!-- Result Alert -->
            @if (result()) {
              <div
                [class]="result()!.success
                  ? 'border-green-500 bg-green-50 dark:bg-green-950/20'
                  : 'border-red-500 bg-red-50 dark:bg-red-950/20'"
                class="relative w-full rounded-lg border p-4 flex items-start gap-3"
              >
                @if (result()!.success) {
                  <lucide-icon name="check-circle" [size]="16" class="text-green-500 flex-shrink-0 mt-0.5"></lucide-icon>
                  <span class="text-green-700 dark:text-green-400 text-sm">{{ result()!.message }}</span>
                } @else {
                  <lucide-icon name="alert-circle" [size]="16" class="text-red-500 flex-shrink-0 mt-0.5"></lucide-icon>
                  <span class="text-red-700 dark:text-red-400 text-sm">{{ result()!.message }}</span>
                }
              </div>
            }

            <!-- Action Buttons -->
            <div class="flex gap-3 pt-1">
              <button
                type="button"
                (click)="close()"
                [disabled]="isSubmitting()"
                class="inline-flex items-center justify-center flex-1 h-10 px-4 rounded-md border border-input bg-background text-sm font-medium transition-all duration-300 hover:bg-accent hover:text-accent-foreground disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                [disabled]="isSubmitting()"
                class="inline-flex items-center justify-center flex-1 h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 disabled:opacity-50 disabled:pointer-events-none gap-2"
              >
                @if (isSubmitting()) {
                  <lucide-icon name="loader-2" [size]="16" class="animate-spin"></lucide-icon>
                  Submitting...
                } @else {
                  <lucide-icon name="send" [size]="14"></lucide-icon>
                  Submit Testimonial
                }
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  `,
})
export class TestimonialFormComponent {
  closed = output<void>();

  readonly areas = AREAS;
  readonly usageOptions = USAGE_OPTIONS;

  formData: TestimonialFormData = {
    fullName: '',
    roleTitle: '',
    company: '',
    areas: [],
    rating: 0,
    testimonial: '',
    usagePermission: '',
  };

  isSubmitting = signal(false);
  result = signal<{ success: boolean; message: string } | null>(null);
  hoverRating = signal(0);

  close(): void {
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  toggleArea(area: string): void {
    const idx = this.formData.areas.indexOf(area);
    if (idx >= 0) {
      this.formData.areas.splice(idx, 1);
    } else {
      this.formData.areas.push(area);
    }
  }

  isAreaSelected(area: string): boolean {
    return this.formData.areas.includes(area);
  }

  setRating(rating: number): void {
    this.formData.rating = rating;
  }

  async onSubmit(): Promise<void> {
    this.isSubmitting.set(true);
    this.result.set(null);

    const err = this.validate();
    if (err) {
      this.result.set({ success: false, message: err });
      this.isSubmitting.set(false);
      return;
    }

    try {
      const body = new URLSearchParams();
      body.append('entry.1475203048', this.formData.fullName);
      body.append('entry.674555954', this.formData.roleTitle);
      if (this.formData.company.trim()) {
        body.append('entry.1520607915', this.formData.company);
      }
      for (const area of this.formData.areas) {
        body.append('entry.2092514486', area);
      }
      body.append('entry.1671955387', String(this.formData.rating));
      body.append('entry.124049217', this.formData.testimonial);
      body.append('entry.1700236670', this.formData.usagePermission);

      await fetch(FORM_RESPONSE_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      this.result.set({
        success: true,
        message: 'Thank you for your testimonial! It has been submitted successfully.',
      });
      this.resetForm();
      setTimeout(() => this.close(), 2500);
    } catch {
      this.result.set({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
    }

    this.isSubmitting.set(false);
  }

  private validate(): string | null {
    if (!this.formData.fullName.trim()) return 'Full name is required.';
    if (!this.formData.roleTitle.trim()) return 'Role / Title is required.';
    if (this.formData.areas.length === 0) return 'Please select at least one testimonial area.';
    if (this.formData.rating === 0) return 'Please provide a performance rating.';
    if (this.formData.testimonial.trim().length < 10) return 'Testimonial must be at least 10 characters.';
    if (!this.formData.usagePermission) return 'Please select a usage permission option.';
    return null;
  }

  private resetForm(): void {
    this.formData = {
      fullName: '',
      roleTitle: '',
      company: '',
      areas: [],
      rating: 0,
      testimonial: '',
      usagePermission: '',
    };
  }
}
