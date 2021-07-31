function deepEqual(a, b) {
    if ((typeof a === 'object' && a != null) && (typeof b === 'object' && b != null)) {
        const keys1 = Object.keys(a);
        const keys2 = Object.keys(b);

        if (keys1.length === keys2.length) {
            for (let key in a) {
                if (!deepEqual(a[key], b[key])) { return false; }
            }
            return true;
        }
        else { return false }
    }
    else {
        return a === b;
    }
}

const john = {
    firstName: 'John',
    lastName: 'Doe'
}

console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false