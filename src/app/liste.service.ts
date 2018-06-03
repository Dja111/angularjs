import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
// ({
//   providedIn: 'root'
// })
export class ListeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return this.http.get('http://localhost:9009/api/v1/data');

  }
}
