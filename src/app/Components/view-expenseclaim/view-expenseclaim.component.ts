import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ExpenseClaim } from 'src/app/Entities/expenseclaim';
import { ExpenseClaimService } from 'src/app/Services/expenseclaim.service';

@Component({
  selector: 'app-view-expenseclaim',
  templateUrl: './view-expenseclaim.component.html',
  styleUrls: ['./view-expenseclaim.component.css']
})
export class ViewExpenseClaimComponent implements OnInit {

  constructor(private expenseclaimservice:ExpenseClaimService) { }  
  
  expensesArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  expenses: Observable<ExpenseClaim[]>;  
  expense : ExpenseClaim=new ExpenseClaim();  
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
    this.expenseclaimservice.getExpenseList().subscribe(data =>{  
    this.expenses =data;  
    this.dtTrigger.next();  
    })  
  }
  
  deleteExpenseClaim(id: number) {  
    this.expenseclaimservice.deleteExpenseClaim(id).subscribe(data =>{  
          console.log(data);  
          this.deleteMessage=true;  
          this.expenseclaimservice.getExpenseList().subscribe(data =>{  
          this.expenses =data
        })  
        },  
        error => console.log(error));  
  } 

}