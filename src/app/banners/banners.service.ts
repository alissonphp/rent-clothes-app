import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class BannersService {

  constructor(private http: Http) { }

  list(): Observable<any> {
    return this.http.get('banners')
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  save(data): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post('banners/', data, {headers: headers})
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  show(id: number): Observable<any> {
    return this.http.get('banners/' + id)
     .map((res: Response) => res.json())
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  update(data): Observable<any> {
    return this.http.put('banners/' + data.id, data)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  delete(id: number): any {
    return this.http.delete('banners/' + id)
    .map((res: Response) => res)
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
