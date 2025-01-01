
//Property Flags and Descriptors
const userFlags = {
  name: "John",
  money: 1000,

};
let descriptor1 = Object.getOwnPropertyDescriptor(userFlags, 'money');
console.log(descriptor1);

//if empty object then all flags will be faulse:
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log( JSON.stringify(descriptor, null, 2 ) );
/*
{
  "value": "John",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
 */

//Non-writable

let user1 = {
    name: "John"
  };
  
  Object.defineProperty(user1, "name", {
    writable: false
  });
  
  user.name1 = "Pete"; // Error: Cannot assign to read only property 'name'
  //Errors appear only in strict mode


  //Non-enumerable
  let person = {
    name: "John",
    toString() {
      return this.name;
    }
  };
    // By default, both our properties are listed:
  for (let key in person) console.log(key); // name, toString
//but if:
  Object.defineProperty(person, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user) console.log(key); // name
  //Non-enumerable properties are also excluded from Object.keys:
  console.log(Object.keys(person)); // name

  //Non-configurable
//   Please note: configurable: false prevents changes of property flags and its deletion, 
//   while allowing to change its value.

let userEmpty = {};

Object.defineProperty(userEmpty, "name", {
  value: "Ben",
  writable: true,
  enumerable: true,
  configurable: false
});

let descriptorEmpty = Object.getOwnPropertyDescriptor(userEmpty, 'name');

console.log(descriptorEmpty);

userEmpty.name = "Denny";

delete userEmpty.name

console.log(userEmpty);
