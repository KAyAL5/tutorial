import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { AppSettings } from '../../config/app.settings';

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
        return this.http.post<any>(`${this._baseUrl}/user/isValidUser`, JSON.stringify(user), this.httpOptions)
            .pipe(
                tap((res) => {
                    if (res.data && res.data._id) {
                        localStorage.setItem('currentUser', JSON.stringify(res.data));
                    }
                    return res;
                }),
                catchError(this.handleError('isValidUser', user))
            );
    };

    register(user: IUser): Observable<any> {
        return this.http.post<any>(`${this._baseUrl}/user/register`, JSON.stringify(user), this.httpOptions)
            .pipe(
                tap((user) => console.log(`user register=${user}`)),
                catchError(this.handleError<any>('register'))
            );
    }

    updateUser(userId, user: IUser): Observable<any> {
        return this.http.put(`${this._baseUrl}/user/${userId}`, JSON.stringify(user), this.httpOptions)
            .pipe(
                tap(_ => console.log(`updated user ${user.username}`)),
                catchError(this.handleError<any>('updateProduct'))
            );
    }

    getUsers(): Observable<any> {
        return this.http.get(`${this._baseUrl}/user/alluser`, this.httpOptions)
            .pipe(
                map(this.extractData));
    }

    getUserById(userId): Observable<any> {
        return this.http.get(`${this._baseUrl}/user/${userId}`)
            .pipe(
                map(this.extractData));
    }

    deleteUser(userId): Observable<any> {
        return this.http.delete<any>(`${this._baseUrl}/user/${userId}`, this.httpOptions)
            .pipe(
                tap(_ => console.log(`deleted user id=${userId}`)),
                catchError(this.handleError<any>('deleteUser'))
            );
    }

    logout = () => {
        localStorage.removeItem('currentUser');
    }

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
