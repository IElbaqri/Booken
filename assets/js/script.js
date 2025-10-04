'use strict';



const addEventOnElem = function(elem, Type, callback){
    if(elem.length > 1){
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(Type, callback);
        }
    } else{
        elem.addEventListener(Type, callback);   
    }
}

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-tooggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function(){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");
const activeElemOnScroll = function(){
    if(window.scrollY > 100){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeElemOnScroll);

