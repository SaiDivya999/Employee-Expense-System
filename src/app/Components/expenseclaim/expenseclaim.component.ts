import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExpenseClaim } from 'src/app/Entities/expenseclaim';
import { ExpenseClaimService } from 'src/app/Services/expenseclaim.service';
declare var toastr: any;

@Component({
  selector: 'app-expenseclaim',
  templateUrl: './expenseclaim.component.html',
  styleUrls: ['./expenseclaim.component.css']
})
export class ExpenseClaimComponent implements OnInit {
alert:boolean=false;
  constructor(private expenseclaimservice:ExpenseClaimService) { }

  expenseclaim : ExpenseClaim=new ExpenseClaim();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  saveexpenseclaimform=new FormGroup({
    expenseAmount:new FormControl('',[Validators.required]),
    startDate:new FormControl('',[Validators.required]), 
    endDate:new FormControl('',[Validators.required]), 
    employee:new FormControl('',[Validators.required]), 
    expense:new FormControl('',[Validators.required]), 
    project:new FormControl('',[Validators.required]), 

  });

  saveExpenseClaim(saveExpenseClaim){
    this.expenseclaim=new ExpenseClaim();   
    this.expenseclaim.expenseAmount=this.ExpenseAmount.value;
    this.expenseclaim.startDate=this.StartDate.value;
    this.expenseclaim.endDate=this.EndDate.value;
    this.expenseclaim.empId=this.EmpId.value;
    this.expenseclaim.expenseCode=this.ExpenseCode.value;
    this.expenseclaim.projectCode=this.ProjectCode.value;
    
    this.submitted = true;
    this.save();
    this.alert=true;
  }
closeAlert(){
  this.alert=false;
}
  save() {
    this.expenseclaimservice.createExpenseClaim(this.expenseclaim)
     .subscribe((data)=>{toastr.success("ExpenseClaim added successfully!!"),console.log(data)}, error => {toastr.error("Please fill all the details!"),console.log(error)});       
     this.expenseclaim = new ExpenseClaim();
  }
 

  get ExpenseAmount(){
    return this.saveexpenseclaimform.get('expenseAmount');
  }

  get StartDate(){
    return this.saveexpenseclaimform.get('startDate');
  }
  get EndDate(){
    return this.saveexpenseclaimform.get('endDate');
  }
  get EmpId(){
    return this.saveexpenseclaimform.get('empId');
  }
  get ExpenseCode(){
    return this.saveexpenseclaimform.get('expenseCode');
  }
  get ProjectCode(){
    return this.saveexpenseclaimform.get('projectCode');
  }
  addExpenseClaimForm(){  
    this.submitted=false;  
    this.saveexpenseclaimform.reset();  
  }  
}
