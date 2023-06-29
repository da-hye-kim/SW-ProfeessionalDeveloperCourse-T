// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {console.log('3초뒤'),3000})
// })
// promise.then(result => result),catch()



// import add from './add.js'
// import multiply from './multiply.js'

// console.log(add(2))
// console.log(multiply(4))

import {add, multiply} from './util.js'
import {add as plus} from './util.js'

console.log(add(2))
console.log(plus(2))
console.log(multiply(3))


import * as calc from './util.js'

console.log(calc.add(2))
console.log(calc.multiply(3))
console.log(calc.double(4))

