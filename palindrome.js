'use strict'

const palindromeChecker = function (sentence){
    const input = sentence.toLowerCase().replace(/\s/g,'').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const result = input.split('').reverse().join('').replace(/\s/g,'').toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    console.log(input);
    console.log(result);
    console.log(input == result);
};

palindromeChecker ('wow');
palindromeChecker ("was it a car or a cat I saw");
palindromeChecker ('a man, a plan, a canal, Panama!');