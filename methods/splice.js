const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
// Result: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // Replaces the element at index 4 with 'May'
// Result: ["Jan", "Feb", "March", "April", "May"]


const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb'); // Inserts 'Feb' at index 1
// Result: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // Replaces the element at index 4 with 'May'
// Result: ["Jan", "Feb", "March", "April", "May"]

const months = ['Jan', 'March', 'April', 'June'];

months.splice(-1, 0, 'May'); // Inserts 'May' at index -1 (last element)
// Result: ["Jan", "March", "April", "May", "June"]


// array.splice(start[, deleteCount[, item1[, item2[, ...]]]]) - syntax.
