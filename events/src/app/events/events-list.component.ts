import { AfterViewInit, Component, Injectable, Injector, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from './shared/data.service';
import { ToastService } from '../common/toast.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IEvents } from './events';
import { EventThumbnailComponent } from '.';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit, AfterViewInit {

  // Fonction qui recupère ce qui a été emis
  /* handleEventClicked($event){

    console.log('data', $event);
    this.dataChild = $event;

   }*/


  constructor(public data: DataService, public route: ActivatedRoute, public toastr: ToastService) {
  }
  events: IEvents[];
  event_id: Observable<any>;
  flag:boolean;
  color:string;
  colorTrue : string = 'yellow';
  colorFalse : string = 'orange';
  testNgModel : string = 'TTtest'




  @ViewChild(EventThumbnailComponent) selected: EventThumbnailComponent;


  /*---------------------------- ngOnInit appelé lors du chargement du composant ------------------------*/
  // mettre dans ngOnInit qui est une sorte d'étape venant
  // après le constructeur et durant laquelle certaines
  // choses deviennent disponibles
  ngOnInit() {

    // ['events'] correspond à "events" qui est de type EventsListResolverService
    // et qui va contenir donc le flux d'evenements recupérer dans resolve present
    this.events = this.route.snapshot.data['events'];
    // this.events = this.data.getEvents();
    this.flag = false;
    // this.color = this.flag ? this.colorTrue : this.colorFalse;


  }

  ngAfterViewInit(): void {
    if (this.selected.eventChild.date) {
      console.log("Hello " + this.selected.eventChild.date);
    }
  }

  // writeProperty(text){         // case of expand
  //   this.testNgModel = text;
  // }

  // handleEventThumbnail(event){
  //     this.toastr.toastrSuccess(event.name);
  // }



}
