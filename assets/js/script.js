"use strict";

//Hamburger menu

const navbarMenu = document.querySelector(".navbar__menu");
const mobMenu = document.querySelector(".navbar__mobile");
const searchBtn = document.querySelector(".navbar__search__btn");

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
  mobMenu.classList.toggle("active");
  if (searchBtn.style.display == "none") {
    searchBtn.style.display = "block";
  } else {
    searchBtn.style.display = "none";
  }
});

// Searchbar

const navSearch = document.querySelector(".navbar__search");

searchBtn.addEventListener("click", () => {
  navSearch.classList.toggle("active");
  searchBtn.classList.toggle("active");
});
