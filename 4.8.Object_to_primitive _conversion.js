let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500



//the same:
  let user1 = {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user1); // toString -> {name: "John"}
  alert(+user1); // valueOf -> 1000
  alert(user1 + 500); // valueOf -> 1500

//The object-to-primitive conversion is called automatically 
//by many built-in functions and operators that expect a primitive as a value.

//The specification describes explicitly which operator uses which hint.

//The conversion algorithm is:

//Call obj[Symbol.toPrimitive](hint) if the method exists,
//Otherwise if hint is "string"
//try calling obj.toString() or obj.valueOf(), whatever exists.
//Otherwise if hint is "number" or "default"
//try calling obj.valueOf() or obj.toString(), whatever exists.
//All these methods must return a primitive to work (if defined).
  