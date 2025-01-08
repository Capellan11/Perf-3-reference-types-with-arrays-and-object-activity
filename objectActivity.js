const car = {
  type: "Honda",
  model: "Civic",
  color: "blue",
};

console.log("Type of car:", typeof car);

car.type = "Toyota";
console.log("Updated car object:", car);

car.wheels = 4;
console.log("Car object with wheels property:", car);
