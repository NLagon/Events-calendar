import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { DataService } from 'src/app/events/shared/data.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  @ViewChild('colorI') private color: ElementRef;

  constructor(public data:DataService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.data.colorProfilObservable.subscribe((color) => {
    this.color.nativeElement.style.color = color;
    console.log("color " + color);

    } );

  }

  submitEvent(form){
    //this.data.events[0].session.duree = form.value.duree
    this.data.editProfile(form.value.firstName);
    //console.log("durree ", this.data.events[0].session.duree);
  }


}
