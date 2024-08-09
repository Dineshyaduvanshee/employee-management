import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-toast-success',
  templateUrl: './custom-toast-success.component.html',
  styleUrls: ['./custom-toast-success.component.css']
})
export class CustomToastSuccessComponent {
  @Input() message: string | undefined;
}
