import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { resource } from 'selenium-webdriver/http';
// import { jwtDecode } from 'jwt-decode';
// import { jwt } from 'jsonwebtoken';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  msg = null

  constructor(
    private _router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}


  form = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',[
      Validators.required]),
    role: new FormControl('') 

  })

  createContact(){

let contact  = {
    Email:  "d2@gmaigcl.com",
    Password: "asdfdsg"

  };

  console.log(contact);
  // this.authService.login(contact).subscribe(
  //   (response) => console.log(response)
  // )
  };


  ngOnInit() {
  }


  logIn(credentials){
    // console.log(credentials)
    this.authService.login(credentials)
      .subscribe(result =>{
        if(result.json().state){

          //console.log(result.json().token)
          localStorage.setItem('token',result.json().token);
          localStorage.setItem('email',result.json().email);
          // this.msg = result.json().msg;
          // var user = JSON.parse(result.json().msg)
          // console.log(user)
          // var decodeUser = jwt.decode(result.json().token)
          // console.log(jwtDecode(result.json().token), )
          // localStorage.setItem('loggedUser', result.json().msg);
          // console.log(localStorage.getItem('loggedUser'));
          this.selectProfile(result.json())
        }
        else{
          alert("Login Failed..")
        }
        
      })
  
      }

    selectProfile(role){
      console.log(role.role)
      if(role.role === '005'){
          this._router.navigate(['update']);
        }
      else if(role.role === '004'){
        this._router.navigate(['payment']);
      }  
      else if(role.role === '003'){
        this._router.navigate(['mbasic']);
      } 
      else if(role.role === '002'){
        this._router.navigate(['patientprofile']);
      } 
      else if(role.role === '001'){
        this._router.navigate(['searchp']);
      } 

      }

}