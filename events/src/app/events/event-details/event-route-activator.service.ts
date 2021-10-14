import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
//creation d'un service qui amène à 404 si tentative d'accès à id inexistant
// appel de ce service dans app-routing.module.ts
export class EventRouteActivatorService implements CanActivate {

  events:any[];
  event:any;
  //attention ici si on ne met pas public devant router ça ne marche pas
  constructor(public dataEvents :DataService,public router : Router) { }

  canActivate(route: ActivatedRouteSnapshot) {

  this.event = !!this.dataEvents.getEventById(route.params['id']);
  if(!this.event)// le "!!" permet de convertir en boolean, si contient qlque chose donc vrai
      this.router.navigate(['404']);

      return this.event;// ici "true" donc canActivate return true et on peut naviguer vers la page

  }
}
