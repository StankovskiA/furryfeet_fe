import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../interfaces/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListappointmentsService {

  constructor(private http: HttpClient) { }

  getAppointments(token: string): Observable<Appointment[]>{
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<Appointment[]>(`${environment.apiUrl}/appointment/all-appointments/`)
  }



  getAppointment(): Observable<Appointment>{
    return this.http.get<Appointment>('http://127.0.0.1:8000/api/appointment/get-appointment/{appointment_id}/')
  }
}
