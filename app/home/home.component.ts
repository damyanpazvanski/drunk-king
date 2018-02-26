import {Component, OnInit, Inject, ViewChild, ElementRef} from "@angular/core";
import { Page } from "ui/page";
import * as dialogs from "ui/dialogs";
import { PanGestureEventData } from "ui/gestures";
import { Image } from "ui/image";
import { AnimationCurve } from "ui/enums";

import { CardService } from '../services/cards/card.service';
import { RuleService } from '../services/rules/rule.service';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    @ViewChild("card") dragImage: ElementRef;
    dragImageItem: Image;
    prevDeltaX: number;
    prevDeltaY: number;

    private cardsCount = 0;
    private currentCardId = 0;

    constructor(private page: Page,
                @Inject(CardService) private CardsService,
                @Inject(RuleService) private RuleService
    ) {
        page.actionBarHidden = true;
        this.change();
    }

    ngOnInit(): void {
        this.cardsCount = this.CardsService.getCount() + 0;
        this.dragImageItem = <Image>this.dragImage.nativeElement;
        this.dragImageItem.translateX = 0;
        this.dragImageItem.translateY = 0;
        this.dragImageItem.scaleX = 1;
        this.dragImageItem.scaleY = 1;
    }

    change() {
        let card = this.CardsService.chooseCard();

        if (card === false) {
            dialogs.alert({
                title: 'Refresh',
                message: 'The deck is empty, redresh the game!',
                okButtonText: "Ok"
            });
            this.currentCardId = 0;
            this.page.css = "#card{display: none! important}";
            return;
        }

        this.currentCardId = card.id;
        let suitIndex = card.suit.index;
        let width = (card.id - 1) * 782 * (-1);
        let height = (suitIndex) * 1050;

        this.page.css = "#card{ width: 300wv; height: 400vh; background: url(~/assets/images/cards.png) " + width + " " + height + ";background-size: 1291% 400%;}";
        this.cardsCount = this.CardsService.getCount() + 0;
    }

    onPan(args: PanGestureEventData) {
        if (args.state === 1) {
            this.prevDeltaX = 0;
            this.prevDeltaY = 0;
        } else if (args.state === 2) {
            this.dragImageItem.translateX += args.deltaX - this.prevDeltaX;
            this.dragImageItem.translateY += args.deltaY - this.prevDeltaY;

            this.prevDeltaX = args.deltaX;
            this.prevDeltaY = args.deltaY;
        } else if (args.state === 3) {
            if (-50 <= args.deltaX && args.deltaX <= 50 && args.deltaY <= 50 && args.deltaY >= -50) {
                this.dragImageItem.animate({
                    translate: { x: 0, y: 0},
                    duration: 300,
                    curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
                });
            } else {
                if (this.dragImageItem.translateX >= 0) {
                    this.prevDeltaX = this.dragImageItem.translateX + 300;
                } else {
                    this.prevDeltaX = this.dragImageItem.translateX - 300;
                }

                if (this.dragImageItem.translateY >= 0) {
                    this.prevDeltaY = this.dragImageItem.translateY + 300;
                } else {
                    this.prevDeltaY = this.dragImageItem.translateX - 300;
                }

                this.dragImageItem.animate({
                    translate: { x: this.prevDeltaX, y: this.prevDeltaY },
                    duration: 300,
                    curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
                }).then(() => {
                    this.change();

                    this.dragImageItem.translateY = 0;
                    this.dragImageItem.translateX = 0;
                    this.prevDeltaX = 0;
                    this.prevDeltaY = 0;
                });
            }
        }
    }

    refresh() {
        let self = this;

        dialogs.confirm({
            title: "Are you sure?",
            message: "Do you really want to start again?",
            okButtonText: "Yes",
            cancelButtonText: "No"
        }).then(function (response) {
            if (response) {
                self.CardsService.refresh();
                self.change();
                self.cardsCount = self.CardsService.getCount() + 0;
            }
        });
    }

    info() {
        let rule = this.RuleService.getRule(this.currentCardId - 1);

        dialogs.alert({
            title: rule['title'],
            message: rule['rule'],
            okButtonText: "Ok"
        });
    }
}
