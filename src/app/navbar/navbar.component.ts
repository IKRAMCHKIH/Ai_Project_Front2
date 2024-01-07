import { Component, OnInit } from '@angular/core';
import * as swal from 'sweetalert';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }
  logout(){
	  sessionStorage.removeItem('userId');
	  swal({
          title: "Logout Successfull!!",
          icon: "warning",
        });
   	this.router.navigate(['/']);
  }
}
