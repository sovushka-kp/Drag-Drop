import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';

import {DragDropModule} from "@angular/cdk/drag-drop";
import { AddFormComponent } from './pages/main-view/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
