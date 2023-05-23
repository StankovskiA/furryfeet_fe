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
title = 'angularhttp';
private tokenKey = 'jwtToken';

constructor(private listappointmentsService: ListappointmentsService){}

ngOnInit(): void {
  this.onGetAppointments();
}

onGetAppointments(): void {

  const token = localStorage.getItem('jwtToken');
  console.log(localStorage)

  console.log(!token)

  if (!token) {
    console.log("Token not found");
    return; 
  }

  this.listappointmentsService.getAppointments(token)
    .pipe(
      tap((response) => console.log(response)),
      catchError((error: any) => {
        console.log(error);
        // Handle error as needed
        // Return an observable or throw an error to propagate it further
        return throwError(error);
      })
    )
    .subscribe(
      () => console.log("done")
    );
}
}
