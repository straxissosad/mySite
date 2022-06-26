import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { IUser } from "../account/interfaces/user-registration.interface";
import {filter, Observable, Subscriber} from "rxjs";
import {UserService} from "../../services/user.service";

@Injectable()
export class CanActivateCabinet implements CanActivate{
  constructor(private userService: UserService, private _router: Router) {
  }


  public canActivate(): Observable<boolean> {
    return new Observable((observer: Subscriber<boolean>): void => {
      this.userService.getUser().pipe(
        filter((data: IUser):boolean => data !== null)
      ).subscribe({
        next: (user: IUser): void =>{
          if (user) {
            observer.next(true);
          } else {
            this._router.navigate(['login', 'user'])
          }
      }
      })
    })
  }
}
