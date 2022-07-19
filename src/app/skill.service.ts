import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ISkill } from './iskill';
@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor( private httpClient:HttpClient ) {
    
   }

   addSkill(skill:ISkill){
    console.log(skill.name);
    
      this.httpClient.post<ISkill>("https://localhost:44301/api/Skills",skill,{
        headers:{
          "Access-Control-Allow-Origin":"*"
        }
      }).subscribe(result=>console.log("Done"));
      // console.log("Data send to server");
  }
  getAllSkills(){
  return this.httpClient.get<ISkill[]>("https://localhost:44301/api/Skills",{
        headers:{
          "Access-Control-Allow-Origin":"*"
        }


      });

  }
  deleteSkill(id:number){
    return this.httpClient.delete("https://localhost:44301/api/Skills/"+id,{
        headers:{
          "Access-Control-Allow-Origin":"*"
        }


      }).subscribe( result=>console.log("Done")); 
      
  }
}

