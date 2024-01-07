import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cab } from '../models/cab.model';
import { Trip } from '../models/Trip.model';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserdashboardService {

  constructor(private http:HttpClient) {}

  private cabUrl = 'https://test2-xshore.azurewebsites.net/cab/bycid';
  private cabUrld = 'https://test2-xshore.azurewebsites.net/cab';
  private tripUrl = 'https://test2-xshore.azurewebsites.net/trips';
  private singletripUrl = 'https://test2-xshore.azurewebsites.net/trips/viewusertrip';
  




  public getCabs(cab) {
    return this.http.post<Cab>(this.cabUrl,cab);
  }

  

  public optcab(trip) {
    return this.http.post<Trip>(this.tripUrl,trip);
 }

 public updatecabvacancy(cabid,cab) {
    return this.http.put(this.cabUrld + "/"+ cabid,cab);	
 }

 public gettrip(trip) {
    return this.http.post<Trip>(this.singletripUrl,trip);
  }

  public deletetrip(tripid) {
    return this.http.delete(this.tripUrl + "/"+ tripid+"");
  }

}
