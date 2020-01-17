import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersArray } from './httpc/usersArr';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  userUrl='/assets/data/usersData.json';

  constructor(private http:HttpClient) { }
  userdata=[];
  getUsersData(): Observable<UsersArray[]>{
    return this.http.get<UsersArray[]>(this.userUrl);
  }
}
