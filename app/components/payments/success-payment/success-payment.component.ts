import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-payment',
  standalone:true,
  imports: [CommonModule], // Import CommonModule here

  templateUrl: './success-payment.component.html',
  styleUrls: ['./success-payment.component.css']
})
export class SuccessPaymentComponent implements OnInit {
  payment: any = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.payment.amount = params['amount'];
      this.payment.method = params['method'];
      this.payment.date = params['date'];
    
     
    });
  }
}
