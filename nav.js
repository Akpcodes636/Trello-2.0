"use strict";
///Grab Html Elements
const mobileBtn = document.getElementById('btn');
const menu = document.getElementById('navbar-default')

// dropDown menu
const dropDownBtn = document.getElementById('dropBtn');
const dropDownMenu =  document.getElementById('dropdownNavbar');

mobileBtn.addEventListener('click',()=>{
menu.classList.toggle('hidden');
})





  