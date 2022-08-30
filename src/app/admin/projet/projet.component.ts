import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface ProjectData{

  nom:string,
  entite:string
  description:string,
  dateDebut:string,
  dateFin:string,
  budget:number

}


@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projectList:any;
  URL = "http://localhost:8082/api/projets";

  constructor(private http : HttpClient , private router : Router) {}


  ngOnInit(): void {
    
      this.http.get(this.URL).subscribe(res=>{
        console.log(res);
      
        this.projectList = res;
      })
    
  }


  delete(id:any){

    this.http.delete(this.URL+"/"+id).subscribe(res=>{
      console.log(res);
      location.reload();
      
    })

  }



}
