import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-registration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="registration-container">
      <h1>Registro de Evento</h1>
      <div class="registration-form">
        <div class="form-group">
          <label>Nombre Completo</label>
          <input type="text" class="form-input">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" class="form-input">
        </div>
        <div class="form-group">
          <label>Teléfono</label>
          <input type="tel" class="form-input">
        </div>
        <div class="form-group">
          <label>Empresa/Organización</label>
          <input type="text" class="form-input">
        </div>
        <button class="btn btn-primary">Completar Registro</button>
      </div>
    </div>
  `,
  styles: [`
    .registration-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
    }
    .registration-form {
      background: white;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }
    .form-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 0.25rem;
    }
  `]
})
export class EventRegistrationComponent {}