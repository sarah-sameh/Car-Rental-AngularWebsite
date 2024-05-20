import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Services/autherizationService/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
constructor(private _AuthService:AuthService,private route:Router){}

loginForm:FormGroup=new FormGroup({
  userName: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required])

});


handleform() {
  if (this.loginForm.valid) {
 
    // Subscribe to the Observable returned by setRegister()
    this._AuthService.setLogin(this.loginForm.value).subscribe({
      next: (response) => {
     console.log(response);
        if (response.ispass == true) {
        
      
       localStorage.setItem("token",response.token);
       this._AuthService.saveUserData();
        this.route.navigate(['/Home']);
        } else {
        
          // Navigate to error if registration is not successful
         // this.errMsg = 'Registration not successful';
         console.log("error happens");
      
        }
      },
     
    });
  }
}



}
