// appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<Appointment[]> {
    const token = localStorage.getItem('jwtToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 

    return this.http.get<Appointment[]>(`${environment.apiUrl}/appointment/all-appointments/`, { headers });
  }

  // Add other methods for CRUD operations (e.g., create, update, delete) if needed
}
