import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonials-grid">
      @for (testimonial of testimonials; track testimonial.id) {
        <div class="testimonial-card">
          <div class="testimonial-content">
            <p>"{{ testimonial.content }}"</p>
          </div>
          <div class="testimonial-author">
            <div class="author-avatar" [style.backgroundImage]="'url(' + testimonial.avatar + ')'"></div>
            <div class="author-info">
              <h4>{{ testimonial.name }}</h4>
              <p>{{ testimonial.role }}</p>
            </div>
          </div>
        </div>
      }
    </div>
  `,
  styles: [`
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .testimonial-card {
      background: var(--background-alt);
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .testimonial-content {
      margin-bottom: 1rem;
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
    }

    .author-info h4 {
      margin: 0;
      color: var(--text);
    }

    .author-info p {
      margin: 0;
      color: var(--text);
      opacity: 0.8;
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      id: 1,
      content: 'EventFlow ha transformado la manera en que organizamos nuestros eventos corporativos.',
      name: 'Ana García',
      role: 'Gerente de Eventos',
      avatar: 'https://picsum.photos/50/50'
    },
    {
      id: 2,
      content: 'La plataforma más intuitiva y completa que he usado para gestión de eventos.',
      name: 'Carlos Rodríguez',
      role: 'Director de Marketing',
      avatar: 'https://picsum.photos/50/50'
    },
    {
      id: 3,
      content: 'Excelente herramienta para organizar eventos de cualquier tamaño.',
      name: 'María López',
      role: 'Coordinadora de Eventos',
      avatar: 'https://picsum.photos/50/50'
    }
  ];
}