import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {

  constructor(private http: HttpClient) {
  }

  post(url: string, request: any, options?: object): Observable<any> {
    return this.http.post(url, request, options);
  }

  get_(url: string, options?: object): Observable<any> {
    console.log({options});
    return this.http.get(url, options);
  }

  get(url: string, request: object, options?: object): Observable<any> {
    return this.http.get(url, options);
  }

  put(url: string, request: any, options?: object): Observable<any> {
    return this.http.put(url, request, options);
  }

  patch(url: string, request: any, options?: object): Observable<any> {
    return this.http.patch(url, request, options);
  }

  delete_(url: string, options?: object): Observable<any> {
    return this.delete(url, null, options);
  }

  delete(url: string, request: any, options?: object): Observable<any> {
    return this.http.delete(url, options);
  }
}
