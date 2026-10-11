import "./style.css";
import Logo from "./images/Logo.svg";

const header = document.querySelector("header");
const underLine = document.createElement("hr");
underLine.classList.add("underline");
const upperLine = document.createElement("hr");
upperLine.classList.add("upperline");

const logo = new Image();
logo.src = Logo;
logo.alt = "Logo";
logo.classList.add("logo");


header.prepend(logo);
document.body.appendChild(upperLine);
document.body.appendChild(underLine);