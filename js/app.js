//get DOM element from 3 sections
const section_one = document.querySelector("#section1 h2");
const section_two = document.querySelector("#section2 h2");
const section_three = document.querySelector("#section3 h2");

const nav_array = [
  section_one.textContent,
  section_two.textContent,
  section_three.textContent,
];
//select nav DOM and create
const navbar_list = document.getElementById("navbar__list");

//iterate nav_array value using map and insert them into nav_list_el DOM
nav_array.map((el) => {
  const nav_list_el = document.createElement("li");
  nav_list_el.innerHTML = el;

  navbar_list.appendChild(nav_list_el);
});
