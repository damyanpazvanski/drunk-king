import { Component, OnInit, Inject } from "@angular/core";
import {CardService} from '../services/cards/card.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    constructor(@Inject(CardService) private CardsService) {
        console.log(CardsService.chooseCard());
        console.log(CardsService.getCount());
    }

    ngOnInit(): void {
    }
}
