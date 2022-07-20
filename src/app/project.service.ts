import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProject } from './iproject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor( private httpClient: HttpClient) { }

addProject(project:IProject){
  this.httpClient.post<IProject>("https://localhost:44301/api/Project",project,{
  headers:{
    "Access-Control-Allow-Origin":"*"
  }

  }).subscribe(result=>console.log("Done"));

}

getAllProject(){
 return this.httpClient.get<IProject[]>("https://localhost:44301/api/Project",{
    headers:{
      "Access-Control-Allow-Origin":"*"
    }
  });

}
}
