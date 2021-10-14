import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import { map } from 'rxjs/operators';
import { DataService } from '../shared/data.service';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolverService implements Resolve<any> {

  constructor(public data:DataService) { }

  resolve(){
      return this.data.getEvents().pipe(map(events => events ))
  }



}
