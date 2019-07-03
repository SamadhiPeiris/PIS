import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-searchp',
  templateUrl: './searchp.component.html',
  styleUrls: ['./searchp.component.css'],
  providers: [PatientService]
})
export class SearchpComponent implements OnInit {
  patients:any;
  // email:''
  // name:''
  // address:''
  // contactNo:''
  // dateOfBirth:''
  // occupation:''
  // maritalState:''
  // bloodGroup:''
  // bloodSugar:''
  // bloodPresure:''
  // //ScopedCredentialInfo:''
  // weight:''
  // height:''
  // cholesterol:''
  // allergy:''
form;
  constructor(
    private _router:Router,
    private _services : RegisterService,
    private Patient: PatientService,
    private fb:FormBuilder
    ) {
     }

  ngOnInit() {
    this.form = this.fb.group({
      email:['',Validators.required]
    })
    // const id  = localStorage.getItem('email');
    // this._services.viewPatientDetails(id)
    // .subscribe(res=>{
    //   console.log(res.json().msg[0])
    //   this.email = res.json().msg[0].email
    //   this.name = res.json().msg[0].name 
    //   this.address = res.json().msg[0].addStreet
    //   this.contactNo = res.json().msg[0].contactNo
    //   this.dateOfBirth = res.json().msg[0].dob
    //   this.occupation = res.json().msg[0].occupation
    //   this.maritalState = res.json().msg[0].maritaState
    //   this.bloodGroup = res.json().msg[0].bloodGroup
    //   this.bloodPresure = res.json().msg[0].bloodPresure
    //   this.bloodSugar = res.json().msg[0].bloodSugar
    //   this.weight = res.json().msg[0].weight
    //   this.height = res.json().msg[0].height
    //   this.cholesterol = res.json().msg[0].cholesterol
    //   this.allergy = res.json().msg[0].allergy

   // })
  }


  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

  Addprescription(){
    this._router.navigate(['/addprescription'])
  }


  moveToUserPage(){
    this._router.navigate(['/user']);
  }

  moveToAddprescription(){
    this._router.navigate(['/addprescription']);
  }

  getPatientData(form){
    console.log(form.value,"gvbnbnhbjn")
    this.Patient.viewPatientDetails(form.value)
      .subscribe(response => {
        this.patients = response.json().result[0];
        console.log(response.json().result[0])
        console.log(response.json().msg)
      })
  }
  
}
