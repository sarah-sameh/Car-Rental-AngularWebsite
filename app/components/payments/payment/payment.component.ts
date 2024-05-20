import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule], 
  templateUrl:'./payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment: any = {};
  paymentSuccessful: boolean = false; 

  constructor(private router: Router) {}

  submitPaymentForm() {
    
    this.paymentSuccessful = true; 
    if (this.paymentSuccessful) {
      console.log('Payment details:', this.payment);
      this.router.navigate(['Success', this.payment.date, this.payment.method, this.payment.amount]);

    } else {
      console.error('Payment failed');
    }
  }
}
