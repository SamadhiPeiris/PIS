import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class MltService {

  constructor(  private http: Http ) { }

  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});

 //url = "https://hello-doc-app.herokuapp.com";
  url = "http://localhost:3000/"


  viewPatientForMlt(value){
    console.log(value,"llllllll");
   return this.http.post('http://localhost:3000/patient/addpatientbasichealthinfo',value,{
      headers:this.headers
    })
  }




}
