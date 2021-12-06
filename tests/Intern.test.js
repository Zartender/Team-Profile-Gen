const Intern = require('../lib/Intern');


describe('intern', () => {
    test('Receiving correct name', () => {
        const intern1 = new Intern('Bob', 1, 'bob.Kale@osu.edu', 'Boulder College');
        expect(intern1.getName()).toBe('Bob');
    }) 
    test('Receiving correct id', () => {
        const intern1 = new Intern('Bob', 1, 'bob.Kale@osu.edu', 'Boulder College');
        expect(intern1.getId()).toBe(1);
    }) 
    test('Receiving correct email', () => {
        const intern1 = new Intern('Bob', 1, 'bob.Kale@osu.edu', 'Boulder College');
        expect(intern1.getEmail()).toBe('bob.Kale@osu.edu');
    }) 
    test('Receiving correct role', () => {
        const intern1 = new Intern('Bob', 1, 'bob.Kale@osu.edu', 'Boulder College');
        expect(intern1.getRole()).toBe('Intern');
    })
    test('Receiving correct Education', () => {
        const intern1 = new Intern('Bob', 1, 'bob.Kale@osu.edu', 'Boulder College');
        expect(intern1.getEducation()).toBe('Boulder College');
    })
})