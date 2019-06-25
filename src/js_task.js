let a = [
    {
    "timesheet_id": 112,
    "user_id": 9,
    "project_id": 0,
    "task_title": "New task in timetracker 3",
    "description": "this is description text entered for the task",
    },
    {
    "timesheet_id": 113,
    "user_id": 9,
    "project_id": 0,
    "task_title": "New task in timetracker 3",
    "description": "this is description text entered for the task",
    },
    {
    "timesheet_id": 117,
    "user_id": 11,
    "project_id": 0,
    "task_title": "New task in timetracker 3",
    "description": "this is description text entered for the task",
    }
]
const newobj = {};
const arr = a.filter(x => x.user_id === 9);
newobj[arr[0].user_id] = arr;

const newobj1 = {};
const arr1 = a.filter(x => x.user_id === 11);
newobj1[arr1[0].user_id] = arr1;

console.log(newobj);
console.log(newobj1);



// {
//     "9": [
//       {
//         "timesheet_id": 112,
//         "user_id": 9,
//         "project_id": 0,
//         "task_title": "New task in timetracker 3",
//         "description": "this is description text entered for the task"
//       },
//       {
//         "timesheet_id": 113,
//         "user_id": 9,
//         "project_id": 0,
//         "task_title": "New task in timetracker 3",
//         "description": "this is description text entered for the task"
//       }
//     ],
//     "11": [
//       {
//         "timesheet_id": 117,
//         "user_id": 11,
//         "project_id": 0,
//         "task_title": "New task in timetracker 3",
//         "description": "this is description text entered for the task"
//       }
//     ]
//   }
  
