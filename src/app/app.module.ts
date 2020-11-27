import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { DataTablesModule } from 'angular-datatables';
import { AllComponent } from './all/all.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SearchTableComponent } from './search-table/search-table.component';
import { AddComponent } from './add/add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OneComponent } from './one/one.component';


const appRoutes: Routes = [{path: 'AllRessourcesFor', component: AllComponent},
{path: 'Sidebar', component: SidebarComponent},
{path: 'Ajouterressource', component: AddComponent},
{path: 'AllRessourcesFor/:id', component: OneComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    SidebarComponent,
    SearchTableComponent,
    AddComponent,
    OneComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule, DataTablesModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
