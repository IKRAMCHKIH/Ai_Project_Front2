import { Component, OnInit } from '@angular/core';
import { DisplayOffServiceService } from '../services/display-off-service.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { Notif } from '../models/notif';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: any[] = [];
  constructor(private router: Router,private displayOffServiceService: DisplayOffServiceService) { }
  notif: Notif[];
  userName:string;
  userid:string;
  ngOnInit() {
    this.notifications = [
      { user: 'John Doe', action: 'reacted to your post', time: '10 mins ago', imageUrl: 'https://i.imgur.com/zYxDCQT.jpg', featureImageUrl: 'https://i.imgur.com/AbZqFnR.jpg' },
      // Add more notification objects as needed
    ];
    this.userName=sessionStorage.getItem('userName');
    this.userid=sessionStorage.getItem('userId');
 this.displayOffServiceService.findNotif( this.userid)
 .subscribe(data=> {
  this.notif=data;
 });
  };

}
