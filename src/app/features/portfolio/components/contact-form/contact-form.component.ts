import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

interface FormData {
  firstName: string; lastName: string;
  email: string; subject: string; message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  template: `
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div class="flex flex-col space-y-1.5 p-6">
        <div class="text-2xl font-semibold leading-none tracking-tight">Send a Message</div>
      </div>
      <div class="p-6 pt-0">
        <form (ngSubmit)="onSubmit()" #form="ngForm" class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <input
              name="firstName" [(ngModel)]="formData.firstName"
              placeholder="First Name" required
              [disabled]="isSubmitting()"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
            <input
              name="lastName" [(ngModel)]="formData.lastName"
              placeholder="Last Name" required
              [disabled]="isSubmitting()"
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            />
          </div>
          <input
            name="email" [(ngModel)]="formData.email"
            type="email" placeholder="Email Address" required
            [disabled]="isSubmitting()"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          />
          <input
            name="subject" [(ngModel)]="formData.subject"
            placeholder="Subject" required
            [disabled]="isSubmitting()"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
          />
          <textarea
            name="message" [(ngModel)]="formData.message"
            placeholder="Your Message" rows="4" required
            [disabled]="isSubmitting()"
            class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 resize-none"
          ></textarea>

          @if (result()) {
            <div [class]="result()!.success ? 'border-green-500' : 'border-red-500'"
                 class="relative w-full rounded-lg border p-4 flex items-center gap-2">
              @if (result()!.success) {
                <lucide-icon name="check-circle" [size]="16" class="text-green-500"></lucide-icon>
                <span class="text-green-700">{{ result()!.message }}</span>
              } @else {
                <lucide-icon name="alert-circle" [size]="16" class="text-red-500"></lucide-icon>
                <span class="text-red-700">{{ result()!.message }}</span>
              }
            </div>
          }

          <button
            type="submit"
            [disabled]="isSubmitting() || form.invalid"
            class="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none gap-2"
          >
            @if (isSubmitting()) {
              <lucide-icon name="loader-2" [size]="16" class="animate-spin"></lucide-icon>
              Sending...
            } @else {
              Send Message
            }
          </button>
        </form>
      </div>
    </div>
  `,
})
export class ContactFormComponent {
  isSubmitting = signal(false);
  result = signal<{ success: boolean; message: string } | null>(null);

  formData: FormData = { firstName: '', lastName: '', email: '', subject: '', message: '' };

  async onSubmit(): Promise<void> {
    this.isSubmitting.set(true);
    this.result.set(null);

    const err = this.validate();
    if (err) {
      this.result.set({ success: false, message: err });
      this.isSubmitting.set(false);
      return;
    }

    await new Promise(r => setTimeout(r, 1000));
    console.log('Contact form submission:', this.formData);

    this.result.set({ success: true, message: "Thank you for your message! I'll get back to you within 24 hours." });
    this.formData = { firstName: '', lastName: '', email: '', subject: '', message: '' };
    this.isSubmitting.set(false);
  }

  private validate(): string | null {
    if (!this.formData.firstName.trim()) return 'First name is required';
    if (!this.formData.lastName.trim()) return 'Last name is required';
    if (!this.formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) return 'Invalid email address';
    if (!this.formData.subject.trim()) return 'Subject is required';
    if (this.formData.message.trim().length < 10) return 'Message must be at least 10 characters';
    return null;
  }
}
