import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

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

  private REST_API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getCelebrities(): Observable<any> {
    const url = `${this.REST_API_SERVER}/celebrites`;
    // return this.httpClient
    //   .get<any>(url)
    //   .pipe(catchError(this.handleError));
    return this.httpClient.get<any>(url)
      .pipe(
        map(response => {
          console.log(response)
        }),
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
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
function catchError(handleError: (error: HttpErrorResponse) => import("rxjs").Observable<never>): any {
  throw new Error('Function not implemented.');
}

