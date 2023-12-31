import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cab } from '../models/cab.model';
import { Trip } from '../models/trip.model';
import * as swal from 'sweetalert';
import { UserdashboardService } from './userdashboard.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
 cabbyid: Cab = new Cab();
 cabbyuserId: User = new User();
 trip: Trip = new Trip();
 trip1: Trip = new Trip();
 usercab: Cab = new Cab();
 tripid:string;
 tripstatus:string ="false";
 userName:string;
 userid:string;


  constructor(private router: Router,private userdashboardService: UserdashboardService) { }

  ngOnInit() {
	if(!sessionStorage.getItem('userId'))
  	{
      swal({
          title: "Login To Continue!!",
          icon: "error",
        });
   	  this.router.navigate(['/login']);
  	}

            
  	this.cabbyid.companyId=sessionStorage.getItem('adminCid');
    this.userName=sessionStorage.getItem('userName');
    this.trip1.userid=sessionStorage.getItem('userId');
    this.userid=sessionStorage.getItem('userId');



    // this.userdashboardService.gettrip(this.trip1)
    //   .subscribe( data => {
    //     if(!data){

    //     }else{
    //         if(data.is_approved=="1"){
    //           this.tripstatus="approved";
    //         }else{
    //           this.tripstatus="requested";
    //         }
    //       this.tripid=data.id;
    //       this.usercab.cid=data.cid;
    //     this.userdashboardService.getUserCab(this.usercab)
    //       .subscribe( data => {
    //         this.usercab = data;
    //       });
    //     }
    //   });

  	 this.userdashboardService.getCabs(this.cabbyid)
      .subscribe( data => {
        this.cabbyid = data;
        console.log(this.cabbyid);
      }); 

      // this.userdashboardService.getCabsbyuser(this.userid)
      // .subscribe( data => {
      //   this.cabbyuserId.Cab = data;
      // });

  }

  // optcab(cabid,index){
  //   let userid=sessionStorage.getItem('userId');
  //   let companyid=sessionStorage.getItem('userCid');
  //     this.trip.cab_id=cabid;
  //     this.trip.userid=userid;
  //     this.trip.cid=companyid;
  //     this.trip.is_approved="0";


  //     this.userdashboardService.optcab(this.trip)
  //     .subscribe( data => {
  //           if(data.is_approved=="1"){
  //             this.tripstatus="approved";
  //           }else{
  //             this.tripstatus="requested";
  //           }
  //           this.tripid=data.id;
  //           this.usercab.cid=data.cid;
  //         this.userdashboardService.getUserCab(this.usercab)
  //         .subscribe( data => {
  //           this.usercab = data;
  //         });

  //       this.cabbyid[index]['places']=this.cabbyid[index]['places']-1;
  //       this.userdashboardService.updatecabvacancy(this.cabbyid[index]['cid'],this.cabbyid[index])
  //       .subscribe(data => {
  //           ({
  //               title: "Successfull!!",
  //               text: "Cab Request Sent Succesfully!",
  //               icon: "success",
  //             });
  //       });
  //     });
  //  }

  // cancelcab(){
  //     this.usercab.vacantSpace=(parseInt(this.usercab.vacantSpace)+1)+"";
  //      this.userdashboardService.deletetrip(this.trip1.userid)
  //     .subscribe(data => {
  //       this.usercab.vacantSpace=(parseInt(this.usercab.vacantSpace)-1)+"";
  //         this.userdashboardService.updatecabvacancy(this.usercab.cid, this.usercab)
  //         .subscribe(data => {
  //             // sweetalert({
  //             //     title: "Successfull!!",
  //             //     text: "Cab Cancelled Successfull!",
  //             //     icon: "success",
  //             //   });
  //             this.tripstatus="false";
  //         });
  //       });
  //  }
  
logout(){
	  sessionStorage.removeItem('userId');
	  swal({
          title: "Logout Successfull!!",
          icon: "warning",
        });
   	this.router.navigate(['/']);
  }

 }

  