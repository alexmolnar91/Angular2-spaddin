import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
	selector: "reactive-form-comp",
	template: require('./reactive-form.component.html')
})

export class ReactiveFormComponent{

form: FormGroup;

constructor(public fb:FormBuilder){
	this.form = this.fb.group({
		title: '',
		description: ''
	});
}

save(){
	
	var clientContext = new SP.ClientContext.get_current();
    var oList = clientContext.get_web().get_lists().getByTitle('MoviesList');

	var itemCreateInfo = new SP.ListItemCreationInformation();
    var oListItem = oList.addItem(itemCreateInfo);
        
    oListItem.set_item('Title', this.form.value['title']);
    oListItem.set_item('Description1', this.form.value['description']);
        
    oListItem.update();

	clientContext.load(oListItem);
        
    clientContext.executeQueryAsync(
                 Function.createDelegate(this, function() {
					alert('Item created: ' + oListItem.get_id());
                 }),

                 Function.createDelegate(this, function (sender, args) {

				 alert('Request failed. ' + args.get_message() + 
					'\n' + args.get_stackTrace());
                 }));

		this.form.reset()

	//console.log(this.form.value['title']);
}

}