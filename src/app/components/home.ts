import { Component } from '@angular/core';
import { ProductList } from './product-list';

@Component({
	selector: 'home',
	templateUrl: '/resources/views/home.html',
	directives : [ProductList],
	styleUrls : ["resources/stylesheets/home.css"]
})
export class Home {
	
}
