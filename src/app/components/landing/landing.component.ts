import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EventCarouselComponent } from './event-carousel.component';
import { TestimonialsComponent } from './testimonials.component';
import { SubscriptionFormComponent } from './subscription-form.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, EventCarouselComponent, TestimonialsComponent, SubscriptionFormComponent],
  template: `
    <div class="landing-container">
      <!-- Hero Banner -->
      <section class="hero">
        <div class="hero-content">
          <h1>Organiza Eventos Extraordinarios</h1>
          <p>Gestiona tus eventos de manera profesional con EventFlow</p>
          <div class="cta-buttons">
            <a routerLink="/explore" class="btn btn-primary">Explorar Eventos</a>
            <a routerLink="/register" class="btn btn-secondary">Crear Evento</a>
          </div>
        </div>
      </section>

      <!-- Featured Events Carousel -->
      <section class="featured-events">
        <h2>Eventos Destacados</h2>
        <app-event-carousel />
      </section>

      <!-- Testimonials -->
      <section class="testimonials">
        <h2>Lo Que Dicen Nuestros Usuarios</h2>
        <app-testimonials />
      </section>

      <!-- Subscription Form -->
      <section class="subscription">
        <h2>Mantente Informado</h2>
        <app-subscription-form />
      </section>
    </div>
  `,
  styles: [`
    .landing-container {
      width: 100%;
    }

    .hero {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      padding: 6rem 2rem;
      text-align: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .hero p {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    section {
      padding: 4rem 2rem;
    }

    section h2 {
      text-align: center;
      margin-bottom: 2rem;
    }

    .featured-events {
      background: var(--background-alt);
    }

    .testimonials {
      background: white;
    }

    .subscription {
      background: var(--background-alt);
    }
  `]
})
export class LandingComponent {}