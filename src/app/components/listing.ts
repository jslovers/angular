import { Component, Input } from '@angular/core';

@Component({
	selector: 'listing',
	template: `
        <ul>
            <li (click)="listingClick(people)" *ngFor="let people of peopleListing">{{people}}</li>
            
        </ul>
    `,
	directives : [],
	styleUrls : ["resources/stylesheets/home.css"]
})
export class Listing {

    @Input('listing') peopleListing: [string];
    
    private listingClick(item)
        {
            alert("Item Clicked " + item)
        }

}
