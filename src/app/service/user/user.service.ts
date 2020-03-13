import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8081/SnippetManagement/user';

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
      return this.http.get(`${this.baseUrl}/list`);
  }
}
