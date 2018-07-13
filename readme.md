# Sorter

This is a small and simple sorting library for JavaScript. It supports current the following sorting algorithms:
* Bubblesort
* Insertionsort
* Mergesort
* Quicksort
* Heapsort

## Usage

You can use all algorithms in the same way.

```javascript
const { heapsort } = require('sorter');

const unsortedArray = [8, 2, 1, 4, 5, 9, 6, 3, 7];
const sortedArray = heapsort(unsortedArray);
```

## Comparators

Moreover you can define a comparator for your dataset and pass it to the sort function.

```javascript
const { heapsort } = require('sorter');

const unsortedArray = [
    {id: 3, message: 'hello'},
    {id: 2, message: 'world'},
    {id: 1, message: 'hi'},
    {id: 4, message: 'okay'}
];
const comparator = (a, b) => a.id - b.id;

const sortedArray = heapsort(unsortedArray, comparator);
```

The comparator retrieves to objects to compare. If the first is larger than the second it needs to return a number larger than 0. If the second is larger than the first one it needs to return a number smaller than 0. Equalness is expressed as 0.
