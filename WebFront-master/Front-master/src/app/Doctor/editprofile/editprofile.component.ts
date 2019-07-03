import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RegisterService } from '../../shared/services/register.service'


@Component({
    selector: 'app-editprofile',
    templateUrl: './editprofile.component.html',
    styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {


    constructor(
        private authService: AuthService,
        private regPatient: RegisterService,
    ) {}


        form = new FormGroup({

            contactNo : new FormControl('',[Validators.required]),
            workAddress: new FormControl('',[Validators.required]),
            doctorDesignation: new FormControl('',[Validators.required]),
           
            
          })

   

    ngOnInit() {

    }

    DoctoProfile(credentials){

        const user = {
            ContactNo:credentials.ContactNo,
            workAddress: credentials.workAddress,
            doctorDesignation : credentials.doctorDesignation,
          
        }

        console.log(user)

         
    }



}