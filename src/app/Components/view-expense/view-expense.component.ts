import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Expense } from 'src/app/Entities/expense';
import { ExpenseService } from 'src/app/Services/expense.service';


@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  constructor(private expenseservice:ExpenseService) { }  
  
  expensesArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  expenses: Observable<Expense[]>;  
  expense : Expense=new Expense();  
  deleteMessage=false;  
  expenselist:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 5,  
      stateSave:true,  
      lengthMenu:[[5, 16, 20, -1], [5, 16, 20, "All"]],  
      processing: true  
    };     
    this.expenseservice.getExpenseList().subscribe(data =>{  
    this.expenses =data;  
    this.dtTrigger.next();  
    })  
  }
  
  deleteExpense(id: number) {  
    this.expenseservice.deleteExpense(id).subscribe(data =>{  
          console.log(data);  
          this.deleteMessage=true;  
          this.expenseservice.getExpenseList().subscribe(data =>{  
          this.expenses =data
        })  
        },  
        error => console.log(error));  
  } 

}