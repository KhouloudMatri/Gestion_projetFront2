import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface CompetenceData{

  nom:string

}

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  competenceList:any;
  URL = "http://localhost:8082/api/competences";

  constructor(private http : HttpClient , private router : Router) { }

  ngOnInit(): void {
    
    this.http.get(this.URL).subscribe(res=>{
      console.log(res);
    
      this.competenceList = res;

    })
  }

  delete(id:any){

    this.http.delete(this.URL+"/"+id).subscribe(res=>{
      console.log(res);
      location.reload();
      
    })

  }

}

