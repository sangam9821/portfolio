// menu-navbar
const menu = document.querySelector("#menu");

function navMenu() {
  menu.classList.toggle("hidden");
}

// slider
let line1 = document.querySelector("#line-1");
let line2 = document.querySelector("#line-2");
let line3 = document.querySelector("#line-3");
let line4 = document.querySelector("#line-4");
let translateLTR = -40 * 4;
let translateRTL = 35 * 4;

function setIntersectobv(element, isLTR, speed) {
  let intersection = (entries) => {
    let isIntersecting = entries[0].isIntersecting;
    // console.log(element ,isIntersecting)
    if (isIntersecting) {
      document.addEventListener("scroll", scrollHandler);
    } else {
      document.removeEventListener("scroll", scrollHandler);
    }
  };
  let intersectobv = new IntersectionObserver(intersection);

  intersectobv.observe(element);

  function scrollHandler() {
    let translateX =
      (window.innerHeight - element.getBoundingClientRect().top) * speed;

    // isLTR
    let totalTranslate = 0;
    if (isLTR) {
      totalTranslate = translateX + translateLTR;
    } else {
      totalTranslate = -(translateX + translateRTL);
    }
    element.style.transform = `translateX(${totalTranslate}px)`;
  }
}

setIntersectobv(line1, true, 0.15);
setIntersectobv(line2, false, 0.2);
setIntersectobv(line3, true, 0.25);
setIntersectobv(line4, true, 0.8);

// redirect functions
function source() {
  window.location.href = "source.html";
}
function contact() {
  window.location.href = "contactme.html";
}

// FAQ SECTION

let dtElement = document.querySelectorAll("dt");

dtElement.forEach((element) => {
  element.addEventListener("click", () => {
    let ddID = element.getAttribute("aria-controls");
    let ddElement = document.getElementById(ddID);
    let arrowIcon = element.querySelectorAll("i")[0];

    ddElement.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotate-180");
  });
});
