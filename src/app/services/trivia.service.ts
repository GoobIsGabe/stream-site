import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://us-central1-streamsite-542be.cloudfunctions.net/app/api/trivia';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  findByUser(username) : Observable<any> {
    return this.http.get(`${baseUrl}?Username=${username}`);
  }
}
