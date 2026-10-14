import "./style.css";
import Logo from "./images/Logo.svg";
import homePage from "./home.js";
import menu from "./menu.js";
import contact from "./contact.js";

const header = document.querySelector("header");
const footer = document.querySelector("#footer");

const upperLine = document.createElement("hr");
upperLine.classList.add("upperline");

const underLine = document.createElement("hr");
underLine.classList.add("underline");;

document.body.appendChild(upperLine);
document.body.appendChild(underLine);

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
const menuButton = document.querySelector("#menu-btn");
const contactButton = document.querySelector("#contact-btn");

logo.addEventListener("click", homePage);
homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menu);
contactButton.addEventListener("click", contact);


homePage();