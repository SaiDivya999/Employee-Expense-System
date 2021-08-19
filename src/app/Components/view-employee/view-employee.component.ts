import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from 'src/app/Entities/employee';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private empservice : EmployeeService) { }


  empArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  

  employees: Observable<Employee[]>;  
  employee : Employee=new Employee();  
  getMessage=false;  
  employeelist:any;  
  isupdated = false;      
   
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 16, 20, -1], [5, 16, 20, "All"]],  
      processing: true  
    };     
    this.empservice.getAllEmployee().subscribe(data =>{  
    this.employees =data;  
    this.dtTrigger.next();  
    })
    
  }

}
