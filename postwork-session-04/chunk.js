function chunk(array, size) {
    const res = [];

    for (let i = 0; i < array.length; i += size) {
        let aux = [];
        // console.log(i);
        for (let j = 0; j < size; j++) {
            if (array[i + j])
                aux.push(array[i + j]);
        }
        res.push(aux);
    }

    return res;
}

const data = [1, 2, 3, 4, 5, 6, 7, 8]

console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]