// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   url:String="http://localhost:3000";
//   constructor(
//     private http: Http,
//   ) { }
//   registerUser(user) {
//     let headers = new Headers();
//     headers.append('content-Type', 'application/json');
//     return this.http.post(this.url + "/user/register", user, { headers: headers }).map(res => res.json());
//   };
// }
