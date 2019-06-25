//filter and foreach
let arr = [{number:1,type:'odd'},
    {number:2,type:'even'},
     {number:3,type:'odd'},
     {number:4,type:'even'},
  {number:5,type:'odd'},
  {number:6,type:'even'},
  {number:7,type:'odd'}];

function evenObject(a){
  return a.filter(function(a)
  {
      return a%2===0
    })}
function oddObject(a){
    return a.filter(function(a)
    {
        return a%2 !==0
    }) }
let abc = arr.filter(function(a){
    return a.number%2 !==0
})
console.log(abc)
abc.forEach(val => console.log(val))
//another
// let allObject = [{number:1,type:'odd'},
//   {number:2,type:'even'},
//   {number:3,type:'odd'},
//   {number:4,type:'even'},
//   {number:5,type:'odd'},
//   {number:6,type:'even'},
//   {number:7,type:'odd'}];
  
//   let oddObject = allObject.filter(function(a){
//     return a.number%2 !==0
// })
//   let evenObject= allObject.filter(function(a){
//   return a.number%2 ==0
// })
// oddObject.forEach(val => console.log(val))

// evenObject.forEach(val => console.log(val))

