import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>Witaj, {{ name }}!</h1>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}