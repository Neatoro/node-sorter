const insertionsort = require('../../lib/insertionsort');

describe('insertionsort', () => {

    it('should return the sorted array', () => {
        const unsortedArray = [4, 2, 1, 3];
        const sortedArray = insertionsort(unsortedArray);

        expect(sortedArray).toEqual([1, 2, 3, 4]);
    });

    it('should handle custom comparators', () => {
        const unsortedArray = [
            {id: 3, message: 'hello'},
            {id: 2, message: 'world'},
            {id: 1, message: 'hi'},
            {id: 4, message: 'okay'}
        ];
        const comparator = (a, b) => a.id - b.id;

        const sortedArray = insertionsort(unsortedArray, comparator);

        expect(sortedArray).toEqual([
            {id: 1, message: 'hi'},
            {id: 2, message: 'world'},
            {id: 3, message: 'hello'},
            {id: 4, message: 'okay'}
        ]);
    });

});
