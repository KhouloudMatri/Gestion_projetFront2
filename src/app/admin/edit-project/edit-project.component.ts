import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectForm! : FormGroup;
  URL = "http://localhost:8082/api/projets";

  constructor(private http : HttpClient , private route : ActivatedRoute , private _location: Location) { }

  id = this.route.snapshot.paramMap.get("id");
  nom:any;
  entite:any;
  description:any;
  dateDebut:any;
  dateFin:any;
  budget:any;

  ngOnInit(): void {



    this.http.get(this.URL+"/"+this.id).subscribe((res:any)=>{
      this.nom = res.nom
      this.entite =res.entite
      this.description = res.description
      if(res.date_debut != null){
      this.dateDebut = res.date_debut.replaceAll('/','-')
      }
      if(res.date_fin != null){
        this.dateFin = res.date_fin.replaceAll('/','-')
      }
      this.budget = res.budget


      this.projectForm = new FormGroup({

        nom:new FormControl(this.nom,Validators.required),
        entite:new FormControl(this.entite),
        description:new FormControl(this.description),
        date_debut:new FormControl(this.dateDebut),
        date_fin:new FormControl(this.dateFin),
        budget:new FormControl(this.budget)
      
      })

    })


  }

  submit(){
    
    if(this.projectForm.valid){

      this.http.put(this.URL+"/"+this.id,this.projectForm.value).subscribe(res=>{
        console.log(res);
        this._location.back();
      })


    }

  }

  back(){
    this._location.back();
  }

}
