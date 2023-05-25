import { Component, OnInit } from '@angular/core';
import { ListappointmentsService } from '../core/services/listappointments.service';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Appointment } from '../core/interfaces/appointment';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  private tokenKey = 'jwtToken';



  constructor(private listappointmentsService: ListappointmentsService) { }

  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.onGetAppointments();
  }

  onGetAppointments():  void {
    const user = {
      jwt: localStorage.getItem(this.tokenKey)
    };
  
    this.listappointmentsService.getAppointments(user)
      .subscribe(
        appointments => {
          console.log('Appointments:', appointments);
          this.appointments = appointments;
        },
        error => {
          console.error('Error retrieving appointments:', error);
          // Handle the error or rethrow it if necessary
          return throwError(error);
        }
      );
  }
}
