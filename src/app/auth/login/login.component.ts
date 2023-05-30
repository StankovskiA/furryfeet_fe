import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private tokenKey = 'jwtToken'; 
  loginForm: FormGroup;

  constructor(private loginService: LoginService, private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])/)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const user = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
  
      this.loginService.loginUser(user).subscribe(
        response => {
          console.log('User logged in:', response);
          const token = response.jwt; 
          localStorage.setItem(this.tokenKey, token);
          sessionStorage.setItem('email', JSON.stringify(user.email));
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error logging in:', error);
        }
      );
    }
  }
}
