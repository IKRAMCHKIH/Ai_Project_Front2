import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Cab } from '../models/cab.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserregisterService {

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/users';
  private userCab = 'http://localhost:8080/users/addCab';
  
  //private userUrl = '/api';
  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  public createCab(userId,cab) {
    console.log("meth d service");
    return this.http.post<Cab>(this.userCab+"/"+userId,cab);

  }

}
