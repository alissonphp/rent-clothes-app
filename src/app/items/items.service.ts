import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  all(): Observable<any> {
    return this.http.get('items/item')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  save(data): Observable<any> {
    return this.http.post('items/item', data)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(id: number): Observable<any> {
    return this.http.delete('items/'+id)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
