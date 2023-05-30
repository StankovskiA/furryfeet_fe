import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  createUser(user: any): Observable<any> {
    console.log('Register ');

    console.log(user);

    sessionStorage.setItem('user', user);
    sessionStorage.setItem('first_name', JSON.stringify(user.first_name));
    sessionStorage.setItem('last_name', JSON.stringify(user.last_name));
    sessionStorage.setItem('email', JSON.stringify(user.email));

    return this.http.post<any>(`${environment.apiUrl}/register/`, user);
  }
}
