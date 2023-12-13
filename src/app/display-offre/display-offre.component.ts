import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';
import { DisplayOffServiceService } from '../services/display-off-service.service';

@Component({
  selector: 'app-display-offre',
  templateUrl: './display-offre.component.html',
  styleUrls: ['./display-offre.component.css']
})
export class DisplayOffreComponent implements OnInit {
  isActive: boolean = false;
  rides: any[] = [];
  filteredRides: any[] = [];

  searchParams: {
    departure: string,
    destination: string,
    date: string
  } = {
    departure: '',
    destination: '',
    date: ''
  };

  constructor(private DisplayOffServiceService: DisplayOffServiceService) {}

  ngOnInit() {
     this.rides = [
      { driverName: 'John Doe', date: '2023-11-01', time: '17:00 PM', departure: 'Marrakech', destination: 'Casablanca', price: 100, availablePlaces: 5, imageUrl: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=740&t=st=1702215826~exp=1702216426~hmac=e35422b7e129753809636fa61e3e063a87ffff58827a2e6b78bf6e7ce25290bd' },
      { driverName: 'Benaarr Mohamed', date: '2023-10-29', time: '08:00 AM', departure: 'Marrakech', destination: 'Rabat', price: 90, availablePlaces: 4, imageUrl: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg' },
      { driverName: 'Lakkab Hamza', date: '2023-11-02', time: '10:00 AM', departure: 'Rabat', destination: 'Casablanca', price: 110, availablePlaces: 5, imageUrl: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-posing_23-2148243624.jpg?size=626&ext=jpg&ga=GA1.1.1572443305.1702219442&semt=ais' },
      { driverName: 'Jane Smith', date: '2023-11-05', time: '09:30 AM', departure: 'Casablanca', destination: 'Marrakech', price: 95, availablePlaces: 3, imageUrl: 'https://img.freepik.com/free-photo/portrait-young-woman-yellow-wall_171337-383.jpg?size=626&ext=jpg' },
      { driverName: 'Ahmed Ali', date: '2023-11-10', time: '15:15 PM', departure: 'Tangier', destination: 'Agadir', price: 120, availablePlaces: 2, imageUrl: 'https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg?size=626&ext=jpg&ga=GA1.1.1572443305.1702219442&semt=ais' },
      { driverName: 'Maria Garcia', date: '2023-11-15', time: '12:45 PM', departure: 'Fes', destination: 'Meknes', price: 85, availablePlaces: 6, imageUrl: 'https://img.freepik.com/free-photo/happy-businesswoman-portrait_23-2148360348.jpg?size=626&ext=jpg' },
    ];
    
     this.filteredRides = this.rides;
  }

  searchRides(selectedRide: any) {
    this.filteredRides = this.rides.filter(ride =>
      ride.departure.toLowerCase().includes(this.searchParams.departure.toLowerCase()) &&
      ride.destination.toLowerCase().includes(this.searchParams.destination.toLowerCase()) &&
      ride.date.includes(this.searchParams.date)
    );

    swal({
      title: "Ride Details",
      text: `Driver Name: ${selectedRide.driverName}\nDate: ${selectedRide.date}\nTime: ${selectedRide.time}\nDeparture: ${selectedRide.departure}\nDestination: ${selectedRide.destination}\nPrice: ${selectedRide.price}\nAvailable Places: ${selectedRide.availablePlaces}`,
      icon: "info",
    });
  }
}
