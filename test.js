class Car {
    constructor(model, marka) {
        this.model = model
        this.marka = marka
    }

color = "white";
}

let newCar = new Car(10, "bmw");
newCar.color = "red";

console.log(newCar);

let user = {
    name: "Іван",
    age: "30",
    
    valueOf() {
      return +this.age;
    }
  
    
  };
  
  console.log(user.toString()); // toString -> Іван
  console.log(user.valueOf());
  console.log(user + 500); // toString -> Іван500

