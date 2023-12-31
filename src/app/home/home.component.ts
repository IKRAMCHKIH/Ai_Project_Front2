import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as swal from 'sweetalert';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('contactSection') contactSection: ElementRef;
  @ViewChild('aboutSection') aboutSection: ElementRef;
  userName:string;
 userid:string;


  constructor(private router: Router) { }

  ngOnInit() {
    this.userName=sessionStorage.getItem('userName');
    this.userid=sessionStorage.getItem('userId');
  }
  navigateToComponent() {
    this.router.navigate(['/CarPooling']);
  }
  scrollToContact() {
    // Scroll to the 'contact' section using native JavaScript
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });

    // If you want to update the URL to /#contact, you can use the Angular Router
    this.router.navigate(['/'], { fragment: 'contact' });
  }
  scrollToAbout() {
    // Scroll to the 'about' section using native JavaScript
    this.aboutSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  
    // If you want to update the URL to /#about, you can use the Angular Router
    this.router.navigate(['/'], { fragment: 'about' });
  }
  navigateToCarPooling() {
    // Navigate to the 'CarPooling' page
    if(!sessionStorage.getItem('userId'))
  	{
      swal({
          title: "Login To Continue!!",
          icon: "error",
        });
   	  this.router.navigate(['/login']);

  	}
    this.router.navigate(['/CarPooling']);
  }
  contact(){
    swal({
      title: "Thank you!",
      icon: "success",
    });
  }

}
