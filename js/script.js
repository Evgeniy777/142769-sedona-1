"use strict";
var mobileMenu = document.querySelector(".main-nav__items");
var mobileMenuShow = document.querySelector(".main-nav--show");
var mobileMenuHide = document.querySelector(".main-nav--hide");
var mobileMenuToggle = document.querySelector(".main-nav__toggle");
var mobileMenuBtn = document.querySelector(".main-nav__btn");

mobileMenuToggle.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.add("main-nav__items--show");
    mobileMenu.classList.remove("main-nav__items--hide");
    mobileMenuBtn.classList.add("main-nav__btn--show");
    mobileMenuBtn.classList.remove("main-nav__btn--hide");
});

mobileMenuBtn.addEventListener("click", function (event) {
    event.preventDefault();
    mobileMenu.classList.remove("main-nav__items--show");
    mobileMenu.classList.add("main-nav__items--hide");
    mobileMenuBtn.classList.add("main-nav__btn--hide");
    mobileMenuBtn.classList.remove("main-nav__btn--show");
});

