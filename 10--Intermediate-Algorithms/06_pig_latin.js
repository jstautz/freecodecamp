/*
 * Free Code Camp
 * 10 - 06 - Pig latin
 *
 * Created by Jeff Stautz, 2015-12-07
 *
 * Instructions: 
 *  Translate the provided string to pig latin.
 *  Pig Latin takes the first consonant (or consonant cluster) of an English word,
 *  moves it to the end of the word and suffixes an "ay".
 *  If a word begins with a vowel you just add "way" to the end.
 */

function translate(str) {
    var consonants;
    if (isVowel(str[0])) {
        return str + "way";
    } else {
        consonants = str[0];
        str = str.slice(1);
        if (!isVowel(str[0])) {
            consonants += str[0];
            str = str.slice(1);
        }
        return str + consonants + "ay";
    }
}

function isVowel(char) {
    return (char === 'a' || char === 'e' || char === 'i' ||
            char === 'o' || char === 'u' || char === 'y');
}


translate("consonant");

