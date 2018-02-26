import { Injectable } from '@angular/core';
import rules from './data';

@Injectable()
export class RuleService {
    private rules = {};

    constructor() {
        this.rules = rules.rules;
    }

    getRule(id) {
        return this.rules[id];
    }
}
