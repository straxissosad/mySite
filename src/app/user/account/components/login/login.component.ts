import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {IUser} from "../../interfaces/user-registration.interface";

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./styles/login.style.scss']
})

export class LoginComponent implements OnInit{
  controlsGroup!: FormGroup;
  private users!: [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.controlsGroup = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    })
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getAllUser().subscribe(res => {
      this.users = res
    }, error => alert(error))
  }

  login() {
    this.userService.getAllUser().subscribe(res =>{
      const user = res.find((a:IUser) => {
        return a.mail === this.controlsGroup.value.mail && a.password === this.controlsGroup.value.password
      });
      if(user){
        alert("Login Success")
        this.controlsGroup.reset();
      } else {
        alert("Wrong Password or mail")
      }
    }, error => {alert("Something wrong")})
  }
}
