import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'; // Adjust the path if necessary
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeData: any[] = [];

 // constructor(private apiService: ApiService) {}
  constructor(
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.fetchEmployeeData();
  }

  fetchEmployeeData(): void {
    this.apiService.getPolicies().subscribe(
      (data) => {
        this.employeeData = data;
      },
      (error) => {
        this.toastr.error('Error fetching employee data!');
      }
    );
  }
  // fetchEmployeeData(): void {
  //   this.apiService.getPolicies().subscribe(
  //     data => {
  //       this.employeeData = data;
  //     },
  //     error => {
  //       console.error('Error fetching employee data:', error);
  //     }
  //   );
  // }
}
