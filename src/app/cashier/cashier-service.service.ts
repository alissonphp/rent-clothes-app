import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CashierService {

  constructor(private http: Http) { }

  filter(filter: any): Observable<any> {
    return this.http.post('cashier/filter', filter)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

}
