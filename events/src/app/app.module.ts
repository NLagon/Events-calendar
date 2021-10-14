import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';



import { AppComponent,
         EventsListComponent,
         EventThumbnailComponent,
         EventDetailsComponent,
         CreateEventComponent,
        Error404Component,
       } from './events/index';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { LowerCaseSession } from './events/event-details/LowerCaseSession.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    CreateSessionComponent,
    LowerCaseSession
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    FormsModule

  ],
  providers: [
  // precise qu'on va utiliser checkDirtyState, declaration avec export plus bas
  {provide: 'canDeactivateCreateEvent',
  useValue : checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('Vous allez quitter la page sans avoir enregistré l\'évènement');
    }
        // bien mettre le return ici, "ok" de l'alerte crrspnd à true, annuler correspond à "false"
    return true; // si true on peut quitter ("deactivate") la page
}
