import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  postLogin(user): Observable<any> {
    return this.http.post(environment.api + 'v1/oauth/login/credentials', user)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
