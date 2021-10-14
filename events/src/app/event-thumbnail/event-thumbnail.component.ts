import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../events/shared/data.service';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  // declaration d'un champs qui contiendra une donnée du parent
  @Input() eventChild;
  dataTransfered?;

  // C'est un objet de type EventEmitter qui émet cela
  // @Output() eventClick = new EventEmitter();

  // handleClick(){
  //     this.eventClick.emit('foo3')


  // event =
  // {
  //   name : "Solidays",
  //   date : "22/07/2020",
  //   time : "3H00"
  // }

  selected:boolean;
  eventIdSelected:number;
  arrayId:any[];
  constructor(public data : DataService) { }

  ngOnInit() {
    // this.selected = this.data.selected;
    // this.eventIdSelected = this.data.idSelected;
    this.arrayId = this.data.arrayIdSelected;
    console.log("arrayId ", this.arrayId);
    console.log("arrayId ", this.eventChild.id);

  }


}
