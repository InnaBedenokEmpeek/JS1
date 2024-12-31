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
  
    toString() {
      return this.name;
    }
  };
  
  console.log(user); // toString -> Іван
  console.log(user + 500); // toString -> Іван500

