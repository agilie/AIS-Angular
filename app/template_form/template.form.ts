import {Component, Directive} from "@angular/core";
import {AbstractControl, NG_VALIDATORS, Validator} from "@angular/forms";

@Component({
    selector: 'app-template-form',
    templateUrl: 'app/template_form/template_form.html'
})
export class TemplateForm {

    submit(form) {
        console.log('---- form ----');
        console.log(form);
    }

}

@Directive({
    selector: '[phone]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: PhoneValidator, multi: true}
    ]
})
export class PhoneValidator implements Validator{

    validate(control: AbstractControl) {
        if ((control.value || '').match(/\+380\d{9}$/)) {
            return null;
        } else {
            return {phoneInvalid: {message: 'Phone Should Be Correct!!!'}}
        }

    }
}