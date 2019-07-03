import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './Common/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(
    private _router:Router
    ) {
     }

  removeToken(){
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this._router.navigate(['/login'])
  }
}
