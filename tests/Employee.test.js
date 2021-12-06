
const Employee = require('../lib/Employee');

describe('employee', () => {
    test('Receiving correct name', () => {
        const employee1 = new Employee('Don', 1, 'don@gmail.com');
        expect(employee1.getName()).toBe('Don');
    }) 
    test('Receiving correct id', () => {
        const employee1 = new Employee('Don', 1, 'don@gmail.com');
        expect(employee1.getId()).toBe(1);
    })
    test('Receiving correct email', () => {
        const employee1 = new Employee('Don', 1, 'don@gmail.com');
        expect(employee1.getEmail()).toBe('don@gmail.com');
    })
    test('Receiving correct role', () => {
        const employee1 = new Employee('Don', 1, 'don@gmail.com');
        expect(employee1.getRole()).toBe('Employee');
    })
})