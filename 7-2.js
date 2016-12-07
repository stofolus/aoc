"use strict";
const input = require('./7-input');

class SSLChecker {
    constructor(input) {
        this.input = input;
    };

    addressesWithSSLSupport() {
        return this.input.reduce((acc, curr) => {
            const strings = curr.replace(/]/g, '[').split('[');
            const outsideBrackets = strings.filter((value, index) => {
                return index % 2 === 0;
            });
            const betweenBrackets = strings.filter((value, index) => {
                return index % 2 === 1;
            });
            return acc + (this.hasSSLAnnotation(outsideBrackets, betweenBrackets) ? 1 : 0);
        }, 0);
    };

    hasSSLAnnotation(insideArray, outsideArray) {
        for (let string of insideArray) {
            let aba = [];
            for (let letter of string.split('')) {
                aba.push(letter);
                if (aba.length === 3) {
                    if (aba[0] === aba[2] && aba[0] !== aba[1]) {
                        const hasReverse = outsideArray.find(value => {
                            return value.includes(aba[1] + aba[0] + aba[1]);
                        });
                        if(hasReverse) {
                            return true;
                        }
                    }
                    aba = aba.slice(1);
                }
            }
        }
    }
};

const sslChecker = new SSLChecker(input);
console.log(sslChecker.addressesWithSSLSupport());