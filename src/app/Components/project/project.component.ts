import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from 'src/app/Entities/project';
import { ProjectService } from 'src/app/Services/project.service';


declare var toastr: any;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  alert:boolean=false;

  constructor(private projectservice:ProjectService) { }

  project : Project=new Project();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  saveprojectform=new FormGroup({
    projectDescription:new FormControl('',[Validators.required,Validators.minLength(5)]), 
    startDate:new FormControl('',[Validators.required]),
    endDate:new FormControl('',[Validators.required])

  });

  
  saveProject(saveProject){
    this.project=new Project();   
    this.project.projectDescription=this.ProjectDescription.value;
    this.project.startDate=this.StartDate.value;
    this.project.endDate=this.EndDate.value;
    this.submitted = true;
    this.save();
    this.alert=true;
  }
  closeAlert(){
    this.alert=false;
  }
  save() {
    this.projectservice.createProject(this.project)
      .subscribe((data)=>{toastr.success("Project added successfully!!"),console.log(data)}, error => {toastr.error("Please fill all the details!"),console.log(error)});       
    this.project = new Project();
  }
  
    get ProjectDescription(){
      return this.saveprojectform.get('projectDescription');
    }
    get StartDate(){
      return this.saveprojectform.get('startDate');
    }
    get EndDate(){
      return this.saveprojectform.get('endDate');
    }
  
    addProjectForm(){  
      this.submitted=false;  
      this.saveprojectform.reset();  
    }  

}