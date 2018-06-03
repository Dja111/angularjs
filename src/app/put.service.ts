import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Neueeintrag} from "./neueeintrag";

@Injectable()
export class PutService {

  constructor(private http: HttpClient) {
  }

  onPutdata(linkdat: Neueeintrag) {

    this.http.put('http://localhost:9009/api/v1/data', linkdat).subscribe(() => {
        console.log('alles gut');
      },
      (error) => {
        console.log('error');
      });
  }
}
