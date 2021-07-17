import { Component, OnInit } from '@angular/core';
import {AuthService} from './shared/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'LiquidacionesFront';
  isAuthenticated = false;

  constructor(public authService: AuthService) {
    this.authService.isAuthenticated.subscribe(
      (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
    );
  }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.checkAuthenticated();
  }

  logout(): void {
    this.authService.logout('/');
  }

}
