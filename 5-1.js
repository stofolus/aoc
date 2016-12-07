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
        let decryptedString = '';
        for(let i = 0; decryptedString.length < 8; i++) {
            const hash = crypto.createHash('md5').update(this.input + i).digest('hex');
            if(hash.indexOf('00000') === 0) {
                decryptedString += hash[5];
            }
        }
        return decryptedString;
    };
};

const movieDecrypt = new MovieDecrypt(input);
console.log(movieDecrypt.decrypt());