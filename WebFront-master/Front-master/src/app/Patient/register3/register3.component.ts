import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from '../../shared/services/register.service'


@Component({
    selector: 'app-register3',
    templateUrl: './register3.component.html',
    styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {


    constructor(
        private authService: AuthService,
        private regPatient: RegisterService,
    ) {}


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
            dob: new FormControl('',[Validators.required]),
            occupation: new FormControl('',[Validators.required]),
            bloodType: new FormControl('',[Validators.required]),
            maritalState: new FormControl('',[Validators.required]),
            height: new FormControl('',[Validators.required]),
            weight: new FormControl('',[Validators.required]),
            
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
            roleId :"002"
        }

        console.log(user)

      const patient = {
        
        dob:credentials.dob,
        occupation:credentials.occupation,
        bloodType:credentials.bloodType,
        maritalState:credentials.maritalState,
        height:credentials.height,
        weight:credentials.weight,
        NIC:credentials.NIC,
      }  
       
      this.authService.register(user)
      .subscribe(result =>{
          console.log(result.json(),"lllllllllllll")
        if(result.json().success){
            this.regPatient.patientRegister(patient)
            .subscribe(result =>{
                console.log(result,"vvgvgvg")
                if(result.json().success){
                    window.alert("patient add");
                }
                else{
                    window.alert("somthing going wrong");
                }
              })
        }
        else{
          alert("Login Failed..")
        }
        
      })
      
    }



}