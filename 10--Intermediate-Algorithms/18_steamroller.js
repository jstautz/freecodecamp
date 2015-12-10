/*
 * Free Code Camp
 * 10 - 18 - Steamroller
 *
 * Created by Jeff Stautz, 2015-12-09
 *
 * Instructions:
 *  Flatten a nested array. You must account for varying levels of nesting.
 * 
 */

function steamroller(arr) {
    var collection = [];
    collection = recurseAndCollect(arr, collection);
    return collection;
}

function recurseAndCollect(item, collection) {
    if (!item.isArray) {
        collection.push(item);
        return collection;
    } else {
        for (i = 0; i < item.length; i++) {
            recurseAndCollect(item[i], collection);
        }
    }
}

steamroller([1, [2], [3, [[4]]]]);
