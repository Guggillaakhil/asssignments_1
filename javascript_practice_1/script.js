//example-1
// const user={name:'Alice',email:'alice@example.com'}
// function displayUser({name,email}){
//     console.log(`name:${name},email:${email}`)
// }
// displayUser(user)
//example-2
// const product={name:'Laptop'}
// function  displayProduct({name,price=300}){
//     console.log(`${name} costs $${price}`)
// }
// displayProduct(product);
// example-3
// const apiResponse={status:200,data:{id:101,title:'Learn javascript'}};
// function  handleResponse(apiResponse){
//     const {status,data} =apiResponse;
//     console.log(`status:${status},Data:${data}`);
    

// }
// handleResponse(apiResponse)
//example-4
// const settings={theme:'dark'}
// function updateSettings(settings){
//     const {theme,notifications='true'}=settings;
//     console.log(`Dark:${theme},Notifications:${notifications}`);
// }
// updateSettings(settings);
//example-5
// const searchParams={query:'Javascript',page:1};
// function filterSearch(searchParams){
//     const  {query,page}=searchParams;
//     console.log( `Query:${query},page:${page}`)
// }
// filterSearch(searchParams)
// const task={id:1,ttle:'do homework',completed:false}
// function  logTaskDetails(task){
//     const  {id,title,completed}=task;
//     console.log(`TaskId:${id},completed:${completed}`)
// }
// logTaskDetails(task);
// //example-7
// const profile={name:'Bob',location:{city:'berlin',country:'Germany'}}
// function showProfile(profile){
//     console.log(`${profile.name} lives in ${profile.location.city}`);
// }
// showProfile(profile)
// //example-8
// const users = [
//     { name: 'Alice', email: 'alice@example.com' },
//     { name: 'Bob', email: 'bob@example.com' },
//     ];
//     function logUsers(users){
//         const  [{name,email}]=users
//         console.log(`Name:${name},Email:${email}`)
        
//     }

    // logUsers(users);
// example-9
// const user = { name: 'Charlie', age: 30, country: 'USA' };
// function   extractUserDetails(user){
//     const {name,...details}=user;
//     console.log(`Name:${name},Details:`,details)
// }

// extractUserDetails(user);
//example-10
// const user = { name: 'Dave', age: 35, email: 'dave@example.com' };
// function getDynamicValue(user,key){
//     return user[key];
// }
// console.log(getDynamicValue(user, 'email'))
//example-11
// function getDynamicValue(user, key) {
//     return user[key];
//   }
  
// //   const user = { name: 'Dave', age: 35, email: 'dave@example.com' };
// const config = { database: { host: 'localhost', port: 5432 } };
// function displayConfig(config){
//     const {host,port,user:'admin'}=config.database;
//     console.log(`Host:${host},port:${port},user:${user}`);
// }
// // displayConfig(config);
// let a=1,b=2;
// [a,b]=[b,a];
// console.log(a,b);
//
// const  data={id:42};
// function processData(data){
// const {id,Name='unknown'}=data;
// console.log(`ID:${id},Name:${Name}`)

// }
// processData(data)
// const user1 = { name: 'Eve', age: 28 };
// const user2 = { country: 'France' };
// const user={...user1,...user2}
// function mergeUsers(user){
//     console.log(user);
    
// }
// mergeUsers({ ...user1, ...user2 });
// const point = { x: 10, y: 20, z: 30 };
// function  extractCoordinates(point){
//     const {x,y,z}=point;
//     console.log(`x:${x},y:${y},z:${z}`);
    
// }
// // extractCoordinates(point);
// const numbers = [100, 200, 300];
// function logFirstTwo(numbers){
//     const [x,y]=numbers;
//     console.log(`fisrt:${x},second:${y}`);
    
// }
// logFirstTwo(numbers);
// const user = { userId: 7, userName: 'John' };
// function logUser(userId,userName){
//     console.log(`ID:${userId},Name:${userName}`);
// }
// logUser(user);
// const data = { user: { id: 1, profile: { name: 'Anna', age: 25 } } };
// function flattenObject(data){
//     const {user:{id,profile:{name,age}}}=data;
//     console.log(`ID:${id},Name:${name},Age:${age}`);
//     }
// //     flattenObject(data)
// function logRole({name,Role='user'}){
//     console.log(`name:${name},Role:${Role}`);
// }
// logRole({ name: 'Ella' })
// const  items=[1,2,3,4];
// function  extractRest(items){
//     const [a,...b]=items;
//     console.log(`First:${a},Rest:${b}`);
// }
// // extractRest(items);

// const obj = { details: { address: { city: 'Paris' } } };
// function getNestedValue(obj,key){
//     const {details:{address:{city}}}=obj;
//     console.log(obj,city);
// }
// console.log(getNestedValue(obj, 'address.city'));
// const bigObject = { id: 1, name: 'Test', extra: 'Ignore me' };
// function extractImportant(bigObject){
//     const  {id,name}=bigObject;
//     console.log(`ID:${id},Name:${name}`);
// }
// // extractImportant(bigObject);
// const data = { user: { profile: { username: 'Max' } } };
// function  displayUsername({user:{profile:{username}}}){
//     console.log(`username:${username}`);
// }
// displayUsername(data);
