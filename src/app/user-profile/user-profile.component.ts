import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from '../models/cab.model';
import { Trip } from '../models/trip.model';
import * as sweetalert from 'sweetalert';




@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"],
})
export class UserProfileComponent implements OnInit {

   isActive: boolean = false;
  rides: any[] = [];
  filteredRides: any[] = []; 
  showForm = true;
   showCard = false;

   toggleFormVisibility() {
   this.showForm = !this.showForm;
    this.showCard = !this.showForm;
  }

  constructor(private router: Router) {}

  ngOnInit() {
    this.rides = [
      { driverName: 'John Doe', date: '2023-11-01', time: '17:00 PM', departure: 'Marrakech', destination: 'Casablanca', price: 100, availablePlaces: 5, 
      imageUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1702215826~exp=1702216426~hmac=e35422b7e129753809636fa61e3e063a87ffff58827a2e6b78bf6e7ce25290bd' },
     
    ];
    
     this.filteredRides = this.rides;
   
  
  }
   deleteRide(ride: any) {
    const index = this.filteredRides.indexOf(ride);
    if (index !== -1) {
      this.filteredRides.splice(index, 1);
    }
  }
  
}