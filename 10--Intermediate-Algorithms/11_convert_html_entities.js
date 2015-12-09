/*
 * Free Code Camp
 * 10 - 11 - Convert HTML Entities
 *
 * Created by Jeff Stautz, 2015-12-08
 *
 * Instructions: 
 *  Convert the characters "&", "<", ">", '"' (double quote),
 *  and "'" (apostrophe), in a string to their corresponding HTML entities.
 */

function convert(str) {
    str = spliceHtmlEntity("&", "&amp;", str);
    str = spliceHtmlEntity("\"", "&quot;", str);
    str = spliceHtmlEntity("\'", "&apos;", str);
    str = spliceHtmlEntity("<", "&lt;", str);
    str = spliceHtmlEntity(">", "&gt;", str);
    return str;
}

function spliceHtmlEntity(char, entity, str) {
    var newString = "";
    var strArray = str.split(char);
    if (strArray.length > 1) {
        for (i = 0; i < strArray.length - 1; i++) {
            newString += strArray[i] + entity;
        }
        newString += strArray[strArray.length - 1];
        return newString;
    }
    return str;
}

convert("Dolce & Gabbana");
