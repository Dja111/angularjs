import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule} from '@angular/common/http';
import { BearbeitungComponent } from './bearbeitung/bearbeitung.component';
import { EintragComponent } from './eintrag/eintrag.component';
import { PutComponent } from './put/put.component';
import {RouterModule, Routes} from "@angular/router";
// import {DetailviewComponent} from "../../../versuch/src/app/detailview/detailview.component";
// import {WebsitelistComponent} from "../../../versuch/src/app/websitelist/websitelist.component";
// import {NotFoundComponent} from "../../../versuch/src/app/not-found/not-found.component";
// import {InfosComponent} from "../../../versuch/src/app/infos/infos.component";
import { HeaderComponent } from './header/header.component';


const appRoutes: Routes = [
  {path:'list',component :ListComponent},
  {path:'list',component:ListComponent},
  {path:'eintrag', component:EintragComponent},
  {path:'putdaten', component:PutComponent},
  {path:'bearbeitung', component:BearbeitungComponent}
  /*{path:'not-found',component:NotFoundComponent},
  {path:'**', redirectTo:'/not-found'}*/
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    BearbeitungComponent,
    EintragComponent,
    PutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
 RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
