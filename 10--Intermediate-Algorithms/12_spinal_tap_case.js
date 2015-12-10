/*
 * Free Code Camp
 * 10 - 12 - Spinal Tap Case
 *
 * Created by Jeff Stautz, 2015-12-09
 *
 * Instructions: 
 *  Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
    // Replace camelCase with dashes between words
    var regExCamelCase = new RegExp("([a-z])([A-Z])", "g");
    str = str.replace(regExCamelCase, "$1-$2");
    // Replace spaces and _ with dashes
    var regExDashes = new RegExp("[ \_]", "g");
    str = str.replace(regExDashes, "-");
    // Lowercase it
    str = str.toLowerCase();
    return str;
}

spinalCase('This Is Spinal Tap');
