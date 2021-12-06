const Manager = require('../lib/Manager');


describe('Manager', () => {
    test('Receiving correct name', () => {
        const Manager1 = new Manager('Rich', 1, 'Richard@Karbar.com');
        expect(Manager1.getName()).toBe('Rich');
    }) 
    test('Receiving correct id', () => {
        const Manager1 = new Manager('Rich', 1, 'Richard@Karbar.com');
        expect(Manager1.getId()).toBe(1);
    }) 
    test('Receiving correct email', () => {
        const Manager1 = new Manager('Rich', 1, 'Richard@Karbar.com');
        expect(Manager1.getEmail()).toBe('Richard@Karbar.com');
    }) 
    

    
})