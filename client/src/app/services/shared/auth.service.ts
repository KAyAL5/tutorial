import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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
        return new Observable(observer => {
            setTimeout(() => {
              let result = { data: {'isexist': true}};
              observer.next(result);
              observer.complete();
            }, 2000)
          })
    };

    logout = () => {
        localStorage.removeItem('currentUser');
    }

}
