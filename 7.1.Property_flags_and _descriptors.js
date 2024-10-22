let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
alert( JSON.stringify(descriptor, null, 2 ) );
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
  for (let key in person) alert(key); // name, toString
//but if:
  Object.defineProperty(person, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user) alert(key); // name
  //Non-enumerable properties are also excluded from Object.keys:
  alert(Object.keys(person)); // name

  //Non-configurable
//   Please note: configurable: false prevents changes of property flags and its deletion, 
//   while allowing to change its value.