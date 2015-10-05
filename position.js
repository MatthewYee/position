/**
 * Created by MGY on 9/23/2015.
 */
// 1 given an array we give the index back with position of it in the array

function pos(list, target){
    var cursor = 0;
    while(list[cursor] <= target && cursor < list.length)
    {
       if(list[cursor] === target){
           return cursor;
       }
       cursor++;
    }
    return cursor;
};


/*var result = [];
    for(var i = 0; i < list.length; i++) {
        if (list[i] === result[i]) {
            // don't push
        }
        else {
            result.push(list[i])

        }
    }
    // sort it
        result.sort();

    // check to see where the target is in the list
    for(var j = 0; j < result.length; j++){
        // check each element
        if ( result[j] === target)
        {
            return j;
        }
    else if ( target < result[j] && target > result[j-1] ){
            return j;
        }
    else{
            return j;
        }
    }

    return result;
*/

list1 = [1,3,5,6];
console.log(pos(list1,2));