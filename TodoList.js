
// var ans = (function(){

//     let tasks = [];
//     const tasksList = document.getElementById('list');
//     const addTaskInput = document.getElementById('add');
//     const tasksCounter = document.getElementById('tasks-counter');
    
//     // function fetchTodos(){
    
//     //     fetch('https://jsonplaceholder.typicode.com/todos')
//     //      .then(function(response){
//     //           return response.json();
//     //      }).then(function(data){
//     //         tasks = data.slice(0,20);
//     //         renderList();
//     //         return;
//     //      })
//     //      .catch(function(error){
//     //         console.log('error', error);
//     //      })
//     // };
//     var a= 10;
//     var b = 20;
    
//      async function fetchTodos(){
//       try{
//          const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//          const data = await response.json();
    
//         tasks = data.slice(0,10);
//         renderList();
//         return;
//          }  catch(error){
//          console.log(error);
//         }
//     };
    
    
//     function addTaskToDOM(task){
//         var c = 30;
//       const li = document.createElement('li');
      
//       li.innerHTML = `
//       <input type ="checkbox" id = "${task.id}" ${task.completed? 'checked': ''} class = "custom-checkbox">
//       <label for ="${task.id}">${task.title} </label>
//       <img src = "bin.svg" class = "delete" data-id = "${task.id}" />
//       </li>
//       `;
//       tasksList.append(li);
//     }
    
//     function renderList () {
//         tasksList.innerHTML = '';
//         for(let i =0; i<tasks.length; i++){
//             addTaskToDOM(tasks[i]);
//         }
//         tasksCounter.innerHTML = tasks.length;
//     };
    
//     function toogleTask (taskId) {
//        const task = tasks.filter(function(task){
//           return task.id===Number(taskId);
//         });
//         if(task.length>0){
//             const currentTask = task[0];
//             currentTask.completed = !currentTask.completed;
//             renderList();
//             showNotification("Task toggled successfully");
//             return;
//         }
//         showNotification("Could not toggled the task");
//     };
    
//     function deleteTask (taskId) {
    
//         const newTasks = tasks.filter(function(task){
//             return task.id !== Number(taskId); 
//         });
//         tasks = newTasks; 
//         renderList();
//         showNotification("Task delted successfully");   
//     };
    
//     function addTask (task) {
//       // For using the post method
    
//         // if(task){
//         //     fetch('https://jsonplaceholder.typicode.com/todos',{
//         //         method :'POST',
//         //         headers: {
//         //             "Content-Type": "application/json",
//         //           },
//         //           body: JSON.stringify(data),
//         //         }).then(function(response){
//         //             return response.json();
//         //        }).then(function(data){
//         //         tasks.push(task);
//         //         renderList();
//         //         showNotification("Task is added successfully");
//         //         return;
//         //        })
//         //        .catch(function(error){
//         //         console.log('error', error);
//         //      })
//         //     })
                 
                 
//         if(task){
//         tasks.push(task);
//         renderList();
//         showNotification("Task is added successfully");
//         return;
//         }
//         showNotification("Task can not be added");
//     };
//     // function addTask (task) {
//     //     if(task){
//     //     tasks.push(task);
//     //     renderList();
//     //     showNotification("Task is added successfully");
//     //     return;
//     //     }
//     //     showNotification("Task can not be added");
//     // };
    
//     function showNotification (text) {
//         alert(text);
//     };
    
//     function handleInputKeypress(e){
//       if(e.key==="Enter"){
//         const text = e.target.value;
//         if(!text){
//             showNotification("Task text can not be empty");
//             return;
//         }
//         const task = {
//            title: text,
//             id : Date.now(),
//             completed : false
//         }
//         e.target.value = '';
//         addTask(task);
//       }
//     }
    
//     function handleClickListener(e){
//         const target = e.target;
//         if(target.className==='delete'){
//             const taskId = target.dataset.id;
//             deleteTask(taskId);
//             return;
//         }else if (target.className==='custom-checkbox'){
//           const taskId = target.id;
//           toogleTask(taskId);
//           return;
//         }
//     }
//       function initializeApp(){
//         fetchTodos();
//     document.addEventListener("keyup",handleInputKeypress);
//     document.addEventListener("click",handleClickListener);
//       };
//       initializeApp();


//       return{
//         a:a,
//         b:b,
//         add:addTask
//       }
// })();
















  
// let tasks = [];
// const tasksList = document.getElementById('list');
// const addTaskInput = document.getElementById('add');
// const tasksCounter = document.getElementById('tasks-counter');

// // function fetchTodos(){

// //     fetch('https://jsonplaceholder.typicode.com/todos')
// //      .then(function(response){
// //           return response.json();
// //      }).then(function(data){
// //         tasks = data.slice(0,20);
// //         renderList();
// //         return;
// //      })
// //      .catch(function(error){
// //         console.log('error', error);
// //      })
// // };
// var a= 10;
// var b = 20;

//  async function fetchTodos(){
//   try{
//      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//      const data = await response.json();

//     tasks = data.slice(0,10);
//     renderList();
//     return;
//      }  catch(error){
//      console.log(error);
//     }
// };


// function addTaskToDOM(task){
//     var c = 30;
//   const li = document.createElement('li');
  
