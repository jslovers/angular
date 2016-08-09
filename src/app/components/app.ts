import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
	moduleId: module.id,
	selector: 'app-root',
	templateUrl: '/resources/views/app.component.html',
	directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
		title = 'app works!';
}
