const chunkArray = require('../chunk');

test('ChunkArray function exist', () => {
    expect(chunkArray).toBeDefined();
});

test('Chunk an array of 10 values with length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chungedArr = chunkArray(numbers, len);
    expect(chungedArr).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 10]
    ])
})