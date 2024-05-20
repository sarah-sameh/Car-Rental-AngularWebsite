import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../Services/autherizationService/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {


constructor(private authService:AuthService,private route:Router)
{

}

  resetPasswordForm:FormGroup=new FormGroup({
    userName:new FormControl('',[Validators.required]),
    oldPassword:new FormControl('',[Validators.required]),

    newPassword:new FormControl('',[Validators.required])


  })

handleResetPassword(){
  if (this.resetPasswordForm.valid) {
 
    // Subscribe to the Observable returned by setRegister()
    this.authService.resetPassword(this.resetPasswordForm.value).subscribe({
      next: (response) => {
     
        console.log(response);
        if (response.isPass == true) {
      
   
        this.route.navigate(['/Login']);
        } 
      },
     
    });
  }
}

}
