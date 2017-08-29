import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-reactive-form',
    templateUrl: 'app/reactive_form/reactive_form.template.html'
})
export class ReactiveForm {

    form: FormGroup;
    passwordForm: FormGroup;

    usernameCtrl: FormControl;
    passwordCtrl: FormControl;
    confirmCtrl: FormControl;

    static passwordMatch(group: FormGroup) {
        if (group.controls.password.value == group.controls.confirm.value) {
            return null;
        } else {
            return {matchingError: {key: "someValue"}}
        }
    }

    constructor(fb: FormBuilder) {
        this.usernameCtrl = fb.control('', Validators.required);
        this.passwordCtrl = fb.control('', Validators.required);
        this.confirmCtrl = fb.control('', Validators.required);

        this.passwordForm = fb.group({
                password: this.passwordCtrl,
                confirm: this.confirmCtrl},
            {validator: ReactiveForm.passwordMatch}
        );
        this.form = fb.group({
            username: this.usernameCtrl,
            passwordForm: this.passwordForm
        });
    }



    submit() {
        console.log(this.form);
    }

}