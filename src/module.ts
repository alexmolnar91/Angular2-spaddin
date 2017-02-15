// module.ts
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppComponent} from './app/app.component';
import {ReactiveFormComponent} from './app/reactive-form.component';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, ReactiveFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}