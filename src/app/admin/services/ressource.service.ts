import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  constructor(private http:HttpClient) { }

  //add ressource 
  public ajouterRessource(ressource:any){
    return this.http.post('http://localhost:8082/ressources/',ressource);
  }
}
