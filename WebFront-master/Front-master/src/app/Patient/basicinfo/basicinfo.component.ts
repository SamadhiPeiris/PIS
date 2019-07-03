import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PatientService } from 'src/app/shared/services/patient.service';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.component.html',
  styleUrls: ['./basicinfo.component.css'],
  providers: [ PatientService ]
})
export class BasicinfoComponent implements OnInit {

  form1;
  patient_Id;
  enteredDates: any[]=[];
  canSubmit: boolean = true

  constructor(
    private _router:Router,
    private fb1: FormBuilder,
    private Patients: PatientService
    ) {
      this.form1 = this.fb1.group({
        email: [''],
        currentDate: [''],
        cholestorol: [''],
        socialDisease: [''],
        allergy: [''],
        bloodPresure: [''],
        bloodSugar: ['']
      })
    
     }
  ngOnInit() { 
    this.patient_Id = localStorage.getItem('email');
    console.log(this.patient_Id)
  }

  validateDate(currentDate){
    console.log(currentDate)
    for(var i=0; i<this.enteredDates.length; i++){
      if(currentDate == this.enteredDates[i]){
        console.log(this.enteredDates[i]);
        alert("You entered your info on this day earlier time.")
        this.canSubmit = false
        break
      }
    }
    return
  }

  onSubmit(form1){
    console.log(this.patient_Id)
    form1.value['email'] = this.patient_Id;
    this.validateDate(form1.value.currentDate)
    console.log(this.form1.value)
    if(this.canSubmit){
      this.Patients.addBasicInfo(form1.value)
        .subscribe(responce => {
          console.log(responce)
          if(responce.json().success == true){
            alert("Successfully added data.")
          } else{
            alert("The report has been already added.")
          }
        })
    }
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

  get email(){return this.form1.get('email');}
  get currentDate(){return this.form1.get('currentDate');}
  get cholestorol(){return this.form1.get('cholestorol');}
  get socialDisease(){return this.form1.get('socialDisease');}
  get allergy(){return this.form1.get('allergy');}
  get bloodPresure(){return this.form1.get('bloodPresure');}
  get bloodSugar(){return this.form1.get('bloodSugar');}
}