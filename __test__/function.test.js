const functions = require('../function');

// toBe
test('Add 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// notToBe
test('Add 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});


test('User should be Dima Vengerov object', () => {
    expect(functions.createUser()).toStrictEqual({ firstname: 'Dima', lastname: 'Vengerov' });
});

// Less than and greater than
test('Should be undr 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

// Regex 
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

// Arrays 
test('Admin should be in usernames', () => {
    usernames = ['dima', 'vlad', 'admin'];
    expect(usernames).toContain('admin');
});

test('Admin should`nt in usernames', () => {
    usernames = ['dima', 'vlad'];
    expect(usernames).not.toContain('admin');
});

// Working with async data
test('User fetch name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// Async Await
// test('User fetch name should be Leanne Graham', () => {
//     expect.assertions(1);
//     const data = await functions.fetchUser()
//     expect(data.name).toEqual('Leanne Graham')
// })