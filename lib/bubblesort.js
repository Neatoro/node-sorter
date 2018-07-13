function sort(array, comparator = (a, b) => a - b) {
    let length = array.length;
    let reordered = true;
    while (reordered) {
        reordered = false;
        for (let i = 0; i < length - 1; i++) {
            if (comparator(array[i], array[i + 1]) > 0) {
                reordered = true;

                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        length--;
    }
    return array;
}

module.exports = sort;
