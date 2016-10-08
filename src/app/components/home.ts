import { Component } from '@angular/core';
import { Listing } from "./listing";
import { ProductService } from "../services/product";

@Component({
	selector: 'home',
	templateUrl: '/resources/views/home.html',
	directives : [Listing],
	providers : [ProductService],
	styleUrls : ["resources/stylesheets/home.css"]
})
export class Home {

	people = ["Amit", "Sunil"];

	constructor(ProductService : ProductService)
		{
			
		}
}
