import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../user/account/interfaces/user-registration.interface";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceURL: string;

  constructor(private _http: HttpClient) {
    this.serviceURL = "http://localhost:3000/users"
  }

  addUser(user: IUser): Observable<IUser> {
    return this._http.post<IUser>(this.serviceURL, user)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  getAllUser(): Observable<[]>{
    return this._http.get<[]>(this.serviceURL)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  deleteUser(user: IUser): Observable<IUser> {
    return this._http.delete<IUser>(this.serviceURL + '/' + user.id)
      .pipe(map((res:any)=>{
      return res;
    }))
  }

  editUser(user: IUser): Observable<IUser>{
    return this._http.put<IUser>(this.serviceURL + '/' + user.id, user)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}
