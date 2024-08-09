import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';
import { CustomToastSuccessComponent } from './custom-toast-success/custom-toast-success.component';
import { CustomToastErrorComponent } from './custom-toast-error/custom-toast-error.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  employeeForm: FormGroup;
  employeeData: any[] = [];
  isSubmitting = false;
  isEditMode = false;
  currentEmployeeId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private apiService: ApiService
  ) {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      empCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      address: ['']
    });
  }

  ngOnInit(): void {
    this.fetchPolicies();
  }

  onSubmit(): void {
    if (this.employeeForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;

      if (this.isEditMode) {
        this.apiService.updatePolicy(this.currentEmployeeId!, this.employeeForm.value).subscribe(
          (response) => {
            this.toastr.show('Employee updated successfully!', 'Success', {
              toastComponent: CustomToastSuccessComponent,
              toastClass: 'ngx-toastr toast-success'
            });
            this.fetchPolicies();
            this.isEditMode = false;
            this.currentEmployeeId = null;
            this.resetForm();
            this.isSubmitting = false;
          },
          (error) => {
            this.toastr.show('An error occurred while updating the employee.', 'Error', {
              toastComponent: CustomToastErrorComponent,
              toastClass: 'ngx-toastr toast-error'
            });
            this.isSubmitting = false;
          }
        );
      } else {
        this.apiService.addPolicy(this.employeeForm.value).subscribe(
          (response) => {
            this.toastr.show('Employee added successfully!', 'Success', {
              toastComponent: CustomToastSuccessComponent,
              toastClass: 'ngx-toastr toast-success'
            });
            this.fetchPolicies();
            this.resetForm();
            this.isSubmitting = false;
          },
          (error) => {
            this.toastr.show('An error occurred while adding the employee.', 'Error', {
              toastComponent: CustomToastErrorComponent,
              toastClass: 'ngx-toastr toast-error'
            });
            this.isSubmitting = false;
          }
        );
      }
    } else if (!this.isSubmitting) {
      this.toastr.warning('Please fix the errors in the form.', 'Warning');
    }
  }

  fetchPolicies(): void {
    this.apiService.getPolicies().subscribe(
      (response) => {
        this.employeeData = response;
      },
      (error) => {
        this.toastr.show('An error occurred while fetching the policies.', 'Error', {
          toastComponent: CustomToastErrorComponent,
          toastClass: 'ngx-toastr toast-error'
        });
      }
    );
  }

  onEdit(employee: any): void {
    this.isEditMode = true;
    this.currentEmployeeId = employee.id;
    this.employeeForm.patchValue(employee);
  }

  onDelete(employeeId: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.apiService.deletePolicy(employeeId).subscribe(
        (response) => {
          this.toastr.show('Employee deleted successfully!', 'Success', {
            toastComponent: CustomToastSuccessComponent,
            toastClass: 'ngx-toastr toast-success'
          });
          this.fetchPolicies();
        },
        (error) => {
          this.toastr.show('An error occurred while deleting the employee.', 'Error', {
            toastComponent: CustomToastErrorComponent,
            toastClass: 'ngx-toastr toast-error'
          });
        }
      );
    }
  }

  resetForm(): void {
    this.employeeForm.reset();
    this.isEditMode = false;
    this.currentEmployeeId = null;
  }
}
