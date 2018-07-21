import {Component} from '@angular/core';

@Component({
    selector: 'app.bottom_app',
    template: `<h2>This is {{ name }} component</h2>`
})
export class HelloWorldComponent {
    name: string;

    constructor() {
        this.name = 'ES5';
    }
}