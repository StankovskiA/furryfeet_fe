// appointment.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';
import { environment } from 'src/environments/environment';
import { DogWalker } from '../models/dogWalker.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
 
  constructor(private http: HttpClient) {}

  getDogWalkers(): Observable<DogWalker[]> {
    const token = localStorage.getItem('jwtToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 

    return this.http.get<DogWalker[]>(`${environment.apiUrl}/user/alldogwalkers/`, { headers });
  }

  getAppointments(): Observable<Appointment[]> {
    const token = localStorage.getItem('jwtToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 

    return this.http.get<Appointment[]>(`${environment.apiUrl}/appointment/all-appointments/`, { headers });
  }

  createAppointment(timeslot: string, dog_walker: number): Observable<any> {
    const token = localStorage.getItem('jwtToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 
    const payload = {
      'jwt': token,
      "timeslot": timeslot,
      "dog_walker": dog_walker
    }
    return this.http.post(`${environment.apiUrl}/appointment/create-appointment/`, payload, { headers });
  }

  // Add other methods for CRUD operations (e.g., create, update, delete) if needed
}
