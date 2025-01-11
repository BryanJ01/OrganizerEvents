import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { ExploreEventsComponent } from './components/explore-events/explore-events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { EventRegistrationComponent } from './components/event-registration/event-registration.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'explore', component: ExploreEventsComponent },
  { path: 'event/:id', component: EventDetailComponent },
  { path: 'register/:id', component: EventRegistrationComponent },
];