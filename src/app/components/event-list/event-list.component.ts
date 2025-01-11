import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="events-container">
      <h2>Próximos Eventos</h2>
      <div class="event-grid">
        @for (event of events; track event.id) {
          <div class="event-card">
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
            <div class="event-details">
              <span>📅 {{ event.date | date }}</span>
              <span>📍 {{ event.location }}</span>
              <span>👥 Capacity: {{ event.capacity }}</span>
            </div>
            <button class="btn btn-primary">Ver Detalles</button>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .events-container {
      padding: 20px;
    }
    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .event-card {
      padding: 20px;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .event-details {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 12px 0;
      font-size: 0.9em;
      color: var(--text);
    }
    .btn {
      width: 100%;
      margin-top: 1rem;
    }
  `]
})
export class EventListComponent {
  events: Event[] = [
    {
      id: '1',
      title: 'Tech Conference 2024',
      description: 'Annual technology conference featuring the latest innovations',
      date: new Date('2024-06-15'),
      location: 'Convention Center',
      capacity: 500,
      organizer: 'Tech Events Inc'
    },
    {
      id: '2',
      title: 'Business Workshop',
      description: 'Leadership and management skills workshop',
      date: new Date('2024-07-01'),
      location: 'Business Center',
      capacity: 100,
      organizer: 'Business Academy'
    }
  ];
}