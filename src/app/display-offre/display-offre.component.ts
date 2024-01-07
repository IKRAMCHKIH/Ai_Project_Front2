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
  allRides: Cab[] = []; // Stocker toutes les rides
  filteredRides: Cab[] = [];
  cabbyid: Cab = new Cab();
  cab : Cab[];
 cabbyuserId: User = new User();
 userName:string;
 userid:string;
 usercab: Cab = new Cab();

  searchParams: {
    source: string,
    destination: string,
    date: string
  } = {
    source: '',
    destination: '',
    date: ''
  };
  

  constructor(private router: Router, private DisplayOffServiceService: DisplayOffServiceService) {}

  ngOnInit() {
    this.rides = [
      'https://source.unsplash.com/400x200/?car',
    ];
    this.DisplayOffServiceService.getCabs2()
    .subscribe(data => {
      this.allRides = data;
      this.filteredRides = data;
    }, error => {
      console.error('Error fetching cabs:', error);
      // swal(...) for error message
    });

    this.DisplayOffServiceService.getCabs()
    .subscribe(data => {
      this.cabbyid = data;
      console.log("aweswm22222222",this.cabbyid);

    }, error => {
      console.error('Error fetching cabs:', error);
      // swal(...) for error message
    });

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
   

   
    
  }

  searchides(cabId: String) : void{
    console.log(`Joining cab with ID: ${cabId}`);
    const cabCoordinates = this.getCabCoordinates(cabId);
    swal({
      title: "Ride Details",
      text: `Driver Name: ${cabCoordinates.driverName}   ||  Driver Mobile: ${cabCoordinates.driverMob}`,
           
      // \nDeparture: ${selectedRide.departure}\nDestination: ${selectedRide.destination}\nPrice: ${selectedRide.price}\nAvailable Places: ${selectedRide.availablePlaces}`,
      icon: "info",
    });
  }

  getCabCoordinates(cid: String): any {

    const selectedCab = this.filteredRides.find(cab => cab.cid === cid);
    return selectedCab;

  }

  selectCab(): any {

    const selectedCab = this.filteredRides.find(cab => cab.source === this.searchParams.source.toLowerCase() || 
      cab.destination === this.searchParams.destination.toLowerCase() || cab.date === this.searchParams.date);
    return selectedCab;

  }

  searchRides() {
    // Filtrer les rides basé sur les critères de recherche
    this.filteredRides = [...this.allRides];
console.log(this.searchParams.source);
console.log("Filtered Rides:", this.filteredRides);
    if (this.searchParams.source) {
      this.filteredRides = this.filteredRides.filter(cab =>
        cab.source.toLowerCase().includes(this.searchParams.source.toLowerCase())
      );
      console.log("Filtered Rides: 11", this.filteredRides);
    }
  
    if (this.searchParams.destination) {
      this.filteredRides = this.filteredRides.filter(cab =>
        cab.destination.toLowerCase().includes(this.searchParams.destination.toLowerCase())
      );
      console.log("Filtered Rides:22222", this.filteredRides);
    }
  
    if (this.searchParams.date) {
      this.filteredRides = this.filteredRides.filter(cab =>
        cab.date.includes(this.searchParams.date)
      );
      console.log("Filtered Rides:33333333", this.filteredRides);
    }

    console.log("Filtered Rides:", this.filteredRides);

    // const cabCoordinates = this.selectCab();
    // this.filteredRides = cabCoordinates;
    // console.log("Joining searchParams with ID:",this.filteredRides);
    // console.log("Joining sadaf with ID:",this.filteredRides);
    
    // console.log("Joining searchParams with ID:",this.searchParams.source);
    // this.filteredRides = this.allRides.filter(cab => {
    //   const matchesSource = cab.source.toLowerCase().includes(this.searchParams.source.toLowerCase());
    //   const matchesDestination = cab.destination.toLowerCase().includes(this.searchParams.destination.toLowerCase());
    //   const matchesDate = this.searchParams.date ? cab.date.includes(this.searchParams.date) : true;
    //   console.log("Joining matchesSource with ID:",matchesSource);
    //   return matchesSource || matchesDestination || matchesDate;
    // });
  }
}


