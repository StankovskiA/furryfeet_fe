import { Component, OnInit } from '@angular/core';
import { Appointment } from '../core/models/appointment.model';
import { AppointmentService } from '../core/services/appointment.service';

@Component({
  selector: 'app-appointments-list',
  templateUrl: './appointments-list.component.html',
  styleUrls: ['./appointments-list.component.css']
})
export class AppointmentsListComponent implements OnInit {
  appointments: Appointment[] = [];


  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.fetchAppointments();
  }

  fetchAppointments() {
    this.appointmentService.getAppointments().subscribe(
      (appointments: Appointment[]) => {
        this.appointments = appointments;
        console.log({appointments});
      },
      (error) => {
        console.log('Error fetching appointments:', error);
      }
    );
  }
}

