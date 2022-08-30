import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  constructor(private http : HttpClient , private router : Router , private _location: Location) { }

  projectForm !: FormGroup;
  URL = "http://localhost:8082/api/projets";
  URLCompetence = "http://localhost:8082/api/competences";


  ngOnInit(): void {

this.projectForm = new FormGroup({

  nom:new FormControl(null,Validators.required),
  entite:new FormControl(null),
  description:new FormControl,
  date_debut:new FormControl,
  date_fin:new FormControl,
  budget:new FormControl

})

}


  submit(){

  if(this.projectForm.valid){ 

  let dateDebut = this.projectForm.controls['date_debut'].value;
  let dateFin = this.projectForm.controls['date_fin'].value;

    this.projectForm.controls['date_debut'].setValue(dateDebut.replaceAll('-','/'))
    this.projectForm.controls['date_fin'].setValue(dateFin.replaceAll('-','/')) 

// call WS to fetch list of competences

this.http.get(this.URLCompetence).subscribe(res=>{

  console.log(res);
  
  // TODO

})
    

 this.http.post(this.URL,this.projectForm.value).subscribe(res=>{
      console.log(res);
  
    this._location.back();     

    })
    

}else{

   // display error

  }

      
  }


}
