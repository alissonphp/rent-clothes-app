import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  list(): Observable<any> {
    return this.http.get('users')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  role(roleid: number): Observable<any> {
    return this.http.get('users/role/'+roleid)
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

  show(id: number): Observable<any> {
    return this.http.get('users/' + id)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(id: number): any {
    return this.http.delete('users/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
