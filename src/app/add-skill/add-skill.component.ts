import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SkillService } from '../skill.service';
import { ISkill } from '../iskill';
@Inject(SkillService)
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.css']
})
export class AddSkillComponent implements OnInit {

name:FormControl=new FormControl("");
description:FormControl=new FormControl("");
  constructor(private skillService:SkillService) { }

  ngOnInit(): void {
  }
  save(){
     let skill:ISkill={
      name:this.name.value,
      description: this.description.value,
    };
    alert(skill.name);
    this.skillService.addSkill(skill)
    alert("Data Saved")
  }

}
