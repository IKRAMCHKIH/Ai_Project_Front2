import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';
import { DisplayOffServiceService } from '../services/display-off-service.service';
import { User } from '../models/user.model';
import { Cab } from '../models/cab.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-offre',
  templateUrl: './display-offre.component.html',
  styleUrls: ['./display-offre.component.css']
})
export class DisplayOffreComponent implements OnInit {
  isActive: boolean = false;
  rides: any[] = [];
  filteredRides: any[] = [];
  cabbyid: Cab = new Cab();
 cabbyuserId: User = new User();
 userName:string;
 userid:string;
 usercab: Cab = new Cab();

  searchParams: {
    departure: string,
    destination: string,
    date: string
  } = {
    departure: '',
    destination: '',
    date: ''
  };

  constructor(private router: Router, private DisplayOffServiceService: DisplayOffServiceService) {}

  ngOnInit() {
     this.rides = [
      'https://source.unsplash.com/400x200/?car',
     
    ];
    
     this.filteredRides = this.rides;
    //  if(!sessionStorage.getItem('userId'))
  	// {
    //   swal({
    //       title: "Login To Continue!!",
    //       icon: "error",
    //     });
   	//   this.router.navigate(['/login']);
  	// }

            

    this.userName=sessionStorage.getItem('userName');
    this.userid=sessionStorage.getItem('userId');
    this.DisplayOffServiceService.getCabs()
    .subscribe( data => {
      this.cabbyid = data;
      console.log(this.cabbyid);
    }); 
    
  }

  searchRides(selectedRide: any) {
  
    swal({
      title: "Ride Details",
      text: `Driver Name: ${this.cabbyid.driverName}\nDate: ${this.cabbyid.date}\nTime: ${this.cabbyid.time}`,
      // \nDeparture: ${selectedRide.departure}\nDestination: ${selectedRide.destination}\nPrice: ${selectedRide.price}\nAvailable Places: ${selectedRide.availablePlaces}`,
      icon: "info",
    });
  }
}


