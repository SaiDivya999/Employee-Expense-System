import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8085/';
  constructor(private http : HttpClient) { }

  createEmployee(employee : object):Observable<object>{
    return this.http.post(`${this.baseUrl}`+'addEmployee',employee);
  }

  getAllEmployee():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'getAllEmployees');
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}deleteEmployee/${id}`);
  }

  getEmployeeById(empId:number):Observable<any>{
    return this.http.get(`${this.baseUrl}getEmployee/${empId}`);
  }
}
