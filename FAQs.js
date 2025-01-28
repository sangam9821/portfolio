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

const menu = document.querySelector("#menu");

function navMenu() {
  menu.classList.toggle("hidden");
}