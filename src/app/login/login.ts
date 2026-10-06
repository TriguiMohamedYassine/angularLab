import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth-service';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-login',
  imports: [FormsModule,MatFormFieldModule,MatInputModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(private authService: AuthService,private router: Router) { }

  password : string=""
  email: string=""
  errorMessage: string = ""
  
  
  login(){
    this.errorMessage = "";
    this.authService.signInWithEmailAndPassword(this.email, this.password).then((result) => {
      this.router.navigate(['/members']);
    }).catch((error) => {
      console.error(error);
      this.errorMessage = error.message || "Failed to login. Please check your credentials.";
    });
    
  }
}
