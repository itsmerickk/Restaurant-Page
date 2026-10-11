import "./style.css";
import Logo from "./images/Logo.svg";

const header = document.querySelector("header");
const upperLine = document.createElement("hr");
upperLine.classList.add("upperline");
const underLine = document.createElement("hr");
underLine.classList.add("underline");;
const fieldset = document.createElement("fieldset");
fieldset.classList.add("fieldset");
const contentHeader = document.createElement("legend");
contentHeader.classList.add("content-header");
contentHeader.textContent = "Welcome to";
const contentHeader2 = document.createElement("legend");
contentHeader2.classList.add("content-header2");
contentHeader2.textContent = "⎯ Old Timer's Diner ⎯";
const contentHeader3 = document.createElement("legend");
contentHeader3.classList.add("content-header3");
contentHeader3.textContent = "Good food. Good company. Good old times.";
const contentText = document.createElement("p");
contentText.classList.add("content-text");
contentText.textContent = `Step back in time and enjoy the comfort of classic American diner food. 
                           From fluffy pancakes and sizzling burgers to homemade pies and freshly brewed coffee, we've got a seat waiting just for you.`;

const logo = new Image();
logo.src = Logo;
logo.alt = "Logo";
logo.classList.add("logo");


header.prepend(logo);
document.body.appendChild(upperLine);
document.body.appendChild(underLine);
document.body.appendChild(fieldset);
fieldset.appendChild(contentHeader);
fieldset.appendChild(contentHeader2);
fieldset.appendChild(contentHeader3);
fieldset.appendChild(contentText);