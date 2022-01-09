/*
example: [1 3 4] [2 5 6]
solution:
        1 < 2 = 1
        3 < 2 = 2
        3 < 5 = 3
        4 < 5 = 4
        undefinded < 5 = 5
        undefinded < 6 = 6 
*/

function MergeSortedArrays(array1, array2) {

    //have 2 pointers, to begin with it starts with 2 first elements 
    let firstPointer = array1[0];
    let secondPointer = array2[0];
    let resultArray = [];
    let i = 1, j = 1;
    while(firstPointer || secondPointer ){
        console.log(firstPointer, secondPointer)
        if(secondPointer === undefined || firstPointer < secondPointer){
            resultArray.push(firstPointer);
            firstPointer =  array1[i++];
        }
        else{
            resultArray.push(secondPointer);
            secondPointer =  array2[j++];
        }
    }
    return resultArray;
}

console.log(MergeSortedArrays([1, 3, 4], [2, 5, 6]));