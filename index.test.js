// test('Check the result of 5 + ', () => {
//     expect(5 + 2).toBe(7)
// })

let func = require('./func.js')

test('test sum',()=>{
    expect(func.sum(2)).toBe(2)
})