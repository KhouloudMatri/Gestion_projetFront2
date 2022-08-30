import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {

  constructor(private http : HttpClient , private router : Router , private _location: Location) { }

  competenceForm !: FormGroup;
  URL = "http://localhost:8082/api/competences";

  ngOnInit(): void {

    this.competenceForm = new FormGroup({
    
      nom:new FormControl(null,Validators.required)
    
    })
    
    }
    
    
      submit(){
    
      if(this.competenceForm.valid){ 
    
        // call WS
        
    
     this.http.post(this.URL,this.competenceForm.value).subscribe(res=>{
          console.log(res);
      
        this._location.back();     
    
        })
        
    
    }else{
    
       // display error
    
      }
    
          
      }
    
    
}