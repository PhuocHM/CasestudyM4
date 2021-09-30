import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of, pipe } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ServerHttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // Authorization: 'my-auth-token'
    }),
  };

  //private REST_API_SERVER = "http://localhost:3000";
  private REST_API_SERVER = "https://6083df209b2bed00170404a0.mockapi.io/angular/courses/";

  constructor(private httpClient: HttpClient) { }

  public getCelebrities(): Observable<any> {
    //const url = `${this.REST_API_SERVER}/celebrites`;
    const url = `${this.REST_API_SERVER}`;
    return this.httpClient.get<any>(url, this.httpOptions).pipe(catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}


