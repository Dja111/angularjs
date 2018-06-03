import { Component, OnInit } from "@angular/core";
import { ListeService } from "../liste.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  providers: [ListeService]
})
export class ListComponent implements OnInit {
  lisste: Array<any>;

  constructor(private lisservice: ListeService) {}

  ngOnInit() {
    this.lisservice.getAll().subscribe(
      data => {
        this.lisste = data;
      },
      error => console.log(error)
    );
  }
}
