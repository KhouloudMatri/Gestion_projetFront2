import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-edit-phase',
  templateUrl: './edit-phase.component.html',
  styleUrls: ['./edit-phase.component.scss']
})
export class EditPhaseComponent implements OnInit {

  phaseForm!: FormGroup;
  

  constructor(private service : TasksService , private route : ActivatedRoute , private root: Router,private build:FormBuilder) {
    this.phaseForm = this.build.group({
      nom_phase:new FormControl(this.ph?.nom_phase||""),
      duree:new FormControl(this.ph?.duree||""),
      date_debut_phase:new FormControl(this.ph?.date_debut_phase),
      date_fin_phase:new FormControl(this.ph?.date_fin_phase),
      etat:new FormControl(this.ph?.etat||"")
      
    })
   }

  id = this.route.snapshot.paramMap.get("id");
ph:any

  ngOnInit(): void {
    this.service.getPhase(this.id).subscribe(res=>{

      if(res['date_debut_phase'] != null){
        res['date_debut_phase'].replaceAll('/','-')
        }
        if(res['date_fin_phase'] != null){
          res['date_fin_phase'].replaceAll('/','-')
        }

      console.log(res)
      this.ph=res
      this.phaseForm = this.build.group({
         nom_phase:new FormControl(this.ph?.nom_phase||""),
         duree:new FormControl(this.ph?.duree||""),
         date_debut_phase:new FormControl(this.ph?.date_debut_phase),
         date_fin_phase:new FormControl(this.ph?.date_fin_phase),
         etat:new FormControl(this.ph?.etat||"")
      
      })
  })

   

  }

  submit(){
    
    if(this.phaseForm.valid){
      let data=this.phaseForm.getRawValue()
console.log(data)
this.service.updatephase(this.id,data).subscribe(res=>{
  if(res){
    this.root.navigateByUrl('admin/phase')
  }
})
    }

  }

 

}




