import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {IUser} from "../../interfaces/user-registration.interface";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./styles/login.style.scss']
})

export class LoginComponent implements OnInit{
  controlsGroup!: FormGroup;


  constructor(private userService: UserService,
              private _route: Router) {
  }

  ngOnInit() {
    this.controlsGroup = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
  }

  login() {
    const currentUser: IUser = {
      name: this.controlsGroup.value.mail,
      password: this.controlsGroup.value.password
    }

    this.userService.getAllUser().subscribe(res =>{
      const user = res.find((a:IUser) => {
        return a.mail === this.controlsGroup.value.mail && a.password === this.controlsGroup.value.password
      });
      if(user){
        this.userService.setUser(currentUser)
        console.log(currentUser)
        this.controlsGroup.reset();
        this._route.navigate(['cabinet', 'main'])

      } else {
        alert("Wrong Password or mail")
      }
    }, error => {alert("Something wrong")})

  }
}
