// named imports : are imported with same Name

// import { a,Example } from "./home.js";
// // mixed exports
// // import Data,{d1,d,d5} from "./about.js"; {d,d1,d5} from "./about.js"
// // default imports 
// import m from "./home.js"


import * as da from "./about.js"
console.log(da)
console.log(da.d)
console.log(da.default())


// console.log(a)
// console.log(d)
// console.log(a*d)

// Example("React")
// Example("Dev")
// Example("React")

// console.log(m)