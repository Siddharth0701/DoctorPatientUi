import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from '../iproject';
import { ProjectService } from '../project.service';
@Inject(ProjectService)

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  projects!:IProject[];

  constructor( private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getAllProject().subscribe(projects=>{
      this.projects=projects;
    })
  
  }

}
