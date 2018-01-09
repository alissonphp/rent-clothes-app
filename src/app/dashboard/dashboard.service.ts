import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  constructor(private http: Http) { }

  home(): Observable<any> {
    return this.http.get('dashboards/admin')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  graph(): Observable<any> {
    return this.http.get('goals/graphic')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
