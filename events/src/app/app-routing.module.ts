import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { Error404Component } from './error404/error404.component';
// import { CreateEventComponent } from './events/create-event/create-event.component';
// import { EventDetailsComponent } from './events/event-details/event-details.component';
// import { EventRouteActivatorService } from './events/event-details/event-route-activator.service';
// import { EventsListResolverService } from './events/event-details/events-list-resolver.service';
// import { EventsListComponent } from './events/events-list.component';


import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  Error404Component,
  EventRouteActivatorService,
  EventsListResolverService

} from './events/index';


const routes: Routes = [

  { path: 'events', component: EventsListComponent, resolve: {events : EventsListResolverService} } ,
  { path: 'events/new', component: CreateEventComponent, canDeactivate : ['canDeactivateCreateEvent'] },
  { path: 'event/:id', component: EventDetailsComponent, canActivate : [EventRouteActivatorService] },
  // rediriger vers ce chemin exactement car 'full',
  // sinon il y aurait eu conflit avec events/new qui contient aussi "events"
  { path: '', redirectTo : '/events', pathMatch : 'full' },
  { path: '404', component: Error404Component  },
  { path: 'user', loadChildren : () => import('./user/user.module').then(m => m.UserModule) }


  // path: '**' double etoile pour n'importe quel chemin


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class  AppRoutingModule { }
