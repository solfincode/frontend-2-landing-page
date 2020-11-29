//get DOM element from 3 sections
// const section_one = document.querySelector("#section1 h2");
// const section_two = document.querySelector("#section2 h2");
// const section_three = document.querySelector("#section3 h2");

const sectionList = document.querySelectorAll("section");
//select nav DOM
const navbar_list = document.getElementById("navbar__list");

class Navbar {
  constructor(section_one, section_two, section_three, section_four) {
    this.section_one = section_one;
    this.section_two = section_two;
    this.section_three = section_three;
    this.section_four = section_four;
  }
}

Navbar.prototype.generateNav = (navdata) => {
  navdata.map((el) => {
    const nav_list_el = document.createElement("li");
    nav_list_el.innerHTML = el;
    navbar_list.appendChild(nav_list_el);
  });
};

//create navbar section object
const nav_array = new Navbar(
  sectionList[0].id,
  sectionList[1].id,
  sectionList[2].id,
  sectionList[3].id
);
//conver object into array
const navdata = [
  nav_array.section_one,
  nav_array.section_two,
  nav_array.section_three,
  nav_array.section_four,
];

//generate navbar
nav_array.generateNav(navdata);

// after gerate sectio list and selectAll them and set initial active state
const nav_section_lists = document.querySelectorAll("#navbar__list li");
nav_section_lists[0].classList = "activeState";

// iterate nav_array value using map and insert them into nav_list_el DOM
function scrollEvent(e) {
  const moveY = this.scrollY;

  if (moveY < 800) {
    //section 1 is active
    nav_section_lists.forEach((el, index) => {
      if (index === 0) {
        nav_section_lists[index].classList = "activeState";
      } else {
        nav_section_lists[index].classList.remove("activeState");
      }
    });
  } else if (moveY > 800 && moveY < 1600) {
    //section 2 is active
    nav_section_lists.forEach((el, index) => {
      if (index === 1) {
        nav_section_lists[index].classList = "activeState";
      } else {
        nav_section_lists[index].classList.remove("activeState");
      }
    });
  } else if (moveY > 1600 && moveY < 2300) {
    //section 3 is active
    nav_section_lists.forEach((el, index) => {
      if (index === 2) {
        nav_section_lists[index].classList = "activeState";
      } else {
        nav_section_lists[index].classList.remove("activeState");
      }
    });
  } else {
    //section 4 is active
    nav_section_lists.forEach((el, index) => {
      if (index === 3) {
        nav_section_lists[index].classList = "activeState";
      } else {
        nav_section_lists[index].classList.remove("activeState");
      }
    });
  }
}

window.addEventListener("scroll", scrollEvent);

//scrollTo specific section list based on screen width
if (window.screen.width >= 1100) {
  nav_section_lists[0].addEventListener("click", function () {
    window.scrollTo({ top: 380, behavior: "smooth" });
  });

  nav_section_lists[1].addEventListener("click", function () {
    window.scrollTo({ top: 1033, behavior: "smooth" });
  });

  nav_section_lists[2].addEventListener("click", function () {
    window.scrollTo({ top: 1918, behavior: "smooth" });
  });

  nav_section_lists[3].addEventListener("click", function () {
    window.scrollTo({ top: 2600, behavior: "smooth" });
  });
} else if (window.screen.width >= 700 && window.screen.width < 1100) {
  nav_section_lists[0].addEventListener("click", function () {
    window.scrollTo({ top: 589, behavior: "smooth" });
  });

  nav_section_lists[1].addEventListener("click", function () {
    window.scrollTo({ top: 1384, behavior: "smooth" });
  });

  nav_section_lists[2].addEventListener("click", function () {
    window.scrollTo({ top: 2251, behavior: "smooth" });
  });

  nav_section_lists[3].addEventListener("click", function () {
    window.scrollTo({ top: 3060, behavior: "smooth" });
  });
} else if (window.screen.width > 300 && window.screen.width < 700) {
  nav_section_lists[0].addEventListener("click", function () {
    window.scrollTo({ top: 195, behavior: "smooth" });
    toggleState();
  });

  nav_section_lists[1].addEventListener("click", function () {
    window.scrollTo({ top: 1098, behavior: "smooth" });
    toggleState();
  });

  nav_section_lists[2].addEventListener("click", function () {
    window.scrollTo({ top: 2010, behavior: "smooth" });
    toggleState();
  });

  nav_section_lists[3].addEventListener("click", function () {
    window.scrollTo({ top: 2933, behavior: "smooth" });
    toggleState();
  });
}

//mobile navbar
const svg = document.querySelector("svg");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".closeIcon");

navbar_list.classList = "hidden";

function toggleState() {
  menuBtn.classList.toggle("hidden");
  closeBtn.classList.toggle("shown");
  navbar_list.classList.toggle("hidden");
}
svg.addEventListener("click", toggleState);
