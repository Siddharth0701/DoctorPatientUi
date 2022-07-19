import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';

const routes: Routes = [
  {path:"add-skill", component:AddSkillComponent},
  {path:"skills", component:SkillListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
