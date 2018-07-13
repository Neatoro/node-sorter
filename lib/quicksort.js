function order(array, start, end, comparator) {
    let pivotIndex = start;
    const pivot = array[pivotIndex];

    for (let i = pivotIndex + 1; i <= end; i++) {
        if (comparator(pivot, array[i]) > 0) {
            array[pivotIndex] = array[i];
            array[i] = pivot;
            pivotIndex++;
        }
    }

    return pivotIndex;
}

function sort(array, start, end, comparator){
    if (start < end) {
        const pivotIndex = order(array, start, end, comparator);

        const leftStart = start;
        const leftEnd = pivotIndex - 1;

        const rightStart = pivotIndex + 1;
        const rightEnd = end;

        sort(array, leftStart, leftEnd, comparator);
        sort(array, rightStart, rightEnd, comparator);
    }

    return array;
}

function quicksort(array, comparator = (a, b) => a - b) {
    return sort(array, 0, array.length - 1, comparator);
}

module.exports = quicksort;
