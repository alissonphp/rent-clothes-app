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

  search(term: any): Observable<any> {
    return this.http.post('items/item/search', {s: term})
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  save(data): Observable<any> {
    return this.http.post('items/item', data)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(data): Observable<any> {
    return this.http.put('items/item/' + data.id, data)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  saveSize(size): Observable<any> {
    return this.http.post('items/size', size)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  updateSize(size): Observable<any> {
    return this.http.put('items/size/' + size.id, size)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteSize(id: number): any {
    return this.http.delete('items/size/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(id: number): any {
    return this.http.delete('items/item/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deleteImg(id: number): any {
    return this.http.delete('items/item/images/delete/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  show(id: number): Observable<any> {
    return this.http.get('items/item/' + id)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  news(): Observable<any> {
    return this.http.get('items/news')
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
