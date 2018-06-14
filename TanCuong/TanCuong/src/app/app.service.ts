import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, of } from 'rxjs'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {
    private greetUrl = 'api/Home';

    // Resolve HTTP using the constructor
    constructor(private _http: Http) { }

    sayHello(): Observable<any> {
      return this._http.get(this.greetUrl).map((response: Response) => {
            return response.text();
        });
    }
}
