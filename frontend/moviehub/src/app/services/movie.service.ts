import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Movie[] | undefined> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movie`);
  }

  public create(movie: Movie): Observable<any> {
    return this.http.post(`${this.baseUrl}/movie`, movie);
  }
}
