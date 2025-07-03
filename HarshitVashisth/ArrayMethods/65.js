// Optional chaining (?.) is a JavaScript feature that lets you safely access deeply nested object 
// properties without having to manually check if each property in the chain exists.
const user = {
    name: "Alice",
    address: {
      city: "Pune"
    }
  };
  
  console.log(user.address?.city);        // "Pune"
  console.log(user.address?.zipcode);     // undefined
  console.log(user.contact?.phone);       // undefined (doesn't throw an error)
  
//   Avoiding TypeError when accessing deeply nested properties.
//   Cleaner and safer code when dealing with optional or uncertain data structures (like API responses).