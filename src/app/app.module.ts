import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { SkillService } from './skill.service';
import { AddSkillComponent } from './add-skill/add-skill.component';
import { SkillListComponent } from './skill-list/skill-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSkillComponent,
    SkillListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
