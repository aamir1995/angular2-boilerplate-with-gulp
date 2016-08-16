// Import the native Angular services.
import { Component, OnInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})

export class AppComponent implements OnInit {
    constructor(private titleService: Title) {

    }

    ngOnInit() {

        // set the browser title
        this.titleService.setTitle("ng2 boilerplate with Gulp")
    }
}
