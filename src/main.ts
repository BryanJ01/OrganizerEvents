import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet, RouterLink } from '@angular/router';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <div class="app-container">
      <header class="app-header">
        <h1>EventFlow</h1>
        <p>Sistema Inteligente de Gestión de Eventos</p>
        <a routerLink="/explore" class="btn btn-primary">Explorar Eventos</a>
      </header>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      background-color: var(--background);
    }
    .app-header {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      color: white;
      padding: 4rem 2rem;
      text-align: center;
    }
    .app-header h1 {
      margin: 0;
      font-size: 3rem;
      color: white;
    }
    .app-header p {
      margin: 1rem 0;
      font-size: 1.25rem;
      opacity: 0.9;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});