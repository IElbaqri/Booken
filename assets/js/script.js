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

const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItem = document.querySelectorAll("[data-filter]");

let lastClickedBtn = filterBtn[0];

const filter = function(){
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

    for(let i = 0; i < filterItem.length; i++){
        if(filterItem[i].dataset.filter === this.dataset.filterBtn ){
            filterItem[i].style.display = "block";
        } else{
            filterItem[i].style.display = "none";
        }
    }
}

addEventOnElem(filterBtn, "click", filter);