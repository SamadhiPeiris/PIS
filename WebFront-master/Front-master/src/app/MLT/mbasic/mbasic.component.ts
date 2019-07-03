import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';

@Component({
  selector: 'app-mbasic',
  templateUrl: './mbasic.component.html',
  styleUrls: ['./mbasic.component.css']
})
export class MbasicComponent implements OnInit {

  // constructor(private _router:Router) { }

  email:''
  NIC:''
  name:''
  address:''
  contactNo:''
  dateOdBirth:''
  mltRegNo:''

  constructor(private _router:Router,
    private _services : RegisterService,) { }

    ngOnInit() {
      const id  = localStorage.getItem('email');
      this._services.viewMltDetails(id)
      .subscribe(res=>{
        console.log(res.json())
        this.email = res.json().msg[0].email
        this.name = res.json().msg[0].firstName 
        this.address = res.json().msg[0].addStreet
        this.contactNo = res.json().msg[0].contactNo
        this.mltRegNo = res.json().msg[0].mltRegNo
        this.NIC = res.json().msg[0].NIC
  
      })
    }


moveToMLTBasicInfo(){
  this._router.navigate(['/mbasic']);
}

 
moveToPatientSearch(){
  this._router.navigate(['/searchm']);
  
}
moveToRecommandedTest(){
  this._router.navigate(['/rectest']);
  
}


}