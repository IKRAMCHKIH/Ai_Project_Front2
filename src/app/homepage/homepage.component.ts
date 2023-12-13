import { Component, OnInit } from '@angular/core';
import * as sweetalert from 'sweetalert';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})



export class HomepageComponent implements OnInit {
  constructor(private router: Router) { }
  	 ngOnInit() {
	    sweetalert({
          title: "Hi! Welcome to Car Pool",
          text: "- To see the user dashboard register with facePrep company and Login! \n \n"+
          "- To see company dashboard use Email:jhondoe@faceprep.com and Password:qwertyuiop",
          icon: "info",
        });
     }
     navigateTo() {
      this.router.navigate(['/displayOffre']);
    }
}