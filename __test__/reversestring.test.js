const reverseString = require('../reversestring');

test('Reverse String function exist', () => {
	expect(reverseString).toBeDefined();
})

test('String reverses with UpperCase', () => {
	expect(reverseString('Hello')).toEqual('olleH');
})

test('String reverses', () => {
	expect(reverseString('hello')).toEqual('olleh');
})