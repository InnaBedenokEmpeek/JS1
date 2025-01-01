// call() має містити перелічувані агрументи, але не масив
// apply(thisArg)
// apply(thisArg, argsArray)

let numbers = [2,4,7,9];

let max = Math.min.apply(this, numbers);
console.log(max);

//
const obj1 = {name: "Inna", age: 30};

const obj2 = {
    sayHello() {
        console.log(this.name);
        console.log(this.age);
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

//one more example
const array12 = [ "a", "b"];
const elements = [0, 1, 2];

array12.push.apply(array12, elements);
//or array12.push(...elemants);
console.log(array12);

//bind - створює привязку але не викликається у цей момент, бо кол та аплай викликаються одразу,
// а у майбутньому можемо викликати з певними параметрами
