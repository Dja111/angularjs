import { Component, OnInit } from '@angular/core';
import {ListeService} from "../liste.service";
import {BearbeitungService} from "../bearbeitung.service";
import { Liste} from "../liste";

@Component({
  selector: 'app-bearbeitung',
  templateUrl: './bearbeitung.component.html',
  styleUrls: ['./bearbeitung.component.scss'],
  providers: [BearbeitungService]
})
export class BearbeitungComponent implements OnInit {

  lis1 : Liste;
  lis: Array<any>;

  constructor(private bear : BearbeitungService) { }

  ngOnInit() {
    this.bear.getAll().subscribe( data => {
        this.lis = data;
      }, error => console.log(error)
    );
  }
  ondelet(i: number){
    //console.log(i);
    this.bear.delet(i).subscribe();
  }

  onselet(i: number){
    console.log(i);
    this.bear.select(i).subscribe();

    //rein von Subscribe () => {
    //       // this.lis = data;
    //       console.log("ist gut")
    //       }, error => console.log(error)
    //
  }

  //onput(i:)

  getAll(){
    this.bear.getAll().subscribe( data => {
        this.lis = data;
      }, error => console.log(error)
    );
  }


}
