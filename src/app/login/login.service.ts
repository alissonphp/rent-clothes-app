import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ngx-webstorage';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(user): Observable<any> {
    return this.http.post('oauth/login/credentials', user)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  remember(user): Observable<any> {
    return this.http.post('oauth/remember-password', user)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  token(token): Observable<any> {
    return this.http.post('oauth/check-token', {token: token})
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  reset(data): Observable<any> {
    return this.http.post('oauth/reset-password', data)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
