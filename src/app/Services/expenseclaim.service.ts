import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class ExpenseClaimService {
  baseUrl  ='http://localhost:8085/';
  constructor(private http: HttpClient) { }
  createExpenseClaim(expenseclaim : object): Observable<object>{
    return this.http.post(`${this.baseUrl}`+'addExpenseClaim', expenseclaim);  
  }

  getExpenseList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'/getAllExpenseClaims');  
    
  }  
 
  deleteExpenseClaim(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteExpenseClaim/${id}`);  
  }  


}
