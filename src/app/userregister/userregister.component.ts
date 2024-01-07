import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as sweetalert from 'sweetalert';
import { User } from '../models/user.model';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})

export class UserregisterComponent  {

  user: User = new User();
  


  constructor(private router: Router, private userregisterService: UserregisterService) {

  }

  createUser(): void {
    if (this.user.fullName.trim() === "") {
      sweetalert({
        title: "Registration is not satisfactory",
        text: "Please enter your Full Name",
        icon: "error",
      });
    } else {
      // Perform API call or other actions
      this.userregisterService.createUser(this.user).subscribe((data) => {
        sweetalert({
          title: "Registration Successful!",
          text: "Please Login to Continue",
          icon: "success",
        });
      });
    }
  }

}





