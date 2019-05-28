import { Component,OnChanges } from "@angular/core";
import { NgOnChangesFeature } from "@angular/core/src/render3";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent() implements OnChanges{
    rating: number=4;
    starWidth: number;

    ngOnChanges(): void{
        this.starWidth = this.rating*75/4;
    }
}