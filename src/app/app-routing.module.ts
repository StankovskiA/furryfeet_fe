import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  { path: 'hi', loadChildren: () => import('./hello/hello.module').then(m => m.HelloModule) },
  { path: 'auth', 
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'changepassword', component: ChangePasswordComponent },
    ], 
  },
  { path: 'about', component: AboutComponent },
  { path: 'appointment',
  children:[ 
      { path: 'all-appointments', component: AppointmentComponent},
      { path: 'appointment_details', component: AppointmentComponent},
      
    ],
 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
