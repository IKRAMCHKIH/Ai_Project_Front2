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

  private cabUrl = 'https://test2-xshore.azurewebsites.net/users/cabs';
  private cabUrld = 'https://test2-xshore.azurewebsites.net/cab';
  private userUrl = 'https://test2-xshore.azurewebsites.net/users/user';
  private userNotif ='https://test2-xshore.azurewebsites.net/users/notif';

  public getCabs2() {

    return this.http.get<Cab[]>(this.cabUrld);
  }
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
