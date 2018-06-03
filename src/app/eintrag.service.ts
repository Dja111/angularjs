import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Neueeintrag} from "./neueeintrag";


@Injectable()

export class EintragService {

  constructor(private http: HttpClient) { }


  onSubmitForm( linkdat : Neueeintrag) {

    this.http.post('http://localhost:9009/api/v1/data', linkdat).subscribe( () => {
        console.log('alles gut');
      },
      (error) => {
        console.log('error');
      });

  }

  onPut( linkdat : Neueeintrag) {

    this.http.put('http://localhost:9009/api/v1/data', linkdat).subscribe( () => {
        console.log('alles gut');
      },
      (error) => {
        console.log('error');
      });

  }
}
