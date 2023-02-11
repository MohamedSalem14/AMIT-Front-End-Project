"use strict";

let userName = document.getElementById("UserName");
userName.textContent = `${localStorage.getItem("userName")}`;

const showRandomNumber= function (myNumber) {
    document.querySelector('#myNumber').textContent = myNumber + "K";
};
showRandomNumber (Math.trunc(Math.random() * 1000) + 1);

const showRandomNumber1= function (myNumber) {
    document.querySelector('#myNumber1').textContent = myNumber + "K";
};
showRandomNumber1 (Math.trunc(Math.random() * 1000) + 1);

const showRandomNumber2= function (myNumber) {
    document.querySelector('#myNumber2').textContent = myNumber + "K";
};
showRandomNumber2 (Math.trunc(Math.random() * 1000) + 1);

let clearLocal = document.getElementById("logOut");

function clear(){
window.localStorage.clear();
}

clearLocal.addEventListener("click", clear);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const loading = setTimeout(load, 2500);
const slide = setTimeout(slideUp, 2500);

function load(){
    document.querySelector(".loadingPage").classList.remove("loadingPage-active");
}

function slideUp(){
    document.querySelector(".loadingPage").classList.add("loadingPage-slide");
    document.querySelector(".loadingImg").classList.add("d-none");
}


