"use strict";
const input = require('./7-input');

class TLSChecker {
    constructor(input) {
        this.input = input;
    };

    addressesWithTLSSupport() {
        return this.input.reduce((acc, curr) => {
            const strings = curr.replace(/]/g, '[').split('[');
            const outsideBrackets = strings.filter((value, index) => {
                return index % 2 === 0;
            });
            const betweenBrackets = strings.filter((value, index) => {
                return index % 2 === 1;
            });
            return acc + (!this.hasTLSAnnotation(betweenBrackets) && this.hasTLSAnnotation(outsideBrackets, true) ? 1 : 0);
        }, 0);
    };

    hasTLSAnnotation(stringArray) {
        for (let string of stringArray) {
            let abba = [];
            for (let letter of string.split('')) {
                abba.push(letter);
                if (abba.length === 4) {
                    if (abba[0] === abba[3] && abba[1] === abba[2] && abba[0] !== abba[1]) {
                        return true;
                    }
                    abba = abba.slice(1);
                }
            }
        }
        return false;
    }
};

const tlsChecker = new TLSChecker(input);
console.log(tlsChecker.addressesWithTLSSupport());