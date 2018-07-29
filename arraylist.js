class ArrayList {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(value){
        this.data[this.length]=value;
        this.length++;
    }

    pop(){
        if(this.length>0) {
            let popped = this.data[this.length-1]
            //this.data[this.length-1]=null;
            delete this.data[this.length-1]
            this.length--;
            return popped
        }
        return null
    }

    get(index){
        return this.data[index];
    }

    delete(index){
        // for(let i =index;i<this.length;i++){
        //     this.data[index]=this.data[index+1];
        // }
        // this.data[this.length]=null;
        // this.length--;

        const ans = this.data[index];
        this._collapseTo(index);
        return ans;
    }

    _collapseTo(index){
        for(let i =index;i<this.length;i++){
            this.data[index]=this.data[index+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }

}

list = new ArrayList();

list.push(1);

console.log(list)

list.push(2);
console.log(list)

list.pop();
console.log(list)

list.push(2);
console.log(list)

list.get(2);
console.log(list.get(1))

console.log(list)
list.push(3);
list.delete(0);
console.log(list)

//export { ArrayList };