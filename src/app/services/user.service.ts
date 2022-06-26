import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../user/account/interfaces/user-registration.interface";
import {BehaviorSubject, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  serviceURL: string;
  serviceLogin: "http://localhost:3000/login"
  private _getUser$: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  constructor(private _http: HttpClient) {
    this.serviceURL = "http://localhost:3000/users"
  }


  //Регистрация пользователя
  addUser(user: IUser): Observable<IUser> {
    return this._http.post<IUser>(this.serviceURL, user)
      .pipe(map((res:any)=>{
        return res;
      }))
  }


  //Получение всех пользователей
  getAllUser(): Observable<[]>{
    return this._http.get<[]>(this.serviceURL)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  //Удаление пользователя
  deleteUser(user: IUser): Observable<IUser> {
    return this._http.delete<IUser>(this.serviceURL + '/' + user.id)
      .pipe(map((res:any)=>{
      return res;
    }))
  }


  //Редактирование пользователя
  editUser(user: IUser): Observable<IUser>{
    return this._http.put<IUser>(this.serviceURL + '/' + user.id, user)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  public setUser(user: IUser): void {
    this._getUser$.next(user);
  }

  public getUser(): Observable<IUser> {
    return this._getUser$;
  }

}
