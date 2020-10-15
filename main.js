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
// works but not the most effective solution
function same(array, array2) {
    if (array.length != array2.length) {
        return false;
    }
    for (let i = o; i < array.length; i++) {
        let correctIndex = array2.indexOf(array[i] ** 2)
        if (correctIndex === -1) {
            return false;
        }
        array2.splice(correctIndex, 1)
    }
    return true
}

function same2(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1) {
        frequncyCounter1[val] = (freuquncyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequncyCounter2[val] = (freuquncyCounter2[val] || 0) + 1
    }
    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequncyCOunter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

//Anagrams
function validAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false
    }
    let lookup = {}

    for (let i = 0; i < first.length; i++) {
        let letter = first[i]
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i]

        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true

}