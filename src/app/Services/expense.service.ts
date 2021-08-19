import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  private baseUrl  ='http://localhost:8085/';
  constructor(private http: HttpClient) { }
  createExpense(expense : object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'addExpense', expense);  
  }

  getExpenseList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllExpenses');  
  }  
 
  deleteExpense(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteExpense/${id}`);  
  }  

}
