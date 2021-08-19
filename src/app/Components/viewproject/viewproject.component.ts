import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Project } from 'src/app/Entities/project';
import { ProjectService } from 'src/app/Services/project.service';


@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent implements OnInit {

  constructor(private projectservice:ProjectService) { }

  projectsArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  projects: Observable<Project[]>;  
  project : Project=new Project();  
  deleteMessage=false;  
  projectlist:any;  
  isupdated = false; 

  ngOnInit() {
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 16, 20, -1], [5, 16, 20, "All"]],  
      processing: true  
    };     
    this.projectservice.getProjectList().subscribe(data =>{  
    this.projects =data;  
    this.dtTrigger.next();  
    })  
  }
  deleteProject(id: number) {  
    this.projectservice.deleteProject(id).subscribe(data =>{  
          console.log(data);  
          this.deleteMessage=true;  
          this.projectservice.getProjectList().subscribe(data =>{  
          this.projects =data
        })  
        },  
        error => console.log(error));  
  } 
  

}