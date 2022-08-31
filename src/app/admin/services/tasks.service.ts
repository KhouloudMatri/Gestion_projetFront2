import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  URL = "http://localhost:8082/api";
  constructor(private http:HttpClient) { }

  updatecompetence(id:any,data:any):Observable<any>{
    return this.http.put<any>(this.URL+"/competences/"+id,data)
  }
  getComp(id:any):Observable<any>{
    return this.http.get(this.URL+"/competences/"+id)
  }
  updatephase(id:any,data:any):Observable<any>{
    return this.http.put<any>(this.URL+"/phases/"+id,data)
  }
  getPhase(id:any):Observable<any>{
    return this.http.get(this.URL+"/phases/"+id)
  }


}
