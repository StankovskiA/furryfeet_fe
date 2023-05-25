import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../interfaces/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListappointmentsService {

  constructor(private http: HttpClient) { }

  getAppointments(user: any): Observable<Appointment[]> {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      // User is not logged in, so throw an error
      return throwError(new Error('Token problem'));
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const params = { jwtToken: token };

    return this.http.get<Appointment[]>(`${environment.apiUrl}/appointment/all-appointments/`, { headers, params })
      .pipe(
        catchError((error: any) => {
          console.error('Error retrieving appointments:', error);
          return throwError(new Error('An error occurred while retrieving appointments.'));
        })
      );
  }

  getAppointment(appointmentId: string): Observable<Appointment> {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      //  user is not logged in
      return throwError(Error) as Observable<Appointment>;
    }

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Appointment>(`${environment.apiUrl}/appointment/get-appointment/${appointmentId}/`, { headers })
      .pipe(
        catchError((error: any) => {

          return throwError(Error) as Observable<Appointment>;
        })
      );
  }
}



