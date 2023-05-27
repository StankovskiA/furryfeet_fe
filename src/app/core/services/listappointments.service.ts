import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Appointment } from '../interfaces/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListappointmentsService {

  constructor(private http: HttpClient) { }

  getAppointments(): Observable<Appointment[]> {
    const accessToken = localStorage.getItem('jwtToken');
    if (accessToken) {
      const headers = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);
      return this.http.get<Appointment[]>(`${environment.apiUrl}/appointment/all-appointments/`, { headers: headers })
        .pipe(
          catchError((error) => {
            console.error('Error retrieving appointments:', error);
            return throwError(error);
          })
        );
    } else {
      return throwError('Access token not found.');
    }
  }
}
