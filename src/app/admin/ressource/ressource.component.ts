import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface RessourceData{

  nom:string,
  prenom:string
  num_tel:string,
  email:string,

}


@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {

  ressourceList:any;
  URL = "http://localhost:8082/ressources";

  constructor(private http : HttpClient , private router : Router) { }

  ngOnInit(): void {

    this.http.get(this.URL).subscribe(res=>{
      console.log(res);
      
        this.ressourceList = res;
      })
  }

  
  delete(id:any){

    this.http.delete(this.URL+"/"+id).subscribe(res=>{
      console.log(res);
      location.reload();
      
    })

  }

}


