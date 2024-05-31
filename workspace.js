"use strict";

// Selecting items
const dropDownBtn = document.getElementById('dropBtn');
const dropDownMenu =  document.getElementById('dropdownNavbar');
const mobileBtn = document.getElementById('Mobilebtns');
const menu = document.getElementById('navbar-defaultss')
const btn = document.querySelector('#todoBtn');
const modal = document.querySelector('#modalContainer');
const closeModal = document.querySelector('#btn--close-modal');
const overLay = document.querySelector('#overlay');
const container = document.querySelector('#containerContent');
const addToDoBtn = document.querySelector('#ContinueBtn');
const toDoLane = document.getElementById("todo-lane");

// const form = document.getElementById("todo-form");
// const input = document.getElementById("textValue");
const welcomeMessage = document.querySelector('.welcome');
// const draggables = document.querySelectorAll(".task");
// const droppables = document.querySelectorAll('.swim-lane')


// btn.addEventListener('click', ()=> {
//   modal.classList.remove('hidden');
//   overLay.classList.remove('hidden');
// });

// closeModal.addEventListener('click', ()=> {
//   modal.classList.add('hidden');
//   overLay.classList.add('hidden');
// })



// // console.log(draggables);
// draggables.forEach((task) => {
//   task.addEventListener("dragstart", () => {
//     task.classList.add("is-dragging");
//     // console.log(`Dragging started for
//     //  task: ${task.innerText}`);
//     console.log(task);
//   });
//   task.addEventListener("dragend", () => {
//     task.classList.remove("is-dragging");
//     console.log(task);
//     // console.log(`Dragging ended for task: ${task.innerText}`);
//   });
// });

// droppables.forEach((zone) => {
//   zone.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     // if (e.target !== zone) return;
//     //  console.log(zone);
//     const bottomTask = insertAboveTask(zone, e.clientY);
//     const curTask = document.querySelector(".is-dragging");
//     // console.log(bottomTask);

//     // console.log(`Dragging over zone: ${zone.id}`);
//     // console.log(`Current task: ${curTask ? curTask.innerText : 'None'}`);
//     // console.log(`Bottom task: ${bottomTask ? bottomTask.innerText : 'None'}`);

//     if (curTask) {
//       // console.log(`Current task parent zone: ${curTask.parentNode.id}`);
//     }

//     if (curTask && curTask.parentNode.id !== zone.id) {
//       // If the task is being dragged over a different zone, prevent movement
//       // console.log("Task cannot be moved to this lane!");
//       return;
//     }

//     if (!bottomTask) {
//       zone.appendChild(curTask);
//     } else {
//       zone.insertBefore(curTask, bottomTask);
//     }
//   });
// });


// const insertAboveTask = (zone, mouseY) => {

//   const els = zone.querySelectorAll(".task:not(.is-dragging)");
  
//   let closestTask = null;
//   let closestOffset = Number.NEGATIVE_INFINITY;
  
//   els.forEach((task) => {
//   const { top } = task.getBoundingClientRect();
  
//   const offset = mouseY - top;
  
//   if (offset < 0 && offset > closestOffset) {
//     closestOffset = offset;
//        closestTask = task;
//    }
//      });
  
//    return closestTask;

// };

// form.addEventListener('submit', (e)=>{
// e.preventDefault();
// const value = input.value;
// console.log(value);

// if(!value) return;
// const newTask = document.createElement("p");
// newTask.classList.add("task");
// newTask.setAttribute("draggable", "true");
// newTask.innerText = value;

// newTask.addEventListener("dragstart", ()=> {
//   // console.log(task);
//   newTask.classList.add('is-dragging')
//   // console.log("okay")
//  });

//  newTask.addEventListener("dragend", ()=> {
//   newTask.classList.remove('is-dragging');
// });
// toDoLane.appendChild(newTask);

// input.value = "";
// });



// // mobileBtn.style.backgroundColor ="blue";


mobileBtn.addEventListener('click',()=> {
console.log("working!")
menu.classList.toggle('hidden');
});

// localStorage.getItem('userName');
const username = localStorage.getItem('userName');
console.log(username);
// const welcomeMessage = document.querySelector('.welcome-message');

welcomeMessage.textContent = `Welcome ${username}👋`;


setTimeout(() => {
  welcomeMessage.classList.add('show');
}, 500);

 
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerHTML = `
  <span>${value}</span>
  <button class="close-btn">&times</button>
  `;


  const closeButton = newTask.querySelector('.close-btn');
  closeButton.addEventListener('click', ()=>{
    newTask.remove();
  })

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";
});


const draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");

draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");
    
    // console.log(bottomTask);

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    // console.log(task);
    const { top } = task.getBoundingClientRect();
    

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};

