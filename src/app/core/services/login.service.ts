import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginUser(user: any): Observable<any> {
    console.log("USER:");
    
    console.log(user);
    
    return this.http.post<any>(`${environment.apiUrl}/login/`, user);
  }
  logoutUser(): void{
    localStorage.removeItem('jwtToken');
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      return true; 
    }
    return false;
  }
}




