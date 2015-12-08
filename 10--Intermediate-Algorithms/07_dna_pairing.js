/*
 * Free Code Camp
 * 09 - 07 - DNA Pairing
 *
 * Created by Jeff Stautz, 2015-12-07
 *
 * Instructions: 
 *  The DNA strand is missing the pairing element.
 *  Take each character, get its pair, and return the results as a 2d array.
 *  Base pairs are a pair of AT and CG. Match the missing element to the provided character.
 *  Return the provided character as the first element in each array.
 *  For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
 *  The character and its pair are paired up in an array, and all the arrays
 *  a re grouped into one encapsulating array.
 */

function pair(str) {
    var letterArray = str.split("");
    var pairArray = [];
    for (i = 0; i < letterArray.length; i++) {
        pairArray[i] = [];
        pairArray[i].push(letterArray[i]);
        pairArray[i].push(getMatchingBase(letterArray[i]));
    }
    return pairArray;
}

function getMatchingBase(char) {
    switch (char) {
    case "C":
        return "G";
    case "G":
        return "C";
    case "T":
        return "A";
    case "A":
        return "T";
    }
}

pair("GCG");
