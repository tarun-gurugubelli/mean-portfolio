import { Component, input, signal, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-typing-animation',
  standalone: true,
  template: `
    <span>{{ displayText() }}<span class="animate-pulse">|</span></span>
  `,
})
export class TypingAnimationComponent implements OnInit, OnDestroy {
  text = input.required<string>();
  speed = input<number>(150);

  displayText = signal('');
  private index = 0;
  private timer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    this.type();
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }

  private type(): void {
    const t = this.text();
    if (this.index < t.length) {
      this.displayText.update(prev => prev + t[this.index]);
      this.index++;
      this.timer = setTimeout(() => this.type(), this.speed());
    }
  }
}
