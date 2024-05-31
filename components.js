"use strict";

const mobileBtn = document.getElementById('Mobilebtn');
const menu = document.getElementById('navbar-defaults')
const buttonModal = document.querySelector('#modalButton');
const closeButton = document.querySelector('.btn--close-modal');
const overlay =  document.querySelector('#overlay');
const modalContainers =  document.querySelector('#modalContainer');
const container = document.querySelector('#tab-content-container');
const buttons = document.querySelectorAll('.tab-button');
const userName = document.querySelector('#TextValue').value;

buttonModal.addEventListener('click', ()=> {
modalContainers.classList.remove('hidden');
overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', ()=>{
  modalContainers.classList.add('hidden');
  overlay.classList.add('hidden');
});



buttonModal.addEventListener('click', ()=>{
  modalContainers.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeButton.addEventListener('click', ()=>{
  modalContainers.classList.add('hidden');
  overlay.classList.add('hidden');
});

const updateUi = () => {
  let html = `
  <div id="tab-1" class="px-4 md:px-8 py-6 tab-content">
  <h1 class="uppercase font-medium color">Your Workspaces</h1>
  <p class="py-6">You aren't a member of any workspaces yet. <a href="#" class="text-blue-500">Create a workspace</a></p>
  <div class="flex flex-col md:flex-row md:items-center md:justify-between md:gap-10">
    <div>
      <h1 class="flex items-center gap-3 text-xl md:text-base font-medium"><span class=""><ion-icon name="logo-apple-ar" class="bg-orange-500 p-2"></ion-icon></span>Akpesiri Build</h1>
    </div>
    <div class="grid grid-cols-2 md:flex md:items-center md:justify-between gap-2 my-4">
      <span class="bg-slate-100 p-2 rounded-md flex items-center text-sm gap-2"><ion-icon name="bar-chart-outline"></ion-icon>Board</span>
      <span class="bg-slate-100 p-2 rounded-md flex items-center text-sm gap-2"><ion-icon name="grid-outline"></ion-icon>Views</span>
      <span class="bg-slate-100 p-2 rounded-md flex items-center text-sm gap-2"><ion-icon name="person-outline"></ion-icon>Member(1)</span>
      <span class="bg-slate-100 p-2 rounded-md flex items-center text-sm gap-2"><ion-icon name="cog-outline"></ion.icon>Settings</span>
      <span class="bg-slate-100 p-2 rounded-md flex items-center text-sm gap-2"><ion-icon name="medkit-outline"></ion-icon>Upgrade</span>
    </div>
  </div>
</div>`;
  container.innerHTML = html;
}

const updateU12 = () => {
  let html = `
  <div id="tab-2" class="mx-auto container px-8 tab-content">
  <div class="lg:flex lg:items-center lg:justify-between gap-2">
    <h1 class="text-xl font-bold">Featured categories</h1>
    <input type="search" placeholder="Find Templates.." class="py-2 lg:px-3 lg:py-2 rounded border border-slate-300">
  </div>
  <div class="flex mt-5 items-center gap-2 overflow-x-auto scrollbar lg:overflow-hidden">
    <div class="w-32 p-2">
      <img src="./src/img/Business.svg" alt="backpack" class="">
      <p class="text-center">Business</p>
    </div>
    <div class="w-32 p-2">
      <img src="./src/img/code.svg" alt="backpack" class="">
      <p class="text-center">Design</p>
    </div>
    <div class="w-32 p-2">
      <img src="./src/img/Computer.svg" alt="backpack" class="">
      <p class="text-center">Education</p>
    </div>
    <div class="w-32 p-2">
      <img src="./src/img/backpack.svg" alt="backpack" class="">
      <p class="text-center">Engineering</p>
    </div>
    <div class="w-32 p-2">
      <img src="./src/img/marketing.svg" alt="backpack" class="">
      <p class="text-center">Marketing</p>
    </div>
    <div class="w-32 p-2">
      <img src="./src/img/chating.svg" alt="backpack" class="">
      <p class="text-center">Project</p>
    </div>
    <div class="w-32 p-2">
      <img src="./src/img/Remote Work.svg" alt="backpack" class="">
      <p class="text-center">Remote work</p>
    </div>
  </div>
  <div class="grid grid-cols-1 gap-3 lg:grid lg:grid-cols-3 mt-14 p-4">
    <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
      <a href="#!">
        <img class="rounded-t-lg" src="./src/img/patrick-robert-doyle-r4PxPNSIzHw-unsplash.jpg" alt="" />
      </a>
      <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight">New Hire Onboarding</h5>
        <p class="mb-4 text-base">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" data-twe-ripple-init data-twe-ripple-color="light">
          Button
        </button>
      </div>
    </div>
    <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
      <a href="#!">
        <img class="rounded-t-lg" src="./src/img/victor-rosario-vPC39ANNgm4-unsplash.jpg" alt="" />
      </a>
      <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight">Tier List</h5>
        <p class="mb-4 text-base">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" data-twe-ripple-init data-twe-ripple-color="light">
          Button
        </button>
      </div>
    </div>
    <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
      <a href="#!">
        <img class="rounded-t-lg" src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="" />
      </a>
      <div class="p-6 text-surface dark:text-white">
        <h5 class="mb-2 text-xl font-medium leading-tight">Better Work Habits Challenge</h5>
        <p class="mb-4 text-base">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button type="button" class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong" data-twe-ripple-init data-twe-ripple-color="light">
          Button
        </button>
      </div>
    </div>
  </div>
</div>
`;
  container.innerHTML = html;
}

const updateUi3 = () => {
  let html = `
  <div id="tab-3" class="card w-96 bg-base-100 shadow-xl tab-content">
  <figure><img class="" src="./src/img/patrick-robert-doyle-r4PxPNSIzHw-unsplash.jpg" alt="" /></figure>
  <div class="card-body p-2">
    <h2 class="card-title text-center font-bold text-xl">Organize everything</h2>
    <p class="text-sm text-center">Put everything in one place and start moving things forward with your first Trello board!</p>
    <div class="card-actions justify-end py-4">
      <input type="search" name="" id="" class="border border-slate-400 px-2 py-2 w-full" placeholder="what are you working on?">
    </div>
  </div>
</div>
`;
  container.innerHTML = html;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    console.log('Clicked button with tabId:', tabId); // Debug logging
    console.log('Comparing tabId:', tabId, 'with 2'); // Debug logging
    if (tabId === '1') {
      console.log('Updating tab 1');
      updateUi();
    } else if (tabId === '2') {
      console.log('Updating tab 2');
      updateU12();
    } else if (tabId === '3') {
      console.log('Updating tab 3');
      updateUi3();
    } else {
      console.log("try again");
    }
  });
});
updateUi();



// mobileBtn.style.backgroundColor ="blue";

// dropDown menu
// const dropDownBtn = document.getElementById('dropBtn');
// const dropDownMenu =  document.getElementById('dropdownNavbar');




mobileBtn.addEventListener('click',()=> {
console.log("working!")
menu.classList.toggle('hidden');
});


const reset = ()=>{
  const userName = document.querySelector('#TextValue').value = '';
  return userName;
}

document.addEventListener('DOMContentLoaded', function() {
  const continueButton = document.querySelector('#submit');
  continueButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      
      // Retrieve the value entered by the user in the input field
      const userName = document.querySelector('#TextValue').value;
      
      // Store the value in localStorage
      localStorage.setItem('userName', userName);
      
      document.querySelector('#form-space').reset();
      // Redirect the user to the workspace.html page
      window.location.href = "./workspace.html";
  });
});


console.log(userName);
localStorage.setItem('userName',userName);