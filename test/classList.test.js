'use strict'

// test('Hello World: hello should greet the world', () => {
// let hello = 'world'
// expect(hello).toEqual('world')
// })

 var classList = require("../classList.js");

test('Adding a student should occur successfully', () =>{
    let student = "Phetole";
    classList.add(student);
    expect(student).toEqual(classList.get(0));
})

test('deleting a student should occur successfully', ()=>{
    let student = "Kevin";
    classList.add(student);
    classList.delete(0);
    expect(classList.ret()).toEqual(["Kevin"]);
})

test('Editing a student should occur successfully', ()=>{
    let old = "Kevin";
    let _new = "Queen";
    classList.edit(_new, classList.find(old));
    expect(classList.ret()).toEqual(["Queen"]);
})
