import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [
  {path:"add-skill", component:AddSkillComponent},
  {path:"skills", component:SkillListComponent},
  {path:"add-project",component:AddProjectComponent},
  {path:"project",component:ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
