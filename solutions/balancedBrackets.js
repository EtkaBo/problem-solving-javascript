//Problem Link:
//https://www.hackerrank.com/challenges/balanced-brackets/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=stacks-queues



// Complete the isBalanced function below.

//note: below method doesn't work with second condition:
// function isBalanced(s) {

//     var eachBracket = s.split('');

//     var dict = {};

//     for (var i = 0; i < eachBracket.length; i++) {

//         dict[eachBracket[i]] = dict[eachBracket[i]] === undefined ? 1 : dict[eachBracket[i]]++;
//     }

//     if (dict['['] != dict[']'] ||
//         dict['('] != dict[')'] ||
//         dict['{'] != dict['}']) {

//         return 'NO';
//     }

//     return 'YES';

// }




// Complete the isBalanced function below.
function isBalanced(s) {


    while (s.length > 0) {

        var tempS = s;

        s = s.replace('{}', '');
        s = s.replace('[]', '');
        s = s.replace('()', '');

        if (s === tempS) {
            return 'NO';
        }
    }
    return 'YES';
}
