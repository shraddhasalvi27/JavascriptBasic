const myMap = new Map();

myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');


console.log(myMap.size); // Output: 3
console.log(myMap.get('key2')); // Output: value2

console.log(myMap.has('key3')); // Output: true

myMap.delete('key3');
console.log(myMap.has('key3')); // Output: false

for (const [key, value] of myMap) {
    console.log(key, value);
  }

  for (const key of myMap.keys()) {
    console.log(key);
  }

  for (const value of myMap.values()) {
    console.log(value);
  }

  
  const arrayFromMap = Array.from(myMap);
  console.log(arrayFromMap); // Output: [['key1', 'value1'], ['key2', 'value2']]

  const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
  console.log(myMap); // Output: Map(2) {"key1" => "value1", "key2" => "value2"}

  myMap.clear();
  console.log(myMap.size); // Output: 0


  const map1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
  const map2 = new Map([['b', 4], ['c', 5], ['d', 6]]);
  
  // Merge two maps
  const mergedMap = new Map([...map1, ...map2]);
  console.log(mergedMap); // Output: Map(4) {"a" => 1, "b" => 4, "c" => 5, "d" => 6}
  
  // Iterate over entries and log keys and values
  mergedMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
  });
  