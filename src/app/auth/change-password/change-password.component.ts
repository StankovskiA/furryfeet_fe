import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChangepasswordService } from 'src/app/core/services/changepassword.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  private tokenKey = 'jwtToken';
  changePasswordForm: FormGroup;

  constructor(private changePasswordService: ChangepasswordService, private router: Router, private formBuilder: FormBuilder) {
    this.changePasswordForm = this.formBuilder.group({
      oldpassword: ['', Validators.required],
      newpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])/)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[A-Z])/)]],
    });
  }

  onSubmit() {
    if (this.changePasswordForm.valid) {
      const user = {
        jwt: localStorage.getItem(this.tokenKey),
        current_password: this.changePasswordForm.value.oldpassword,
        new_password1: this.changePasswordForm.value.newpassword,
        new_password2: this.changePasswordForm.value.confirmpassword,
      };

      this.changePasswordService.changePassword(user).subscribe(
        response => {
          console.log('Password changed successfully:', response);
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error changing password:', error);
          console.log(user)
        }
      );
    }
  }
}
