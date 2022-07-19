import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SkillService } from '../skill.service';
import { ISkill } from '../iskill';
@Inject (SkillService)
@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  skills!:ISkill[];
  constructor( private skillServices:SkillService) { }

  ngOnInit(): void {
    this.skillServices.getAllSkills().subscribe(skills=>{
      this.skills=skills;
    })
  }
  delete(skill:ISkill){
    let id:number=0;
    if (skill.id==undefined) {

      
    } else {
      id=skill.id;
      
    }
    
    this.skillServices.deleteSkill(id);
  }

}
