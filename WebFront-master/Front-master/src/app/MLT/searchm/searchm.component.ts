import { MltService } from './../../shared/services/mlt.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../shared/services/register.service';
import { PatientService } from '../../shared/services/patient.service';


@Component({
  selector: 'app-searchm',
  templateUrl: './searchm.component.html',
  styleUrls: ['./searchm.component.css']
})
export class SearchmComponent implements OnInit {

  //patients:any;
  // doctorRegNo:''
  // prescriptionId:''
  // issueDate:''
  // expireDate:''
  // recommandedTest:''
  // payment:''

  form;
  constructor(
    private _router:Router,
     private _services : RegisterService,
     private _mlt : MltService,
     //  private Patient: PatientService,
      // private Patient: PatientService,
       private fb:FormBuilder
  ){

  }


  //constructor(private _router:Router) { }

  ngOnInit() { 
    this.form = this.fb.group({
      email:['',Validators.required]
    })
  }


  
  moveToAbout(){
    this._router.navigate(['/mbasic']);
  }
  
   
  moveToPatientSearch(){
    this._router.navigate(['/searchm']);
    
  }
  moveToRecommandedTest(){
    this._router.navigate(['/rectest']);
    
  }

  moveToPdetails(){
    this._router.navigate(['/pdetails']);
  }
  
  // getPatientData(form){
  //   console.log(form.value,"gvbnbnhbjn")
  //   this.Patient.viewPatientDetails(form.value)
  //     .subscribe(response => {
  //       this.patients = response.json().result[0];
  //       console.log(response.json().result[0])
  //       console.log(response.json().msg)
  //     })
  // }

  getPatientData(email){
    console.log(email.value);
    this._mlt.viewPatientForMlt(email.value)
    .subscribe(Response => console.log(Response))
  }
  
  }