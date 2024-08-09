import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  saveEmployee(value: any) {
    throw new Error('Method not implemented.');
  }
  getEmployees() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = `https://localhost:44311/Employee`; // Adjust the endpoint path
//  private baseUrl = 'https://your-api-url.com/api/employees'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addPolicy(policy: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, policy);
  }

  updatePolicy(id: number, policy: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, policy);
  }

  deletePolicy(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
