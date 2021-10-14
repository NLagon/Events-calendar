import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Input() id;
  hiddenForm = true;
  hideAddMessage = false;


  constructor(public data:DataService) { }

  ngOnInit() {
  }

  submitEvent(data){
    this.data.addSession(this.id,data);
    console.log("data " + data);



  }

  hideForm(){
    this.hiddenForm = true;
    this.hideAddMessage = false;
  }


  sessionAppears(){
    this.hideAddMessage = true;
    this.hiddenForm = false;
  }


}
