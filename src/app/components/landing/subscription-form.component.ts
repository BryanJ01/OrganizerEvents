import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="subscription-container">
      <form class="subscription-form" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <input 
            type="email" 
            [(ngModel)]="email" 
            name="email"
            placeholder="Tu correo electrónico" 
            class="form-input"
            required
          >
        </div>
        <button type="submit" class="btn btn-primary">Suscribirse</button>
      </form>
      @if (subscribed) {
        <p class="success-message">¡Gracias por suscribirte! Te mantendremos informado.</p>
      }
    </div>
  `,
  styles: [`
    .subscription-container {
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
    }

    .subscription-form {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .form-group {
      flex: 1;
    }

    .form-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 0.25rem;
    }

    .success-message {
      color: var(--success);
      margin-top: 1rem;
    }
  `]
})
export class SubscriptionFormComponent {
  email: string = '';
  subscribed: boolean = false;

  onSubmit() {
    if (this.email) {
      // Here you would typically call a service to handle the subscription
      console.log('Subscribed:', this.email);
      this.subscribed = true;
      this.email = '';
    }
  }
}