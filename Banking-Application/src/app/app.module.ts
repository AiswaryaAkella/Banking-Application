import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { FormComponentComponent } from './components/form-component/form-component.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    FormComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
