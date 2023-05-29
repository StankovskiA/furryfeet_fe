import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private registerService: RegisterService, private router: Router, private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],      
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])/)]],
      isDogWalker: [false]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = {
        first_name: this.registerForm.value.firstname,
        last_name: this.registerForm.value.lastname,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        is_dog_walker: this.registerForm.value.isDogWalker
      };
        
      this.registerService.createUser(user).subscribe(
        response => {
          console.log('User created successfully:', response.email);
          this.router.navigate(['/auth/login']);
        },
        error => {
          console.error('Error creating user:', error);
        }
      );
    }
  }
}
