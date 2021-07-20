export {};

class Person {
    
    constructor(public name: string, protected age:number) {}
}

const me = new Person('hamusann', 43);
console.log(me);