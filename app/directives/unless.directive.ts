import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
    selector: '[unless]'
})
export class UnlessDirective {

    constructor(private template: TemplateRef<any>,
                private container: ViewContainerRef) {

    }

    @Input()
    set unless(cond: boolean) {
        if (cond) {
            this.container.clear();
        } else {
            this.container.createEmbeddedView(this.template);
        }
    }
}