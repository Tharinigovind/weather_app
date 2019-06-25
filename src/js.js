// //const m = require("lodash")
// let a = [
//     {
//     "timesheet_id": 112,
//     "user_id": 9,
//     "project_id": 0,
//     "task_title": "New task in timetracker 3",
//     "description": "this is description text entered for the task",
//     },
//     {
//     "timesheet_id": 113,
//     "user_id": 9,
//     "project_id": 1,
//     "task_title": "New task in timetracker 3",
//     "description": "this is description text entered for the task",
//     },
//     {
//     "timesheet_id": 117,
//     "user_id": 11,
//     "project_id": 1,
//     "task_title": "New task in timetracker 3",
//     "description": "this is description text entered for the task",
//     }
// ];

// // let result = m.groupBy(a,"user_id")
// // console.log(result);

// const newobj = {};
// const arr = a.filter(x => x.user_id === a[0].user_id);
// newobj[arr[0].user_id] = arr;

// const newobj1 = {};
// const arr1 = a.filter(x => x.user_id === a[2].user_id);
// newobj1[arr1[0].user_id] = arr1;

// console.log(newobj);
// console.log(newobj1);
// function groupBy(list, keyGetter) {
//     const map = new Map();
//     list.forEach((item) => {
//          const key = keyGetter(item);
//          const collection = map.get(key);
//          if (!collection) {
//              map.set(key, [item]);
//          } else {
//              collection.push(item);
//          }
//     });
//     return map;
// }
var a= [
            {
            "timesheet_id": 112,
            "user_id": 9,
            "project_id": 0,
            "task_title": "New task in timetracker 1",
            "description": "this is description text entered for the task",
            },
            {
            "timesheet_id": 113,
            "user_id": 9,
            "project_id": 1,
            "task_title": "New task in timetracker 2",
            "description": "this is description text entered for the task",
            },
            {
            "timesheet_id": 117,
            "user_id": 11,
            "project_id": 2,
            "task_title": "New task in timetracker 3",
            "description": "this is description text entered for the task",
            }
        ];
     
 //reduce_method

// result = a.reduce((acc, a) =>{
    
//     acc[a.user_id] = acc[a.user_id] || [];
//     acc[a.user_id].push(a);
//     return acc;
// }, Object.create(null));
// console.log(result);

//forEach_method

let finalObject={};
        a.forEach(b=>{
            finalObject[b.user_id]=  finalObject[b.user_id] || [];
        finalObject[b.user_id].push(b);
        })
console.log(finalObject);