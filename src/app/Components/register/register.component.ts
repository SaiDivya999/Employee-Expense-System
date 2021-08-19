import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Entities/employee';
import { EmployeeService } from 'src/app/Services/employee.service';


declare var toastr: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;
  constructor(private empservice : EmployeeService) { }
employee:Employee = new Employee();
submitted = false;
  ngOnInit() {
    this.submitted = false;
  }

  saveempform = new FormGroup({
     empName : new FormControl('',[Validators.required,Validators.minLength(5)]),
     empPAN : new FormControl('',[Validators.required,Validators.pattern('([A-Z]{5}[0-9]{4}[A-Z]{1})')]),
     empDesignation : new FormControl('',[Validators.required,Validators.minLength(5)]),
     empDomain : new FormControl('',[Validators.required,Validators.minLength(5)]),
     empDOJ : new FormControl('',[Validators.required]),
     empDOB : new FormControl('',[Validators.required]),
     empSalary : new FormControl('',[Validators.required,Validators.minLength(5)]),
     empEmailId : new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9]+@[a-z]+\\.[a-z]{2,4}$')]),
     userName : new FormControl('',[Validators.required,Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=_])(?=\\S+$).{8,}$')]),
     password : new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=_])(?=\\S+$).{8,}$')]),
     role : new FormControl('',[Validators.required])
  });

  saveEmployee(saveemp){
    this.employee = new Employee();
    this.employee.empName = this.EmpName.value;
    this.employee.empPAN = this.EmpPAN.value;
    this.employee.empDesignation = this.EmpDesignation.value;
    this.employee.empDomain = this.EmpDomain.value;
    this.employee.empDOJ = this.EmpDOJ.value;
    this.employee.empDOB = this.EmpDOB.value;
    this.employee.empSalary = this.EmpSalary.value;
    this.employee.empEmailId = this.EmpEmailId.value;
    this.employee.userName = this.UserName.value;
    this.employee.password = this.Password.value;
    this.employee.role = this.Role.value;
    this.submitted = true;
    this.save();
    this.alert= true;
  }

  closeAlert(){
    this.alert= false;
  }

  save() {
    this.empservice.createEmployee(this.employee)
      .subscribe((data)=>{toastr.success("Congratulations, your registration was successful!!"),console.log(data)}, error => {toastr.error("Please fill all the details!"),console.log(error)});       
    this.employee = new Employee();
  }

  get EmpName(){
    return this.saveempform.get('empName');
  }

  get EmpPAN(){
    return this.saveempform.get('empPAN');
  }

  get EmpDesignation(){
    return this.saveempform.get('empDesignation');
  }

  get EmpDomain(){
    return this.saveempform.get('empDomain');
  }

  get EmpDOJ(){
    return this.saveempform.get('empDOJ');
  }

  get EmpDOB(){
    return this.saveempform.get('empDOB');
  }

  get EmpSalary(){
    return this.saveempform.get('empSalary');
  }

  get EmpEmailId(){
    return this.saveempform.get('empEmailId');
  }

  get UserName(){
    return this.saveempform.get('userName');
  }

  get Password(){
    return this.saveempform.get('password');
  }

  get Role(){
    return this.saveempform.get('role');
  }


  addEmployeeForm(){
    this.submitted = false;
    this.saveempform.reset();
  }
}
