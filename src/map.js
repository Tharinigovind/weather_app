// var allObjects = [
//     { number : 1, type : "odd"}, 
//     { number : 2, type : "even"}, 
//     { number : 3, type : "odd"},
//     { number: 4, type : "even"},
//     {number : 5, type : "odd"},
//     { number: 6, type : "even"},
//     { number: 7, type : "odd"},
//   ];
//   var a = allObjects.map(personObj => personObj.number);
//   var a = allObjects.map(function(a){
//         return a;
//   });
//   console.log(a.personObj);
// var allObjects = [{
//     type : "odd",
//     number : 1
// }, {
//     type : "even",
//     number : 2
// }, {
//     type : "odd",
//     number : 3
// }]
// var a= allObjects.reduce((acc, category) => {
//    acc = acc.concat(category.number);
//    return acc;
// }, []);

// console.log(a); 

// let a={name:"tharini"};
// Object.defineProperty(a,age,
//   {value:3}
//   )
//Object.freeze(a);
//Object.seal(a);
// a.name="g";
// a.age=5;
// console.log({} +[]);
// console.log(String());
// console.log(a);

// let m=()=>{
//   return "hi"}
// let s=m("hello");
// console.log(s); //hi

let data=new Object(name:'thara');
console.log(data.name);