import {WelcomeService} from './app.service';
import { Component, ViewEncapsulation, OnInit} from '@angular/core';
import '../../app/css/styles.css';
import {ReactiveFormComponent} from './reactive-form.component';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'my-app',
  template: '<h1> {{ message | async}} </h1><reactive-form-comp></reactive-form-comp>',
  styles: [require('./app.component.css')],
  providers : [WelcomeService],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent { 
    message: Observable<string>;

	constructor(ws:WelcomeService)
	{
		this.message = ws.getMessage();
	}
}
