import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  postLogin(user): Observable<any> {
    return this.http.get('v1/oauth/test')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
