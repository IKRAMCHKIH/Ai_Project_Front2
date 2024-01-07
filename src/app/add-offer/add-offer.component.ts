import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from '../models/cab.model';
import { UserregisterService } from '../userregister/userregister.service';
import * as swal from 'sweetalert';
import { User } from '../models/user.model';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {
  hours: number[] = Array.from({ length: 24 }, (_, i) => i); // 0 to 23 for hours
  minutes: number[] = Array.from({ length: 60 }, (_, i) => i); // 0 to 59 for minutes
  user: any = {
    // other properties
    selectedHour: 0, // default value for hours
    selectedMinute: 0, // default value for minutes
  };  
  cabC: Cab = new Cab();
  user1: number;
  constructor(private router: Router, private userregisterService: UserregisterService) {

  }

  ngOnInit() {
    this.user1= parseInt(sessionStorage.getItem('userId'));
    console.log(this.user1);
  }
  createCab(): void {
    console.log("createCab method called"); // Add this line
    this.userregisterService.createCab(this.user1,this.cabC)
      .subscribe(data => {
        swal({
          title: "Cab created successfully!",
          text: "thank you",
          icon: "success",
        });
        console.log("Cab created successfully!");
      });
  }
  

}
