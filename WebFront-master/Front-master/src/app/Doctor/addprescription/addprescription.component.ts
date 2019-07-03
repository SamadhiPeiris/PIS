import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { AddprescriptionService } from '../../shared/services/addprescription.service'


@Component({
    selector: 'app-addprescription',
    templateUrl: './addprescription.component.html',
    styleUrls: ['./addprescription.component.css']
})
export class AddprescriptionComponent implements OnInit {

    data:any

    constructor(
        private addPrescription: AddprescriptionService,
    ) {}


        form = new FormGroup({

          prescriptionId: new FormControl('',[Validators.required]),
          doctorRegNo: new FormControl('',[Validators.required]),
          diseaseDescription: new FormControl('',[Validators.required]),
          madicineName: new FormControl('',[Validators.required]),
          medicineDosage: new FormControl('',[Validators.required]),
          medicineQty: new FormControl('',[Validators.required]), 
          recommandedTest: new FormControl('',[Validators.required]),
            
          })

   

    ngOnInit() {

    }

    logIn(credentials){

        const prescription = {
          prescriptionId:credentials.prescriptionId,
          doctorRegNo : credentials.doctorRegNo,
          diseaseDescription : credentials.diseaseDescription,
          madicineName :credentials.madicineName,
          medicineDosage : credentials.medicineDosage,
          medicineQty :credentials.medicineQty,
          recommandedTest :credentials.recommandedTest,
        }

        console.log(prescription)

            this.addPrescription.addPrescription(prescription)
            .subscribe(response => {
                console.log(response)
                this.data = response
            })
        }

        

      
    }



