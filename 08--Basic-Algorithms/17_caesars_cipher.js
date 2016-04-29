/*
 * Free Code Camp
 * 08 - 17 - Caesar's Cipher
 *
 * Created by Jeff Stautz, 2016-04-29
 *
 * Instructions:
 *  Write a function which takes a ROT13 encoded string as input and returns a decoded string.
 *  All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
 */

function rot13(str) { // LBH QVQ VG!
  
    var decrypted = [];
    var charCode = 0;
    var alphabetStart = 65;
    var alphabetEnd = 90;
    var shiftValue = 13;
    
    for(i = 0; i < str.length; i++) {
        charCode = str.charCodeAt(i);
        if (charCode > alphabetStart - 1) {
            charCode = charCode + shiftValue;
            if (charCode > alphabetEnd) {
                charCode = charCode - alphabetEnd + alphabetStart - 1;
            }
        }
        decrypted[i] = String.fromCharCode(charCode);
    }
    
  return decrypted.join("");
}

// Change the inputs below to test
rot13("NOP");
