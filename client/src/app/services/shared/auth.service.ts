import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import * as jwtDecode from 'jwt-decode';

import { AppSettings } from '../../config/app.settings';
import { JWT_TOKEN } from '../../config/constants';

import { IUser, IRegistration} from '../../interfaces';

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
                    // login successful if there's a jwt token in the response
                    if (res.data && res.data.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        this.setToken(JSON.stringify(res.data));
                        //localStorage.setItem(JWT_TOKEN, );
                    }
                    return res;
                }),
                catchError(this.handleError('isValidUser', user))
            );
    };

    register(org: IRegistration): Observable<any> {
        return this.http.post<any>(`${this._baseUrl}/org/register`, JSON.stringify(org), this.httpOptions)
            .pipe(
                tap((res) => console.log(`user register=${res}`)),
                catchError(this.handleError<any>('register'))
            );
    }

    getToken(): string {
        return localStorage.getItem(JWT_TOKEN);
    }

    setToken(token: string): void {
        localStorage.setItem(JWT_TOKEN, token);
    }

    getTokenExpirationDate(token: string): Date {
        const decoded = jwtDecode(token);

        if (decoded.exp === undefined) return null;

        const date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    isTokenExpired(token?: string): boolean {
        if (!token) token = this.getToken();
        if (!token) return true;

        const date = this.getTokenExpirationDate(token);
        if (date === undefined) return false;
        return !(date.valueOf() > new Date().valueOf());
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
        localStorage.removeItem(JWT_TOKEN);
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
