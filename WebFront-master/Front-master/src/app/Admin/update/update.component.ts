import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private _router:Router) { }
  ngOnInit() { 
  }

  moveToDoctorRegister(){
    this._router.navigate(['/register2']);
  }

   
  moveToMLTRegister(){
    this._router.navigate(['/registerm']);
    
  }


}
