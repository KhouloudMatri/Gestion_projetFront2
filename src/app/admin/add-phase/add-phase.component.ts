import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-phase',
  templateUrl: './add-phase.component.html',
  styleUrls: ['./add-phase.component.scss']
})
export class AddPhaseComponent implements OnInit {

  constructor(private http : HttpClient , private router : Router , private _location: Location) { }

  phaseForm!: FormGroup;
  URL = "http://localhost:8082/api/phases";
  List:any = [];


  ngOnInit(): void {

this.phaseForm = new FormGroup({

  nom_phase:new FormControl(null,Validators.required),
  duree:new FormControl,
  date_debut_phase:new FormControl,
  date_fin_phase:new FormControl,
  etat:new FormControl,
  projet: new FormControl

})

this.List=this.http.get("http://localhost:8082/api/projets").subscribe(res=>{console.log(res)
this.List = res;

});



}


  submit(){

    console.log(this.phaseForm.value);
    

  if(this.phaseForm.valid){ 

    // call WS

  let dateDebutPhase = this.phaseForm.controls['date_debut_phase'].value;
  let dateFinPhase = this.phaseForm.controls['date_fin_phase'].value;

    this.phaseForm.controls['date_debut_phase'].setValue(dateDebutPhase.replaceAll('-','/'))
    this.phaseForm.controls['date_fin_phase'].setValue(dateFinPhase.replaceAll('-','/')) 

console.log(this.List);


    for (let i=0;i<this.List.length;i++){
      console.log(this.List[i]);
      
      if(this.List[i].id==this.phaseForm.controls['projet'].value) {
        this.phaseForm.controls['projet'].setValue(this.List[i]); 
      }
    }
     console.log(this.phaseForm.value);

   this.http.post(this.URL,this.phaseForm.value).subscribe(res=>{
     console.log(res);
  
    this._location.back();     

    })
    

}else{

   // display error

  }

      
  }


}