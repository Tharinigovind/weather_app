// var num = [1, 2, 3, 4, 5,6,7];

// function allObject(arr, fn) {
//     return arr.reduce(function(acc, num) {
//       let oddObject= 0
//       let evenObject = 0
//       console.log(num, fn(num))
//       if(fn(num) === "even"){
//         evenObject++;
//         acc['even'] = evenObject;
//       } else {
//         oddObject++;
//         acc['odd'] = oddObject;
//       }
//       return acc
//     }, {}, 0)
//   }
//   function evenOdd(n) {
//    if (n % 2 === 0) return "even";
//    else return "odd";
//   }
//     console.log(allObject(num, evenOdd)); 
