import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventListComponent } from '../event-list/event-list.component';

@Component({
  selector: 'app-explore-events',
  standalone: true,
  imports: [CommonModule, EventListComponent],
  template: `
    <div class="explore-container">
      <h1>Explorar Eventos</h1>
      <div class="filters">
        <input type="text" placeholder="Buscar eventos..." class="search-input">
        <select class="filter-select">
          <option value="">Todas las categorías</option>
          <option value="tech">Tecnología</option>
          <option value="business">Negocios</option>
        </select>
      </div>
      <app-event-list />
    </div>
  `,
  styles: [`
    .explore-container {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    .filters {
      display: flex;
      gap: 1rem;
      margin: 2rem 0;
    }
    .search-input, .filter-select {
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 0.25rem;
    }
    .search-input {
      flex: 1;
    }
  `]
})
export class ExploreEventsComponent {}