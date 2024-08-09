import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'https://localhost:44311/Employee';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Employee[]>('getEmployees', []))
      );
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Employee>(url)
      .pipe(
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
      );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, this.httpOptions)
      .pipe(
        catchError(this.handleError<Employee>('addEmployee'))
      );
  }

  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.apiUrl, employee, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateEmployee'))
      );
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions)
      .pipe(
        catchError(this.handleError<Employee>('deleteEmployee'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