//   li.innerHTML = `
//   <input type ="checkbox" id = "${task.id}" ${task.completed? 'checked': ''} class = "custom-checkbox">
//   <label for ="${task.id}">${task.title} </label>
//   <img src = "bin.svg" class = "delete" data-id = "${task.id}" />
//   </li>
//   `;
//   tasksList.append(li);
// }

// function renderList () {
//     tasksList.innerHTML = '';
//     for(let i =0; i<tasks.length; i++){
//         addTaskToDOM(tasks[i]);
//     }
//     tasksCounter.innerHTML = tasks.length;
// };

// function toogleTask (taskId) {
//    const task = tasks.filter(function(task){
//       return task.id===Number(taskId);
//     });
//     if(task.length>0){
//         const currentTask = task[0];
//         currentTask.completed = !currentTask.completed;
//         renderList();
//         showNotification("Task toggled successfully");
//         return;
//     }
//     showNotification("Could not toggled the task");
// };

// function deleteTask (taskId) {

//     const newTasks = tasks.filter(function(task){
//         return task.id !== Number(taskId); 
//     });
//     tasks = newTasks; 
//     renderList();
//     showNotification("Task delted successfully");   
// };

// function addTask (task) {
//   // For using the post method

//     // if(task){
//     //     fetch('https://jsonplaceholder.typicode.com/todos',{
//     //         method :'POST',
//     //         headers: {
//     //             "Content-Type": "application/json",
//     //           },
//     //           body: JSON.stringify(data),
//     //         }).then(function(response){
//     //             return response.json();
//     //        }).then(function(data){
//     //         tasks.push(task);
//     //         renderList();
//     //         showNotification("Task is added successfully");
//     //         return;
//     //        })
//     //        .catch(function(error){
//     //         console.log('error', error);
//     //      })
//     //     })
             
             
//     if(task){
//     tasks.push(task);
//     renderList();
//     showNotification("Task is added successfully");
//     return;
//     }
//     showNotification("Task can not be added");
// };
// // function addTask (task) {
// //     if(task){
// //     tasks.push(task);
// //     renderList();
// //     showNotification("Task is added successfully");
// //     return;
// //     }
// //     showNotification("Task can not be added");
// // };

// function showNotification (text) {
//     alert(text);
// };

// function handleInputKeypress(e){
//   if(e.key==="Enter"){
//     const text = e.target.value;
//     if(!text){
//         showNotification("Task text can not be empty");
//         return;
//     }
//     const task = {
//        title: text,
//         id : Date.now(),
//         completed : false
//     }
//     e.target.value = '';
//     addTask(task);
//   }
// }

// function handleClickListener(e){
//     const target = e.target;
//     if(target.className==='delete'){
//         const taskId = target.dataset.id;
//         deleteTask(taskId);
//         return;
//     }else if (target.className==='custom-checkbox'){
//       const taskId = target.id;
//       toogleTask(taskId);
//       return;
//     }
// }
//   function initializeApp(){
//     fetchTodos();
// document.addEventListener("keyup",handleInputKeypress);
// document.addEventListener("click",handleClickListener);
//   };
//   initializeApp();













 
let tasks = [];
const tasksList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');



function addTaskToDOM(task){
  const li = document.createElement('li');
  
  li.innerHTML = `
  
  <input type ="checkbox" id = "${task.id}" ${task.done? 'checked': ''} class = "custom-checkbox">
  <label for ="${task.id}">
  ${task.text}
   </label>
  
  <i class="fa fa-trash-o delete" data-id="${task.id}"></i>
  `;
  tasksList.append(li);
}
// <img src = "bin.svg"  class = "delete" data-id = "${task.id}" />
function renderList () {
    tasksList.innerHTML = '';
    for(let i =0; i<tasks.length; i++){
        addTaskToDOM(tasks[i]);
    }
    tasksCounter.innerHTML = tasks.length;
};

function toogleTask (taskId) {
   const task = tasks.filter(function(task){
      return task.id===taskId;
    });
    if(task.length>0){
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task toggled successfully");
        return;
    }
    showNotification("Could not toggled the task");
};


function deleteTask (taskId) {

    const newTasks = tasks.filter(function(task){
        return task.id !== taskId; 
    });
    tasks = newTasks; 
    renderList();
    showNotification("Task deleted successfully");   
};

function addTask (task) {
    if(task){
    tasks.push(task);
    renderList();
    showNotification("Task is added successfully");
    return;
    }
    showNotification("Task can not be added");
};

function showNotification (text) {
    alert(text);
};

function handleInputKeypress(e){
  if(e.key==="Enter"){
    const text = e.target.value;
    if(!text){
        showNotification("Task text can not be empty");
        return;
    }
    const task = {
        text,
        id : Date.now().toString(),
        done : false
    }
    e.target.value = '';
    addTask(task);
  }
}
// inside handleClickListener() ,

//     if(target.className === "fa fa-trash-o delete"){
//        const taskId = target.dataset.id;
//        deleteTask(taskId);
//     }
function handleClickListener(e){
    const target = e.target;
    if(target.className==="fa fa-trash-o delete"){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }else if (target.className==='custom-checkbox'){
      const taskId = target.id;
      toogleTask(taskId);
      return;
    }
}
  function initializeApp(){
document.addEventListener("keyup",handleInputKeypress);
document.addEventListener("click",handleClickListener);
  };
  initializeApp();