import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from '../../shared/services/register.service'

@Component({
    selector: 'register2',
    templateUrl: 'register2.component.html',
    styleUrls: ['./register2.component.css']



    })

export class Register2Component implements OnInit {


    constructor(

        private authService: AuthService,
        private regDoc: RegisterService,
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
        doctorRegNo: new FormControl('',[Validators.required]),
        doctorField: new FormControl('',[Validators.required]),
        doctorDesignation: new FormControl('',[Validators.required]),
        workAddress: new FormControl('',[Validators.required]),
        
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
            roleId :"001"
        }
        console.log(user);

        const doctor ={
            doctorRegNo:credentials.doctorRegNo,
            doctorField:credentials.doctorField,
            doctorDesignation:credentials.doctorDesignation,
            workAddress:credentials.workAddress,
            NIC:credentials.NIC,
        }

        console.log(doctor);
        this.authService.register(user)
        .subscribe(result => {
            console.log(result.json())
            if(result.json().success){
                this.regDoc.docRegister(doctor)
                .subscribe(result => {
                    if(result.json().success){
                        window.alert("dOCTOR add");
                    }else{
                        window.alert("somthing going wrong");
                    }
                })
            } 

        })
      
    }

}