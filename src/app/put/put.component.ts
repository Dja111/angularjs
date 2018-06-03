import { Component, OnInit } from '@angular/core';
import { NgForm} from "@angular/forms";
import {PutService} from "../put.service";
import {Neueeintrag} from "../neueeintrag";

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.scss'],
  providers:[PutService]
})
export class PutComponent implements OnInit {

  constructor(private putservice : PutService) { }

  ngOnInit() {
  }

  onPutofdate(form: NgForm){
    const link = form.value['link'];
    const description = form.value['description'];

    var links:  Neueeintrag = new Neueeintrag()

    links.description = description;
    links.link = link;
    this.putservice.onPutdata(links);
  }

}
