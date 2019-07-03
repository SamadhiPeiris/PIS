import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-patientprofile',
  templateUrl: './patientprofile.component.html',
  styleUrls: ['./patientprofile.component.css']
})
export class PatientprofileComponent implements OnInit {

  email:''
  NIC:''
  name:''
  address:''
  contactNo:''
  dateOdBirth:''
  occupation:''
  maritalState:''
  bloodGroup:''
  bloodSugar:''
  bloodPresure:''
  ScopedCredentialInfo:''
  weight:''
  height:''
  colesterol:''
  allergy:''

  constructor(private _router:Router,
    private _services : RegisterService,) { }

    ngOnInit() {
      const id  = localStorage.getItem('email');
      this._services.viewPatientDetails(id)
      .subscribe(res=>{
        console.log(res.json())
        this.email = res.json().msg[0].email
        this.name = res.json().msg[0].firstName 
        this.address = res.json().msg[0].addStreet
        this.contactNo = res.json().msg[0].contactNo
        this.dateOdBirth = res.json().msg[0].dob
        this.occupation = res.json().msg[0].occupation
        this.maritalState = res.json().msg[0].maritalState.data
        this.bloodGroup = res.json().msg[0].bloodType
        this.NIC = res.json().msg[0].NIC
        // this.bloodSugar = res.json().msg[0].name
        this.weight = res.json().msg[0].weight
        this.height = res.json().msg[0].height
        // this.colesterol = res.json().msg[0].name
        // this.allergy = res.json().msg[0].name
  
      })
    }


  moveToBasicHealthInfo(){
    this._router.navigate(['/basicinfo']);
  }

   
  moveToPrescription(){
    this._router.navigate(['/prescription']);
    
  }

  
  moveToCurrentState(){
    this._router.navigate(['/currentstate']);
    
  }

  
  moveToLabReports(){
    this._router.navigate(['/lab']);
    
  }

  moveToMakeAppointment(){
    this._router.navigate(['/makeapp']);
    
  }

  moveToPatientHome(){
    this._router.navigate(['/patientprofile']);
    
  }

  moveToDiseaseHistroy(){
    this._router.navigate(['/histroy']);
    
  }


}