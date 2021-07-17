import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username = "ssantosb@abctelevision.com";
  password = "Bulbasaur01";

  public isAuthenticated = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
  }

  public checkAuthenticated(): boolean {
    return this.isAuthenticated.getValue();
  }

  public login(username: string, password: string): void {
    const transaction = (username == this.username) && (password==this.password);

    if (transaction == false) {
      throw Error('El usuario y/o la contraseña son erroneos');
    }
    this.isAuthenticated.next(true);
    this.router.navigate(['/']);

  }

  public logout(redirect: string): void {
    try {
      this.isAuthenticated.next(false)
      this.router.navigate([redirect]);
    } catch (err) {
      console.error(err);
    }
  }
}
