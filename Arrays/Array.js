const initialArray = ['a','b','c','d'];
console.log(initialArray);

console.log('**** Insert ****');
console.log('Insert at the end: O(1), CPU knows the location of array and it is stored linearly inside RAM');
//initialArray[initialArray.length] = 'e';
initialArray.push('e');
console.log(initialArray);

console.log('Insert at the beginning: O(n), CPU has to shift all the elements by 1');
initialArray.unshift('x');
console.log(initialArray);

console.log('Insert in the middle: O(n), CPU has to shift all the elements by O(n/(index where elements are inserted)), e.g. O(n/2) i.e. O(n)');
initialArray.splice(2,0, 'y','z');
console.log(initialArray);

console.log('');
console.log('**** Delete ****');
console.log('Delete at the end: O(1), CPU knows the location of array and it is stored linearly inside RAM');
initialArray.pop();
console.log(initialArray);

console.log('Delete at the beginning: O(n), CPU has to shift all the elements by 1');
initialArray.shift();
console.log(initialArray);

console.log('Delete in the middle: O(n), CPU has to shift all the elements by O(n/(index where elements are inserted)), e.g. O(n/2) i.e. O(n)');
initialArray.splice(1,2);
console.log(initialArray);

console.log('');
console.log('**** Lookup/Access ****');
console.log('Access any element in array: O(1), CPU knows the location of array and it is stored linearly inside RAM');
console.log('3rd element: '+ initialArray[2]);

console.log('');
console.log('**** Searching ****');
console.log('Search the element: O(n), CPU has to search through loop till it founds an element');
console.log('find a: '+initialArray.find(element => element == 'a'));
console.log('if item is not found then it returns: undefined,\nfor e.g. find x: '+initialArray.find(element => element == 'x'));

console.log('');
console.log('**** Searching index ****');
console.log('Search the index: O(1), CPU knows where the element is');
console.log('index of b: '+initialArray.indexOf('b'));
console.log('if item has not found then it returns: -1,\nfor e.g. find x: '+ initialArray.indexOf('x'));
