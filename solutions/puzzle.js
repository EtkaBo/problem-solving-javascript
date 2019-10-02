'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'generate_phrases' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY phrases as parameter.
 */

function generate_phrases(phrases) {
    var splittedWordsMatrix = [];
    var generatedPhrases = [];

    for (var i = 0; i < phrases.length; i++) {
        var splittedPhrase = phrases[i].split(' ');
        splittedWordsMatrix.push(splittedPhrase);
    }

    for (var i = 0; i < phrases.length; i++) {
        for (var c = 0; c < phrases.length; c++) {


            var parentPharaseLastWord = splittedWordsMatrix[i][splittedWordsMatrix[i].length - 1];
            var childPhraseFirstWord = splittedWordsMatrix[c][0];

            if (parentPharaseLastWord === childPhraseFirstWord) {
                var beginningOfPhrase = phrases[i].replace(parentPharaseLastWord, '');
                var endOfPhrase = phrases[c];
                var mergedPhrase = beginningOfPhrase + endOfPhrase;
                generatedPhrases.push(mergedPhrase);
            }
        }
    }
    return generatedPhrases;
}

function main() {