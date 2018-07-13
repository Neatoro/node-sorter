function sort(array, comparator = (a, b) => a - b) {
    for (let i = 1; i < array.length; i++) {
        let y = array[i];
        for (let j = 0; j < i; j++) {
            if (comparator(y, array[j]) < 0) {
                const temp = array[j];
                array[j] = y;
                y = temp;
            }
        }
        array[i] = y;
    }

    return array;
}

module.exports = sort;
