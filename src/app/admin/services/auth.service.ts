import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(data:any):Observable<any>{
    return this.http.get("http://localhost:8082/api/users/info/"+data.username+"/"+data.password)
  }
}
