let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  alert(user.fullName); // John Smith
//From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties.
// We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.



