import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="detail-container">
      <div class="event-header">
        <h1>Tech Conference 2024</h1>
        <span class="badge">Tecnología</span>
      </div>
      
      <div class="event-info">
        <div class="info-card">
          <h3>Detalles del Evento</h3>
          <p>📅 15 de Junio, 2024</p>
          <p>📍 Convention Center</p>
          <p>👥 Capacidad: 500 personas</p>
          <p>🏢 Organizador: Tech Events Inc</p>
        </div>
        
        <div class="registration-card">
          <h3>Registro</h3>
          <p class="price">$299.99</p>
          <button class="btn btn-primary">Registrarse Ahora</button>
        </div>
      </div>

      <div class="event-description">
        <h2>Descripción</h2>
        <p>Annual technology conference featuring the latest innovations...</p>
      </div>
    </div>
  `,
  styles: [`
    .detail-container {
      max-width: 1000px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    .event-header {
      margin-bottom: 2rem;
    }
    .badge {
      background: var(--secondary);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.875rem;
    }
    .event-info {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    .info-card, .registration-card {
      background: white;
      padding: 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .price {
      font-size: 2rem;
      font-weight: bold;
      color: var(--primary);
      margin: 1rem 0;
    }
  `]
})
export class EventDetailComponent {}