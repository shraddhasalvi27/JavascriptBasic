// array.fill(value[, start[, end]]) - syntax

const array = [1, 2, 3, 4, 5];

// fill with 0 from index 2 to 4
console.log(array.fill(0, 2, 4));
// Output: [1, 2, 0, 0, 5]

// fill with 6 from index 1 to the end
console.log(array.fill(6, 1));
// Output: [1, 6, 6, 6, 6]


const array = [1, 2, 3, 4, 5];

// fill with 0 from index -2 to the end
console.log(array.fill(0, -2));
// Output: [1, 2, 3, 0, 0]


