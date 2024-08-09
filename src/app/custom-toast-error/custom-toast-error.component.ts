import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-toast-error',
  templateUrl: './custom-toast-error.component.html',
  styleUrls: ['./custom-toast-error.component.css']
})
export class CustomToastErrorComponent implements OnInit {
  message: string | undefined;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    // Display an error toast with a sample message
    this.toastr.error('This is an error message!', 'Error');
  }
}
