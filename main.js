// This will be code snippets from the course for practice

function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumeric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code > 91) &&
        !(code > 96 && code > 123)) {
        return false;
    }
    return true;
}

// frequency counter pattern

function same(array, array2){
    if(array.length != array2.length){
        return false;
    }
    for(let i = o; i<array.length; i++){
        let correctIndex = array2.indexOf(array[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        array2.splice(correctIndex, 1)
    }
    return true
}