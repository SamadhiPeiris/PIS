import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from '../../shared/services/register.service'


@Component({
  selector: 'app-registerm',
  templateUrl: './registerm.component.html',
  styleUrls: ['./registerm.component.css']
})
export class RegistermComponent implements OnInit {



  constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private regMlt: RegisterService,
  ){}
  
  form = new FormGroup({

    NIC: new FormControl('',[Validators.required]),
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    role: new FormControl(''), 
    addNo: new FormControl('',[Validators.required]),
    contactNo: new FormControl('',[Validators.required]),
    addStreet: new FormControl('',[Validators.required]),
    addCity: new FormControl('',[Validators.required]),
    mltRegNo: new FormControl('',[Validators.required]),
    
  })


  ngOnInit() {

  }
  logIn(credentials){

    const user = {
        NIC:credentials.NIC,
        firstName : credentials.firstName,
        lastName : credentials.lastName,
        contactNo :credentials.contactNo,
        email : credentials.email,
        password :credentials.password,
        addNo :credentials.addNo,
        addStreet:credentials.addStreet,
        addCity:credentials.addCity,
        roleId :"003"
    }

    console.log(user)

  const mlt = {
    
    NIC:credentials.NIC,
    mltRegNo:credentials.mltRegNo,

  }  

  console.log(mlt)


   
   this.authService.register(user)
   .subscribe(result =>{
      console.log(result.json())
    if(result.json().success){
        this.regMlt.mltRegister(mlt)
        .subscribe(result => {
            console.log(result.json())
        })
    }
    else{
      alert("Login Failed..")
    }
    
   })
  
}

}