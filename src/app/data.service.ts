import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL to web API

  constructor(private http: HttpClient) {}

  fetchData(): Observable<any[]> {
    console.log('Fetching data...');
    return this.http.get<any[]>(this.apiUrl).pipe(
      tap(data => console.log('Data received:', data)),  // Use tap to log the data
      catchError(error => {
        console.error('Error fetching data:', error);
        throw error;
      })
    );
  }
}
