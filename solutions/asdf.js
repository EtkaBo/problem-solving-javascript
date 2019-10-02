
// function generate_phrases(phrases) {

//     var dict = {};

//     var ar = [];

//     for(var i =0; i< phrases.length; i++) {
//         var splittedPhrase = phrase[i].split(' ');
        
//         dict[splittedPhrase[splittedPhrase.length -1]] = `${i}end`
//         dict[splittedPhrase[0]] = `${i}start`;
//     }


//     for(var i = 0; i< phrases.length; i++) {
//         var splittedPhrase = phrase[i].split(' ');

//         if(dict[splittedPhrase[0]] !== undefined) {

//             if(dict[splittedPhrase[0]].includes('end')){

//                 var index = dict[splittedPhrase[0]].replace('end', '');

//                 var beginningOfPhrase = phrases[i].replace(splittedPhrase[0], '');
//                 var endOfPhrase = phrases[parseInt(index)];
//                 var mergedPhrase = beginningOfPhrase + endOfPhrase;
//                 ar.push(mergedPhrase);
//             }
//         }
        
//         if(dict[splittedPhrase[splittedPhrase.length -1]] !== undefined) {


//         }
//     }
// }

