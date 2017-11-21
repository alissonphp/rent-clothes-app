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

}
