import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/Footer/footer/footer.component';
import { CarsComponent } from './components/cars/cars.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payments/payment/payment.component';
import { SuccessPaymentComponent } from './components/payments/success-payment/success-payment.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent,RouterOutlet,CarsComponent,ContactComponent,RegisterComponent,LoginComponent,PaymentComponent,NotFoundComponent,SuccessPaymentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pro';
}
