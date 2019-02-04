//Problem Link:
//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function twoStrings(s1, s2) {

    let s1Letters = s1.split('');

    for (let sChar in s1Letters) {

        if (s2.includes(s1Letters[sChar])) {
            return 'YES';
        }

    }

    return 'NO';

}
