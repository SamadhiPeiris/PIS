import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http'

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private router: Router,
    ){ }

    private headers = new Headers({'content-Type':'application/json'});
    private option = new RequestOptions({headers:this.headers});
    url = "https://hello-doc-app.herokuapp.com";
    //url = "http://localhost:3000"
    register(user){
        //console.log(this.url)
        console.log(user,"oooooooooooooooooooooooooooo");
        return this.http.post(`${this.url}/users/addUsers`, user,{
            headers:this.headers 
        });

       
    }

    // login(user){
    //     console.log(user);
    //     return this.http.post(`${this.url}/login", {user});
    // }

    
    login(user){
        console.log(user);
        return this.http.post(`${this.url}/users/login`,user,{
            headers:this.headers
        });
    }
    

}