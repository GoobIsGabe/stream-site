import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'https://us-central1-streamsite-542be.cloudfunctions.net/app/api/roulette';

@Injectable({
  providedIn: 'root'
})
export class RouletteService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  findByUser(username) : Observable<any> {
    return this.http.get(`${baseUrl}?Username=${username}`);
  }
  findByResult(result) : Observable<any> {
    return this.http.get(`${baseUrl}?Result=${result}`);
  }
  findByTotal(username, result) : Observable<any> {
    return this.http.get(`${baseUrl}?Username=${username}&Result=${result}`);
  }
}
