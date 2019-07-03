import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sdoctor',
  templateUrl: './sdoctor.component.html',
  styleUrls: ['./sdoctor.component.css']
})
export class SDoctorComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  moveToAppDate(){
    this._router.navigate(['/appdate']);
  }
}
