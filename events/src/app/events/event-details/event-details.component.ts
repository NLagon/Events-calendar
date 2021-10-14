import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ToastService } from 'src/app/common/toast.service';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  eventDetail:any;
  id = this.route.snapshot.params['id']; // recuperation de l'id present en parametre de l'url
  _author : string = '';
  filteredSessions = [];
  originalEventSessions;
  found = true;

  constructor( public route: ActivatedRoute, public data:DataService, public toastr :ToastService) { }


  public get author() : string {

    return this._author;
  }

  public set author(author : string) {
      this._author = author.toLowerCase();
      console.log("filtred " + this._author);

      //utiliser filter pour filter
      this.filteredSessions = this.eventDetail.sessions.filter(session => ( (session.author.toLowerCase()).includes(this._author))) ;
  }


  ngOnInit() {
    this.eventDetail = this.data.getEventById(this.id);
    this.filteredSessions = this.eventDetail.sessions;


    // this.isFiltered = (this.eventDetail.sessions).some(session => {session.author.includes(this.author),console.log("includes " ,session.author.includes(this.author)) } )
    // console.log("isFiltered ", this.isFiltered);

    this.handleEventThumbnail(this.eventDetail)
    //this.event.canActivate(this.router);

  }

  eventEmitting(){
    // this.data.selected = true;
    // this.data.idSelected = this.id;
    this.data.pushId(this.id);

  }

  handleEventThumbnail(event){
    this.toastr.toastrSuccess(event.name);
}




}
