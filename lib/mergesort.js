function merge(first, second, comparator) {
    const mergedArray = [];
    const mergedSize = first.length + second.length;

    let index = 0;
    let firstIndex = 0;
    let secondIndex = 0;

    while (index < mergedSize) {
        if (firstIndex === first.length || secondIndex == second.length) {
            break;
        }

        if (comparator(first[firstIndex], second[secondIndex]) < 0) {
            mergedArray[index] = first[firstIndex];
            firstIndex++;
        } else {
            mergedArray[index] = second[secondIndex];
            secondIndex++;
        }
        index++;
    }

    for (let i = firstIndex; i < first.length; i++) {
        mergedArray[index] = first[i];
        index++;
    }

    for (let i = secondIndex; i < second.length; i++) {
        mergedArray[index] = second[i];
        index++;
    }

    return mergedArray;
}

function sort(array = [], comparator = (a, b) => a - b) {
    const middle = parseInt(array.length / 2) - 1;
    let left = array.slice(0, middle + 1);
    let right = array.slice(middle + 1, array.length);

    if (left.length > 1) {
        left = sort(left, comparator);
    }

    if (right.length > 1) {
        right = sort(right, comparator);
    }

    return merge(left, right, comparator);
}

module.exports = sort;
