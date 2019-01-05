import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { AppSettings } from '../../app.settings';

import { IUser } from '../../interfaces/user';
import { envEnum, environment } from '../shared/constants';

@Injectable()
export class AuthService {
    private _baseUrl: string = '';
    private _headers: any;

    constructor(private http: HttpClient) {
        let env: environment = { flag: envEnum.develop };
        this._baseUrl = AppSettings.getApiUrl(env);
        //this._headers = configsvc.getHTTPHeader();
    }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    authenticate(user: IUser): Observable<any> {
        return new Observable(observer => {
            setTimeout(() => {
              let result = { data: {'isexist': true}};
              observer.next(result);
              observer.complete();
            }, 2000)
          })
    };

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
