import "./style.css";
import Logo from "./images/Logo.svg";
import homePage from "./home.js";

const header = document.querySelector("header");
const footer = document.querySelector("#footer");

const logo = new Image();
logo.src = Logo;
logo.alt = "Old Timer's Diner";
logo.classList.add("logo");

header.prepend(logo);

const footerText = document.createElement("p");
footerText.classList.add("footerText");
footerText.textContent = "OLD TIMER'S DINER • GOOD TIMES, ALWAYS";

document.body.appendChild(footer);
footer.appendChild(footerText);

const homeButton = document.querySelector("#home-btn");

homeButton.addEventListener("click", homePage);
logo.addEventListener("click", homePage);

homePage();