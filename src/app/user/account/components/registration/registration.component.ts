import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {IUser} from "../../interfaces/user-registration.interface";

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html',
  styleUrls: ['./styles/registration.style.scss']
})

export class RegistrationComponent implements OnInit{
  controlsGroup!: FormGroup;

  ngOnInit() {
    this.controlsGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      mail: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', Validators.required)
  })
  }

  genders: string[] = ['Мужской', 'Женский']

  constructor(private userService: UserService) {
  }

  public onSubmit() {
    const data: IUser = {
      name: this.controlsGroup.controls['name'].value,
      password: this.controlsGroup.controls['password'].value,
      mail: this.controlsGroup.controls['mail'].value,
      gender: this.controlsGroup.controls['gender'].value
    }

    this.userService.addUser(data).subscribe(res=> {this.ngOnInit()}, error => alert(error))
  }
}
