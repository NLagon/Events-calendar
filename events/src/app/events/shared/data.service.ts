import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  // necessaire si un autre élément est injecté dans ce service
  // informe aussi que ce service est injecté à la base et
  // donc il n'est pas nécessaire de l'ajouter dans le tableau providers de app.module.ts
  providedIn: 'root'
})
export class DataService {

  events = [
    {
      id: '1',
      name: 'Solidays',
      date: '22/07/2020',
      time: '3H00',
      description: 'Jours ensoleillés sur plage privé',
      location: { address: 'Promenade des anglais', city: 'Nice' },
      sessions : [
        {author : 'John Papa', nameSession : 'Using Angular 11'},
        {author : 'Salem', nameSession : 'Using Angular 11'},
        {author : 'Bob', nameSession : 'Using Angular 11'},
        {author : 'Zakir', nameSession : 'Using Angular 11'}
      ]

    }
    ,
    {
      id: '2',
      name: 'Miami',
      date: '28/07/2020',
      time: '9H00',
      description: 'Jours ensoleillés sur plage privé',
      location: { address: 'Miami Beach', city: 'Miami' },
      sessions : [{author : 'John Smith', nameSession : 'Using Angular 11'}]

    },
    {
      id: '3',
      name: 'Cancun',
      date: '07/08/2020',
      time: '02H00',
      description: 'Jours ensoleillés sur plage privé',
      location: { address: 'Promenade des anglais', city: 'Nice' },
      sessions : [{author : 'Jim Cooper', nameSession : 'Using Angular 11'}]
    },
    {
      id: '4',
      name: 'Zarzis',
      date: '07/08/2021',
      time: '02H00',
      description: 'Jours ensoleillés sur plage privé',
      location: { address: 'Promenade des anglais', city: 'Nice' },
      sessions : [{author : 'Jim Cooper', nameSession : 'Using Angular 11'}]
    }
  ];


  selected: boolean;
  idSelected: any;
  public arrayIdSelected: any[] = [];
  // firstnameUser =new Observable();
  private firstnameSource = new BehaviorSubject('Nassim');
  currentFirstName = this.firstnameSource.asObservable();
  private colorProfil = new BehaviorSubject('');
  colorProfilObservable = this.colorProfil.asObservable();


  constructor(public route: ActivatedRoute) { }// pour acceder à l'url


  getEvents() {
    const subject = new Subject();
    setTimeout(() => {subject.next(this.events), subject.complete(); }
    , 100);
    return subject;

    // return of(this.events)
  }


  getEventById(id) {
     // tslint:disable-next-line: triple-equals
     return this.events.find(event => event.id == id);
  }

  editProfile(firstName: any) {
       this.firstnameSource.next(firstName);
  }

  editColor(colorUser) {
    this.colorProfil.next(colorUser);
  }

  pushId(id) {
    console.log('id ', id);
    this.arrayIdSelected.push(id);
  }

  addSession(id, form) {
    this.events[id - 1].sessions.push(form);
  }

}
