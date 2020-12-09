let zoo = new Map();

zoo.set('Zebra', 4);
zoo.set('Gorilla', 1);
zoo.set('Monkey', 20);

let zebraCount = zoo.get('Zebra');

zebraCount; //4

for (let [key, val] of zoo) {
    console.log(key + ' : ' + val);
}

// output:
// Zebra : 4
// Gorilla : 1
// Monkey : 20

zoo; // Map { 'Zebra' => 4, 'Gorilla' => 1, 'Monkey' => 20 }

//--------------------

let contacts = new Map();
contacts.set('Jessie', { phone: '213-555-1234', address: '123 N 1st Ave' });
contacts.has('Jessie'); // true

// delete the key on map
console.log(contacts.size); // 1
contacts.delete('Jessie'); // true
console.log(contacts.size); // 0
