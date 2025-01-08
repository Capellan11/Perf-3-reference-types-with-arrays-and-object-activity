const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const joinedArray = arr1.concat(arr2);
console.log("Joined array:", joinedArray);


let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits array after push:", fruits);


let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1);


fruits.pop();
console.log("Fruits array after pop:", fruits);


let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 after shift:", array2);


fruits.sort();
console.log("Fruits array after sort:", fruits);


const slicedFruits = fruits.slice(1, 3);
console.log("Sliced fruits:", slicedFruits);


const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); 
months.splice(4, 1, "May");
console.log("Months array after splice:", months);
