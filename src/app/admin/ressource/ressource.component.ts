import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface UserData{

  nom:string,
  prenom:string,
  telephone:number,
  email:string,
  role:string

}


@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})
export class RessourceComponent implements OnInit {

  userList:any;
  URL = "http://localhost:8082/api/users";

  constructor(private http : HttpClient , private router : Router) {}


  ngOnInit(): void {
    
      this.http.get(this.URL).subscribe(res=>{
        console.log(res);
      
        this.userList = res;
      })
    
  }


  delete(id:any){

    this.http.delete(this.URL+"/"+id).subscribe(res=>{
      console.log(res);
      location.reload();
      
    })

  }



}