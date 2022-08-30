import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


export interface PhaseData{

  nomPhase:string,
  duree:string
  dateDebutPhase:string,
  dateFinPhase:string,
  etat:string

}

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  phaseList:any;
  URL = "http://localhost:8082/api/phases";

  constructor(private http : HttpClient , private router : Router) { }

  ngOnInit(): void {

      this.http.get(this.URL).subscribe(res=>{
      console.log(res);
      
        this.phaseList = res;
      })
    
  }


  delete(id:any){

    this.http.delete(this.URL+"/"+id).subscribe(res=>{
    console.log(res);
    location.reload();
      
    })

  }



}
