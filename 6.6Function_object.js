// call() має містити перелічувані агрументи, але не масив
// apply(thisArg)
// apply(thisArg, argsArray)

let numbers = [2,4,7,9];

let max = Math.min.apply(0, numbers);
console.log(max);


const obj1 = {name: "Inna", lastName: "Bedenok", age: 30, };

const obj2 = {
    sayHello() {
        console.log(this.name);
        console.log(this.age);
        console.log(this.lastName);
    },
};

obj2.sayHello.call(obj1);



//spread
const str = "Hello";
console.log( [...str]);
// Але між Array.from(obj) та [...obj] є тонка різниця:
// Array.from працює як з масиво-подібними об’єктами, так і з об’єктами, що ітеруються.

let arr = [1, 2, 3];

let arrCopy = [...arr]; //робить копію масива або обєктаб alert(arr === arrCopy); - false