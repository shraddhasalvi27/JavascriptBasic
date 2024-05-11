// sets - it is iterable
// store data
// sets also has its own methods
// no index- based access like array it is the main difference
// unique items only not duplicate items allowed

const numbers = new set([1,2,3,4]);
console.log(numbers);

const strings = new set("mugdha");
console.log(strings);

const num = new set();
num.add(1);
num.add(3);
num.add([1,2,3,4]);
num.add([1,2,3]);  //to add elements
num.has(1);  // it will return voolean values based on wether it is present or not

num.delete(3); //to delete element
console.log(num.has(3)); // Output: false

for (const item of num) {
    console.log(item);
}   //as itis iterable

// converting set to array
const arrayFromSet = Array.from(mySet);
console.log(arrayFromSet); // Output: [1, 2, 'Hello']


// converting array to set

const myArray = [1, 2, 3, 1, 2];
const mySet = new Set(myArray);
console.log(mySet); // Output: Set {1, 2, 3}

// clearing array
num.clear();
console.log(num.size); // Output: 0


// below are all set methods

const set1 = new Set([1, 2, 3]);
const set2 = new Set([4, 3, 2]);

// Union
const union = new Set([...set1, ...set2]);
console.log(union); // Output: Set {1, 2, 3, 4}

// Intersection
const intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection); // Output: Set {2, 3}

// Difference
const difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference); // Output: Set {1}




