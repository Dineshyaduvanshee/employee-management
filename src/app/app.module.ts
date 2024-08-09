import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { ToastrModule } from 'ngx-toastr';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CustomToastSuccessComponent } from './custom-toast-success/custom-toast-success.component';
import { CustomToastErrorComponent } from './custom-toast-error/custom-toast-error.component';

//import { EmployeeFormComponent } from './employee-form/employee-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CustomToastSuccessComponent,
    CustomToastErrorComponent,
 //   EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-right', // Adjust position as needed
      preventDuplicates: true,
      timeOut: 3000,
      extendedTimeOut: 1000,
      // Add custom toast component configuration
      toastComponent: CustomToastSuccessComponent, // For success toasts
      toastClass: 'ngx-toastr toast-success' // For success toasts
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
