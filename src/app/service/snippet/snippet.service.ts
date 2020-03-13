import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Snippet } from 'src/app/entity/snippet';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SnippetService {

  private baseUrl = 'http://localhost:8081/SnippetManagement/user';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

    getUserSnippet(userId: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/get-${userId}-user-snippet`);
    }

    updateSnippet(selectedSnippet: Snippet): Observable<any> {
        return this.http.put('http://localhost:8081/SnippetManagement/snippet/update', JSON.stringify(selectedSnippet), this.httpOptions);
    }

}
