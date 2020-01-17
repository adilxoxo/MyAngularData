import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeChildComponent } from './home-child/home-child.component';
import { UserTableComponent } from './user-table/user-table.component';
import { TrackService } from './track.service';
import { SearchComponent } from './search/search.component';
import { HttpcComponent } from './httpc/httpc.component';

const appRoutes: Routes=[
  {path: "", component:HomeComponent},
  {path: "search", component:SearchComponent},
  {path: "usertable", component:UserTableComponent},
  {path: "httpC", component:HttpcComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeChildComponent,
    UserTableComponent,
    SearchComponent,
    HttpcComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes     
    ),
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    DataTablesModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [TrackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
