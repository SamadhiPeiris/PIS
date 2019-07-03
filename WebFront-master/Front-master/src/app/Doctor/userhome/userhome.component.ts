import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';


@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  name:''
  email:''
  workAddress:''
  contactNo:''
  NIC:''
  doctorRegNo:''
  doctorField:''
  doctorDesignation:''

 constructor(private _router:Router,
 private _services : RegisterService,) { }
 
 ngOnInit() {
  const id  = localStorage.getItem('email');
  this._services.viewDoctorDetails(id)
  .subscribe(res=>{
    console.log(res.json())
    this.email = res.json().msg[0].email
    this.name = res.json().msg[0].firstName 
    this.workAddress = res.json().msg[0].workAddress
    this.contactNo = res.json().msg[0].contactNo
    this.doctorRegNo = res.json().msg[0].doctorRegNo
    this.doctorField = res.json().msg[0].doctorField
    this. doctorDesignation = res.json().msg[0]. doctorDesignation
    this.NIC = res.json().msg[0].NIC
   

  })
}
 
  moveToViewPatient(){
    this._router.navigate(['/searchp']);
  }

  moveToAppointmentList(){
    this._router.navigate(['/applist']);
  }

  moveToEditProfile(){
    this._router.navigate(['/editprofile']);
  }

}
