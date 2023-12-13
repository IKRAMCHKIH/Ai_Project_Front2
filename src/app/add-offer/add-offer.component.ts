import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    
  }

}
