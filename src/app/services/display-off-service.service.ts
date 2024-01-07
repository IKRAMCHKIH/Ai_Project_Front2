import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cab } from '../models/cab.model';
import { User } from '../models/user.model';
import { Notif } from '../models/notif';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DisplayOffServiceService {

  constructor(private http:HttpClient) {}

  private cabUrl = 'http://localhost:8080/users/cabs';
  private cabUrld = 'http://localhost:8080/cab';
  private userUrl = 'http://localhost:8080/users/user';
  private userNotif ='http://localhost:8080/users/notif';

  public getCabs() {

    return this.http.get<Cab>(this.cabUrld);
  }

  public getCabsbyID(userid) {
    return this.http.get<Cab[]>(this.cabUrl + "/"+ userid);
  }

  public userbyID(user) {
    return this.http.get<User>(this.userUrl + "/"+ user);
  }
  public findNotif(user) {
    return this.http.get<Notif[]>(this.userNotif + "/"+ user);
  }

}
