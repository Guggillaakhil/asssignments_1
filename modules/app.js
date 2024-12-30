import { add,sub } from "./math.js";
let a=add(1,3)
console.log(a)
import greet from "./greet.js";
const  user='akhil'
console.log(greet(user))
import  {getuser,setUsername}  from "./user.js";
setUsername('akhil');
console.log(getuser());
import  divide,{multiply} from './calculator.js';
let div=divide(3,8);
console.log(div)
let mul=multiply(8,9);
console.log(mul)
import { CalculateSum as sum }  from "./mathOperation.js";
let calsum=sum(8,9);
console.log(calsum)
import { appliaction_settings } from "./config.js";
console.log(appliaction_settings)
import subtrct,{multipy} from "./mathOperations_15.js";
let ab=subtrct(8,8);
console.log(ab)
let  b=multiply(8,9);
console.log(b)
import { captialize, lowercase } from "./strringutil_1.js";
const str='akhil';
console.log(captialize(str));
console.log(lowercase(str));
import {ToUpperCase,ToLowerCase,captialize_1} from "./StringUtil.js"
const str1='anvesh';
console.log(ToLowerCase(str1));
console.log(ToUpperCase(str1));
console.log(captialize_1(str1));



