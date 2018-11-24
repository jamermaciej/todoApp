import { AuthService } from './auth/auth.service';
import { TasksService } from './services/tasks.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }
}
