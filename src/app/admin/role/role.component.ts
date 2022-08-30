import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface RoleData{

  nom_role:string

}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})

export class RoleComponent implements OnInit {

  roleList:any;
  URL = "http://localhost:8082/roles";

  constructor(private http : HttpClient , private router : Router) {}


  ngOnInit(): void {

      this.http.get(this.URL).subscribe(res=>{
        console.log(res);
      
        this.roleList = res;
      })
    
  }

}
