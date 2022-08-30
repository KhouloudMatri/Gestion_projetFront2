import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.scss']
})
export class EditCompetenceComponent implements OnInit {

  competenceForm !: FormGroup;
  URL = "http://localhost:8082/api/competences";

  constructor(private http : HttpClient , private route : ActivatedRoute , private _location: Location) { }

  id = this.route.snapshot.paramMap.get("id");
  nom:any;

  ngOnInit(): void {


    this.http.get(this.URL+"/"+this.id).subscribe((res:any)=>{
      this.nom = res.nom
     

      this.competenceForm = new FormGroup({

        nom:new FormControl(this.nom,Validators.required)
      
      })

    })

  }

  submit(){
    
    if(this.competenceForm.valid){

      this.http.put(this.URL+"/"+this.id,this.competenceForm.value).subscribe(res=>{
        console.log(res);
        this._location.back();
      })


    }

  }

  back(){
    this._location.back();
  }

}



