import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../project.service';
import { IProject } from '../iproject';
import { FormControl } from '@angular/forms';

@Inject(ProjectService)

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  name:FormControl =new FormControl("");
  budget:FormControl=new FormControl("");
  description:FormControl=new FormControl("");

  constructor( private projetService:ProjectService) { }

  ngOnInit(): void {
  }
  save(){
    let project:IProject={
      name:this.name.value,
      budget:this.budget.value,
      description:this.description.value
    };
    this.projetService.addProject(project);
    alert("Data Saved")
  }

}
