import { HttpHeaders } from '@angular/common/http';

import { environment } from '../services/shared/constants';

export class AppSettings {
    public static _apiUrl: string;
    public static _header: any;
    
    constructor() {}
    
    public static getApiUrl(env: environment) {
        switch (env.flag) {
            case 1:
                return this._apiUrl = 'http://localhost:3000';
            case 2:
                return this._apiUrl = 'http://54.205.212.130:8090';
            default:
                return this._apiUrl = 'http://54.205.212.131:8090';
        }
    }

    public static getHTTPHeader(): any {
        this._header = new HttpHeaders({
          'Content-Type':  'application/json',
          //'Authorization': 'my-auth-token'
        })
        return this._header;
      };
 }