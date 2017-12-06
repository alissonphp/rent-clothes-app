import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  list(): Observable<any> {
    return this.http.get('orders')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  sellers(): Observable<any> {
    return this.http.get('orders/sellers')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  pay(data: any): Observable<any> {
    return this.http.post('orders/payment', data)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  }

  save(data: any): Observable<any> {
    return this.http.post('orders', data)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  show(id: number): Observable<any> {
    return this.http.get('orders/' + id)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  status(id: number, status: string): Observable<any> {
    return this.http.get('orders/status/' + id + '/' + status)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  itemsituation(id: number, situation: number): Observable<any> {
    return this.http.get('orders/items-situation/' + id + '/' + situation)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(id: number): any {
    return this.http.delete('orders/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
