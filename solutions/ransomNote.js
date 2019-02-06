
// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {

    let dict = {};

    var magazineWords = magazine.split(' ');
    var noteWords = note.split(' ');


    for (var i = 0; i < magazineWords.length; i++) { //push to hashMap
        dict[magazineWords[i]] = 1;
    }

    for(var i = 0; i < noteWords.length; i++) {
        if (dict[noteWords[i]] === undefined) {
            return 'No';
        }
    }
    return 'Yes';
}

