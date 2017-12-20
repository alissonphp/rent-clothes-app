import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class UsersService {

private headers
private options

  constructor(private http: Http, private localStorage: LocalStorageService) { }

  list(): Observable<any> {
    return this.http.get('users')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  role(roleid: number): Observable<any> {
    return this.http.get('users/role/' + roleid)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  save(user: any): Observable<any> {
    return this.http.post('users', user)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(user: any): Observable<any> {
    return this.http.put('users/' + user.id, user)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  profile(user: any): Observable<any> {
    return this.http.post('users/profile', user, new RequestOptions({
      headers: new Headers({
        'Authorization': 'Bearer ' + this.localStorage.retrieve('token')
      })
    }))
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  show(id: number): Observable<any> {
    return this.http.get('users/show/' + id)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  current(): Observable<any> {
    return this.http.get('users/active')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(id: number): any {
    return this.http.delete('users/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  goalSeller(): Observable<any> {
    return this.http.get('users/current/seller/goals')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
