
function reverseString(inputString) {
    let outputString = '';
    for (let i = inputString.length-1; i>=0; i--) {
        outputString+=inputString[i];
    }
    return outputString;
}
console.log(reverseString('Something'));


function reverseString2(inputString) {
return inputString.split('').reverse().join('');
}
console.log(reverseString2('Something'));


const reverseString3 = str => str.split('').reverse().join('');
console.log(reverseString3('Something'));


const reverseString4 = str => [...str].reverse().join('');
console.log(reverseString4('Something'));