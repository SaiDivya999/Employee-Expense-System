import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private baseUrl  ='http://localhost:8085/';
  constructor(private http: HttpClient) { }
  createProject(project : object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'addProject', project);  
  }

  getProjectList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'viewAllProjects');  
  }  
 
  deleteProject(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}deleteProject/${id}`);  
  }  


}