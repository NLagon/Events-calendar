import { AfterViewInit, Component, OnInit } from '@angular/core';
import { DataService } from '../events/shared/data.service';
import { ProfileComponent } from '../user/profile/profile.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit  {
   firstname: any;

  constructor(public data: DataService) { }

  ngOnInit() {
    // console.log("firstname " ,this.data.firstnameUser);
     this.data.currentFirstName.subscribe(firstname => {
       this.firstname = firstname;
       console.log('this.firstname ' + this.firstname);
       if (this.firstname == 'Nassim') {
        this.data.editColor('red');
        console.log('this.firstname ' + this.firstname);
     } else {
        this.data.editColor('blue');
        console.log('this.firstname ' + this.firstname);
     }

     });



  }
}
