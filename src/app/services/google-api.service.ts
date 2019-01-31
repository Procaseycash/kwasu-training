import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {ApiHandlerService} from "./api-handler.service";

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {

  constructor(private apiHandlerService: ApiHandlerService) {
  }

  getGoogleWebsiteIndex(): Observable<string> {
    return this.apiHandlerService.get_('https://www.google.com/', {
      responseType: 'text'
    });
  }
}
