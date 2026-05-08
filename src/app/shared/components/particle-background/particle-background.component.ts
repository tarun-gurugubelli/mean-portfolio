import { Component, ElementRef, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
}

@Component({
  selector: 'app-particle-background',
  standalone: true,
  template: `
    <canvas
      #canvas
      class="fixed inset-0 pointer-events-none z-0 opacity-30"
      style="background: transparent"
    ></canvas>
  `,
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private particles: Particle[] = [];
  private animationId = 0;
  private resizeHandler = () => { this.resize(); this.initParticles(); };

  ngAfterViewInit(): void {
    this.resize();
    this.initParticles();
    this.animate();
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeHandler);
  }

  private get canvas(): HTMLCanvasElement { return this.canvasRef.nativeElement; }
  private get ctx(): CanvasRenderingContext2D { return this.canvas.getContext('2d')!; }

  private resize(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    this.particles = Array.from({ length: 50 }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }

  private animate(): void {
    this.particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;
    });

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.particles.forEach(p => {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(99,102,241,${p.opacity})`;
      this.ctx.fill();
    });

    this.particles.forEach((p, i) => {
      this.particles.slice(i + 1).forEach(o => {
        const d = Math.hypot(p.x - o.x, p.y - o.y);
        if (d < 100) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(o.x, o.y);
          this.ctx.strokeStyle = `rgba(99,102,241,${0.1 * (1 - d / 100)})`;
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
        }
      });
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }
}
