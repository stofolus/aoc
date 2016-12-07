"use strict";
const input = require('./6-input');

class RepetitionCracker {
    constructor(input) {
        this.input = input;
    };

    crack() {
        const countedLetters = [];
        this.input.forEach(word => {
            word.split('').forEach((letter, index) => {
                if(!countedLetters[index]) {
                    countedLetters[index] = {};
                }
                countedLetters[index][letter] = countedLetters[index][letter] + 1 || 1;
            });
        });
        return countedLetters.reduce((acc, curr) => {
            return acc + this.getleastUsed(curr);
        }, '');
    };

    getleastUsed(obj) {
        const leastUsed = { letter: '', frequency: 0};
        for(let key of Object.keys(obj)) {
            if(leastUsed.frequency === 0 || obj[key] < leastUsed.frequency) {
                leastUsed.letter = key;
                leastUsed.frequency = obj[key];
            }
        }
        return leastUsed.letter;
    };
};

const repetitionCracker = new RepetitionCracker(input);
console.log(repetitionCracker.crack());