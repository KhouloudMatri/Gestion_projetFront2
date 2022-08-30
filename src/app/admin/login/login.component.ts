import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
user:any
  constructor(private builder:FormBuilder,private authServ:AuthService,private root:Router) { 
   
  }

  ngOnInit(): void {
    this.loginForm=this.builder.group({
      username:new FormControl(''),
      password:new FormControl('')
    })
  
  }
    login() {
let data =this.loginForm.getRawValue()
this.authServ.login(data).subscribe((user:any)=>{
this.user=user
console.log(this.user)
if(this.user && this.user.role=="admin"){
  this.root.navigateByUrl("admin")
  
}else if(this.user && this.user.role=="user"){
  this.root.navigateByUrl("user")
}else{
  this.root.navigateByUrl("login")
}
})
    
    }

}
