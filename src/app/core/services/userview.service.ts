import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//const API_URL = 'http://127.0.0.1:8000/api/user/';

@Injectable({
  providedIn: 'root'
})
export class UserviewService {

  constructor(private http: HttpClient) { }


}
