//Problem Link:
//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function twoStringsBruteForce(s1, s2) {

    let s1Letters = s1.split('');

    for (let sChar in s1Letters) {

        if (s2.includes(s1Letters[sChar])) {
            return 'YES';
        }

    }

    return 'NO';

}

//Hash map solution
function twoStrings(s1, s2) {

    let s1Letters = s1.split('');
    let s2Letters = s2.split('');

    let dict = {};

    for(var s1Char in s1Letters) {
        dict[s1Letters[s1Char]] = 1;
    }

    for (let s2Char in s2Letters) {

        if(dict[s2Letters[s2Char]] === 1) {
            return 'YES'
        }
    }

    return 'NO';

}




