const person = {
    name: 'John',
    address: {
      city: 'New York',
      postalCode: '10001'
    }
  };
  
  // Without optional chaining
  console.log(person.address.street); // TypeError: Cannot read property 'street' of undefined
  
  // With optional chaining
  console.log(person.address?.street); // Output: undefined

  
  const person = {
    name: 'John',
    address: {
      city: 'New York',
      postalCode: '10001',
      getFullAddress() {
        return `${this.city}, ${this.postalCode}`;
      }
    }
  };
  
  console.log(person.address?.getFullAddress()); // Output: New York, 10001
  console.log(person.address?.getFullAddress()?.toUpperCase()); // Output: NEW YORK, 10001
  

//   In the above example, if address or getFullAddress() is null or undefined, the expression evaluates to undefined without throwing an error.
