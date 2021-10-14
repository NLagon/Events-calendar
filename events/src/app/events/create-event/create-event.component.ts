import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty:boolean = false;
  constructor(public router:Router, public data:DataService) { }

  ngOnInit() {
    //this.isDirty = true;
    console.log()
  }

  // permet de donner une valeur à isDirty utilisé
  // dans la fonction de canDeactivate qui est utilisé lorsqu'on va naviguer
  // en effet dans app-routing canDeactivate est présente qui dit si on
  //peut quitter ou non la page à l'aide de sa fonction qui definie dans app-module
  //recupere la valeur de isDirty ensuite selon true ou false on retourne true qui permet
  // de quitter ou false qui empeche cela
  cancel(form:NgForm){
    if(form.dirty)
        this.isDirty = true;
    this.router.navigate(['events']);
  }


  submitEvent(form){
    //this.data.events[0].session.duree = form.value.duree
    // this.data.updateEvent(form.value.duree);
    // console.log("durree ", this.data.events[0].session.duree);
  }



}
