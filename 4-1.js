"use strict";

class Sto {
    constructor(input) {
        this.input = input;
    }

    calculateAnswer() {
        return this.input.reduce((acc, row) => {
            let checksum = row.match(/\[(.*)\]/).pop()
            let name = row.replace(`[${checksum}]`, '').split('-');
            let sectionId = parseInt(name.pop(), 10);
            let countedLetters = this.countCharacters(name.join(''));
            countedLetters = countedLetters.sort(this.deepSort);
            return acc + (this.objectArrayToString(countedLetters).indexOf(checksum) === 0 ? sectionId : 0);
        }, 0);
    }

    countCharacters(string) {
        const answer = {};
        string.split('').forEach(value => {
            answer[value] = answer[value] + 1 || 1; 
        });
        return this.objectToArray(answer);
    }

    deepSort(a, b) {
        let aKey = Object.keys(a)[0];
        let bKey = Object.keys(b)[0]; 
        if (a[aKey] < b[bKey]) {
            return 1;
        }
        if (a[aKey] > b[bKey]) {
            return -1;
        }
        if (aKey < bKey) {
            return -1;
        }
        if (aKey > bKey) {
            return 1;
        }
        return 0;
    }

    objectToArray(obj) {
        let array = [];
        for(let key of Object.keys(obj)) {
            var tmpObj = {};
            tmpObj[key] = obj[key];
            array.push(tmpObj);
        }
        return array;
    }

    objectArrayToString(array) {
        return array.reduce((acc, curr) => {
            return acc + Object.keys(curr)[0];
        }, '');
    }
};

const sto = new Sto(require('./4-input'));
//sto.calculateAnswer()
console.log(sto.calculateAnswer());