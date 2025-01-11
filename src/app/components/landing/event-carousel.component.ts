import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel">
      <div class="carousel-items">
        @for (event of featuredEvents; track event.id) {
          <div class="carousel-item">
            <div class="event-card">
              <div class="event-image" [style.backgroundImage]="'url(' + event.image + ')'"></div>
              <div class="event-content">
                <h3>{{ event.title }}</h3>
                <p>{{ event.description }}</p>
                <p class="event-date">📅 {{ event.date | date }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .carousel {
      overflow: hidden;
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .carousel-items {
      display: flex;
      gap: 2rem;
      padding: 1rem;
    }

    .carousel-item {
      flex: 0 0 auto;
      width: 300px;
    }

    .event-card {
      background: white;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .event-image {
      height: 160px;
      background-size: cover;
      background-position: center;
    }

    .event-content {
      padding: 1rem;
    }

    .event-date {
      color: var(--primary);
      margin-top: 0.5rem;
    }
  `]
})
export class EventCarouselComponent {
  featuredEvents = [
    {
      id: 1,
      title: 'Tech Summit 2024',
      description: 'El evento más grande de tecnología',
      date: new Date('2024-06-15'),
      image: 'https://picsum.photos/300/160'
    },
    {
      id: 2,
      title: 'Business Conference',
      description: 'Networking y oportunidades de negocio',
      date: new Date('2024-07-01'),
      image: 'https://picsum.photos/300/160'
    },
    {
      id: 3,
      title: 'Marketing Digital',
      description: 'Estrategias para el éxito online',
      date: new Date('2024-07-15'),
      image: 'https://picsum.photos/300/160'
    }
  ];
}