 import {Observable} from 'rxjs/Observable'
 import {Observer} from 'rxjs/Observer'

 export class WelcomeService {

	constructor(){
	}

     getMessage(): Observable<string> {
         return Observable.create(function(observer) {
             this.ctx = new SP.ClientContext.get_current();
             this.user = this.ctx.get_web().get_currentUser();
             this.ctx.load(this.user);
             this.ctx.executeQueryAsync(
                 Function.createDelegate(this, function() {

                     observer.next("Welcome, " + this.user.get_title() + "!");

                 }),

                 Function.createDelegate(this, function (sender, args) {

                     observer.error(args.get_message());

                 }));

         });
     }
 }