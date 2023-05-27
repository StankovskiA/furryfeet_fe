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


  constructor(private listappointmentsService: ListappointmentsService) { }

  appointments: Appointment[] = [];

  ngOnInit(): void {
    this.onGetAppointments();
  }

  onGetAppointments():  void {
    this.listappointmentsService.getAppointments()
      .subscribe(
        (appointments: any) => {
          console.log('Appointments:', appointments);
          this.appointments = appointments;
        },
        (error: any) => {
          console.error('Error retrieving appointments:', error);
        }
      );
  }
}
