import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

//const API_URL = 'http://127.0.0.1:8000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserviewService {

  constructor(private http: HttpClient) { }


  getDog(id:any): Observable<any> {
    const token = localStorage.getItem('jwtToken'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); 

    return this.http.get<any>(`${environment.apiUrl}/dog/my_dog/${id}`, { headers })
  }

  getUser(): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.get<any>(`${environment.apiUrl}/user`, { headers });
  }
  
  createDog(dogData: any): Observable<any> {
    const token = localStorage.getItem('jwtToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.http.post<any>(`${environment.apiUrl}/dog/create-dog/`, dogData, { headers });
  }
  
  
  

}
