function heapify(tree, currentRootIndex, length, comparator) {
    const leftChildIndex = 2 * currentRootIndex + 1;
    const rightChildIndex = 2 * currentRootIndex + 2;

    const rootNode = tree[currentRootIndex];
    const leftChildNode = leftChildIndex < length ? tree[leftChildIndex] : undefined;
    const rightChildNode = rightChildIndex < length ? tree[rightChildIndex] : undefined;

    const isLeftNodeLarger = leftChildNode !== undefined && comparator(rootNode, leftChildNode) < 0;
    const isRightNodeLarger = rightChildNode !== undefined && comparator(rootNode, rightChildNode) < 0;
    const isAnyLarger = isLeftNodeLarger || isRightNodeLarger;

    if (isAnyLarger) {
        if (isRightNodeLarger && comparator(leftChildNode, rightChildNode) < 0) {
            tree[currentRootIndex] = rightChildNode;
            tree[rightChildIndex] = rootNode;
            heapify(tree, rightChildIndex, length, comparator);
        } else {
            tree[currentRootIndex] = leftChildNode;
            tree[leftChildIndex] = rootNode;
            heapify(tree, leftChildIndex, length, comparator);
        }
    }
}

function sort(array, comparator = (a, b) => a - b) {
    let length = array.length;
    while (length > 0) {

        for (let i = parseInt(length / 2) - 1; i >= 0; i--) {
            heapify(array, i, length, comparator);
        }

        const temp = array[0];
        array[0] = array[length - 1];
        array[length - 1] = temp;

        length--;
    }
    return array;
}

module.exports = sort;
