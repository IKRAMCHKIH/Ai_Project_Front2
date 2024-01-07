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

  private userUrl = 'https://test2-xshore.azurewebsites.net/users';
  private userCab = 'https://test2-xshore.azurewebsites.net/users/addCab';
  
  //private userUrl = '/api';
  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }
  public createCab(userId,cab) {
    console.log("meth d service");
    return this.http.post<Cab>(this.userCab+"/"+userId,cab);

  }

}
