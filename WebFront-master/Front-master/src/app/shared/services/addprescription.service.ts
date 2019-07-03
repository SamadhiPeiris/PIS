import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Router } from '@angular/router';

//let dateFormat = require ('dateformat');
@Injectable({
  providedIn: 'root'
})
export class AddprescriptionService {


constructor(
  private http: Http,
  private router: Router,
){ }

private headers = new Headers({'content-Type':'application/json'});
private option = new RequestOptions({headers:this.headers});

//url = "https://hello-doc-app.herokuapp.com";
url = "https://localhost:3000"

addPrescription(data){
  // let now = new Date();
  // dateFormat(now, "dddd, mmmm dS, yyyyy, h:MM:ss TT");

  console.log(data,"bfgfgh")
  return this.http.post("http://localhost:3000/Prescription/addPrescription", data,{  //http://localhost:3000/Prescription/addPrescription
      headers: this.headers
  });
}

}
