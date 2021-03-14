import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Evenement, Lien } from '../modele/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementDataService {

  errorHandler = {
    log: (message: any, error: any) => console.log(message, error),
    alertFriendlyInfo: (message: any, observer: Observer<any>) => observer.error(message)
  };

  constructor(private http: HttpClient) { }

  private apiBaseUrl = environment.apiBaseUrl;

  public getEvenements():Observable<Array<Evenement>>{
    return this.http.get<Array<Evenement>>(`${this.apiBaseUrl}/events`)
    .pipe(
      catchError( (error: HttpErrorResponse) => {
        this.errorHandler.log("Error while getting events", error);
        return throwError("Error while getting events");
      })
    )
  }

}
