function sort(array, comparator = (a, b) => a - b) {
    for (let i = array.length; i > 1; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (comparator(array[j], array[j + 1]) > 0) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

module.exports = sort;
