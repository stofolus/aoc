"use strict";
const crypto = require('crypto');
const readline = require('readline');
const input = require('./5-input');

class MovieDecrypt {
    constructor(input) {
        this.input = input;
    };

    decrypt() {
        console.log('Trying to movie decrypt. Stand by');
        let decryptedString = [];
        for(let i = 0; decryptedString.join('').length < 8; i++) {
            const hash = crypto.createHash('md5').update(this.input + i).digest('hex');
            if(hash.indexOf('00000') === 0 && !isNaN(hash[5]) && parseInt(hash[5], 10) < 8 && decryptedString[hash[5]] === undefined) {
                decryptedString[hash[5]] = hash[6];
            }
        }
        return decryptedString.join('');
    };
};

const movieDecrypt = new MovieDecrypt(input);
console.log(movieDecrypt.decrypt());