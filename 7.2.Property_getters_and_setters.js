// let user = {
//     name: "John",
//     surname: "Smith",
  
//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     }
//   };
  
//   console.log(user.fullName); // John Smith

//From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties.
// We don’t call user.fullName as a function, we read it normally 
// but can not assign in a regular way - user.FullName=Ben Denny - will have an error, need to add setter

let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    }
  };
  
  // set fullName is executed with the given value.
  user.fullName = "Alice Cooper";
  
  console.log(user.name); // Alice
  console.log(user.surname); // Cooper

//As the result, we have a “virtual” property fullName. It is readable and writable.

//Accessor descriptors

// An accessor descriptor may have:

// get – a function without arguments, that works when a property is read,
// set – a function with one argument, that is called when the property is set,
// enumerable – same as for data properties,
// configurable – same as for data properties.
// For instance, to create an accessor fullName with defineProperty, we can pass a descriptor with get and set:

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
  
//   Object.defineProperty(user, 'fullName', {
//     get() {
//       return `${this.name} ${this.surname}`;
//     },
  
//     set(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   });
  
//   console.log(user.fullName); // John Smith
  
//   for(let key in user) console.log(key); // name, surname

// And can not set value - a property can be either an accessor (has get/set methods) or a data property (has a value), not both


