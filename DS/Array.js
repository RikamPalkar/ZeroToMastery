class Array {
    constructor(){
        this.length = 0;
        this.elements = {};
    }

    Push(element){
        this.elements[this.length] = element;
        this.length++;
    }

    Pop(){
        delete this.elements[this.length-1];
        this.length--;
    }

    DeleteAtIndex(index){
        for (let i = index; i < length - 1; i++) {
            this.elements[i] = this.elements[i+1];           
        }
        delete this.elements[this.length-1];
        this.length--;
    }


}

const newArray = new Array();
newArray.Push('a');
newArray.Push('b');
newArray.Push('c');
newArray.Pop();
newArray.Push('e');
newArray.Push('f');
console.log(newArray);
newArray.DeleteAtIndex(2);
console.log(newArray);
console.log(newArray);