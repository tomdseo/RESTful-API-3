import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  constructor(private _http: HttpClient) {
  }

  getTasks() {
    return this._http.get('/tasks');
  }

  getDescription(id) {
    return this._http.get('/tasks/'+id);
  }

}

