import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) {

  }

  ngOnInit() {
  }

  login(formData: NgForm) {
    this.auth.login(formData.value.email, formData.value.password);
  }
  signup(formData: NgForm) {
    this.auth.signup(formData.value.email, formData.value.password);
  }
}
