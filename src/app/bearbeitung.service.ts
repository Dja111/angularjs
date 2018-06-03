import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BearbeitungService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {

    return this.http.get('http://localhost:9009/api/v1/data');

  }

  delet(id : number ){
    return this.http.delete('http://localhost:9009/api/v1/data/'+ id);
  }

  select(id : number){
    return this.http.get('http://localhost:9009/api/v1/data/'+ id);
  }

}
