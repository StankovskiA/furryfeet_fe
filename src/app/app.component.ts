import { Component, OnInit } from '@angular/core';
import { LoginService } from './core/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  title = 'furryfeet_frontend';

  constructor(private loginService: LoginService) {}

  checkLoggedIn() {
    return this.loginService.isLoggedIn();
  }
  logout() {
    return this.loginService.logoutUser();
  }
}
