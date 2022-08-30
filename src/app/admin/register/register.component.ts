import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RessourceService } from 'app/services/ressource.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private ressourceService:RessourceService, private snack:MatSnackBar) { }


  public ressource={
    nom:'',
    prenom:'',
    num_tel:'',
    email:'',
    login:'',
    mdp:''


  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.ressource);
    if(this.ressource.nom=='' || this.ressource.nom==null){
      alert('Veuillez remplir le champ Nom !!');
      return;
    } 
    if(this.ressource.prenom=='' || this.ressource.prenom==null){
      alert('Veuillez remplir le champ Prénom !!');
      return;
    } 
    if(this.ressource.num_tel=='' || this.ressource.num_tel==null){
      alert('Veuillez remplir le champ Numéro de Télèphone !!');
      return;
    }
    if(this.ressource.email=='' || this.ressource.email==null){
      alert('Veuillez remplir le champ Email !!');
      return;
    }  
     if(this.ressource.login=='' || this.ressource.login==null){
      alert('Veuillez remplir le champ Login !!');
      return;
    } 
    if(this.ressource.mdp=='' || this.ressource.mdp==null){
      alert('Veuillez remplir le champ Mot de Passe !!');
      /*this.snack.open('Veuillez remplir le champ Login !!', '' , {
        duration: 3000,
        verticalPosition: 'top',
      });*/
      return;
    } 

    this.ressourceService.ajouterRessource(this.ressource).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Succès', 'ressource inscrite avec succès', 'success');
        //alert('ressource inscrite avec succès !');
        return;
      },
      (error)=> {
        console.log(error);
        //alert('Login existe déjà !');
        Swal.fire('Echéc', 'Login existe déjà', 'warning');
      }
      )
    
    
       
  }

}
