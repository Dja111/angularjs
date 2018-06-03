import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
// import { FormsModule,FormGroup} from '@angular/forms';
import { Neueeintrag } from "../neueeintrag";
import { EintragService } from "../eintrag.service";

@Component({
  selector: "app-eintrag",
  templateUrl: "./eintrag.component.html",
  styleUrls: ["./eintrag.component.scss"],
  providers: [EintragService]
})
export class EintragComponent implements OnInit {
  constructor(private eintrageservice: EintragService) {}

  ngOnInit() {}
  onSubmit(form: NgForm) {
    const link = form.value["link"];
    const description = form.value["description"];

    var links: Neueeintrag = new Neueeintrag();

    links.description = description;
    links.link = link;

    if (confirm("Speichern ? ")) {
      this.eintrageservice.onSubmitForm(links);
    }
  }
}
