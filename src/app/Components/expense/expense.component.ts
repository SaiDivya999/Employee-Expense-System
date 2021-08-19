import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Expense } from 'src/app/Entities/expense';
import { ExpenseService } from 'src/app/Services/expense.service';

declare var toastr: any;

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  constructor(private expenseservice:ExpenseService) { }

  expense : Expense=new Expense();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  saveexpenseform=new FormGroup({
    expenseType:new FormControl('',[Validators.required,Validators.minLength(5)]),
    expenseDescription:new FormControl('',[Validators.required,Validators.minLength(5)]), 

  });

  saveExpense(saveExpense){
    this.expense=new Expense();   
    this.expense.expenseType=this.ExpenseType.value;
    this.expense.expenseDescription=this.ExpenseDescription.value;
    this.submitted = true;
    this.save();
  
  }

  save() {
    this.expenseservice.createExpense(this.expense)
      .subscribe((data)=>{toastr.success("Expense added successfully!!"),console.log(data)}, error => {toastr.error("Please fill all the details!"),console.log(error)});       
    this.expense = new Expense();
   
    
  }
 

  get ExpenseType(){
    return this.saveexpenseform.get('expenseType');
  }

  get ExpenseDescription(){
    return this.saveexpenseform.get('expenseDescription');
  }

  
}
