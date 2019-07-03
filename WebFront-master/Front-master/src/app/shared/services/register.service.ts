import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
   
    private http: Http
  ) { }

  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});

 url = "https://hello-doc-app.herokuapp.com";
 // url = "http://localhost:3000/"

  docRegister(user: any) {
    console.log(user);
    return this.http.post(`${this.url}/doctor/addDoctor`, user,{
      headers:this.headers
    });

   
  }
 
  patientRegister(user:any){
    console.log(user);
    return this.http.post(`${this.url}/patient/addPatient`,user,{
      headers:this.headers
    });
  }

  mltRegister(user: any) {
    console.log(user,"hnnnnnnnnugyugyu");
    return this.http.post(`${this.url}/mlt/addMlt`, user,{
      headers:this.headers
    });
  }

  viewDoctorDetails(id){
    
    const data = {
      email : id,
    }
    console.log(data,"nhnnn");
    return this.http.post(`${this.url}/doctor/profile`,data,{
      headers:this.headers
    });
  }

  viewPatientDetails(id){
    const data = {
      email : id,
    }
    console.log(data,"nhnnn");
    return this.http.post(`${this.url}/patient/profile`,data,{
      headers:this.headers
    });
  }

  viewMltDetails(id){
    
    const data = {
      email : id,
    }
    console.log(data,"nhxx");
    return this.http.post(`${this.url}/mlt/ViewMLTProfile` ,data,{
      headers:this.headers
    });
  }
  
  viewFrontDeskDetails(id){
    
    const data = {
      email : id,
    }
    console.log(data,"hjkll");
    return this.http.post(`${this.url}/frontDesk/profile`,data,{
      headers:this.headers
    });
  }


}


