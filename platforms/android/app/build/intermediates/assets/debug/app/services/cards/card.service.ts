import { Injectable } from '@angular/core';
import cards from './data';

@Injectable()
export class CardService {
    private deck = {};
    private usedCards = [];
    private suits = [];
    private count = 0;

    constructor() {
        this.suits = ['H', 'S', 'C', 'D'];
        this.deck[this.suits[0]] = cards.cards;
        this.deck[this.suits[1]] = cards.cards;
        this.deck[this.suits[2]] = cards.cards;
        this.deck[this.suits[3]] = cards.cards;
    }

    chooseCard() {
        return this.searchCard(Math.floor(Math.random() * 52), 1);
    }

    refresh() {
        this.usedCards = [];
    }

    getCount() {
        if (this.count === 0) {
            for (let suit in this.deck) {
                this.count += this.deck[suit].length;
            }
        }

        return this.count - this.usedCards.length;
    }

    private searchCard(cardIndex, times) {
        if (times > 2 || cardIndex > 51) {
            return false;
        } else if (cardIndex < 0) {
            return this.searchCard(51, ++times);
        } if (this.usedCards.includes(cardIndex)) {
            return this.searchCard(cardIndex - 1, times);
        }

        let suitIndex = Math.floor(cardIndex / 13);
        let index = cardIndex - (suitIndex * 13);

        let card = this.deck[this.suits[suitIndex]][index];

        card['suit'] = this.suits[suitIndex];
        this.usedCards.push(cardIndex);

        return card;
    }
}
