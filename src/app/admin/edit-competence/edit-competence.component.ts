
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-edit-competence',
  templateUrl: './edit-competence.component.html',
  styleUrls: ['./edit-competence.component.scss']
})
export class EditCompetenceComponent implements OnInit {

  competenceForm!: FormGroup;
  

  constructor(private service : TasksService , private route : ActivatedRoute , private root: Router,private build:FormBuilder) {
    this.competenceForm = this.build.group({
      nom:new FormControl(this.comp?.nom||"")
    
    })
   }

  id = this.route.snapshot.paramMap.get("id");
comp:any

  ngOnInit(): void {
    this.service.getComp(this.id).subscribe(res=>{
      console.log(res)
      this.comp=res
      this.competenceForm = this.build.group({
        nom:new FormControl(this.comp?.nom||"")
      
      })
  })

   

  }

  submit(){
    
    if(this.competenceForm.valid){
      let data=this.competenceForm.getRawValue()
console.log(data)
this.service.updatecompetence(this.id,data).subscribe(res=>{
  if(res){
    this.root.navigateByUrl('admin/competence')
  }
})
    }

  }

 

}



