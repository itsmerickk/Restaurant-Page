export default function homePage() {
const content = document.querySelector("#content");
content.replaceChildren();

const upperLine = document.createElement("hr");
upperLine.classList.add("upperline");

const underLine = document.createElement("hr");
underLine.classList.add("underline");;

const mainSection = document.createElement("div");
mainSection.classList.add("mainSection");

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

const toMenuButton = document.createElement("button");
toMenuButton.classList.add("to-menu-button");
toMenuButton.textContent = "Explore Our Menu";

const pageSeparator = document.createElement("p");
pageSeparator.classList.add("page-separator");
pageSeparator.textContent = "• ─────────────────────────────────────────────────── •";

const favoritesHeader = document.createElement("h2");
favoritesHeader.classList.add("favorites-header");
favoritesHeader.textContent = "Our Favorites";

const favoritesContainer = document.createElement("div");
favoritesContainer.classList.add("favorites-container");

const favorite1 = document.createElement("div");
favorite1.classList.add("favorite");

const favorite2 = document.createElement("div");
favorite2.classList.add("favorite");

const favorite3 = document.createElement("div");
favorite3.classList.add("favorite");

const favorite1Visual = document.createElement("p");
favorite1Visual.classList.add("favorite-visual");
favorite1Visual.textContent = "🍔 The Classic Cheeseburger";

const favorite2Visual = document.createElement("p");
favorite2Visual.classList.add("favorite-visual");
favorite2Visual.textContent = "🥞 Old-Fashioned Pancakes";   

const favorite3Visual = document.createElement("p");
favorite3Visual.classList.add("favorite-visual");
favorite3Visual.textContent = "🍰 Homemade Apple Pie";

const favorite1Description = document.createElement("p");
favorite1Description.classList.add("favorite-description");
favorite1Description.textContent = "A juicy beef patty, melted American cheese, crisp lettuce, fresh tomato, and our signature diner sauce, served on a toasted bun.";

const favorite2Description = document.createElement("p");
favorite2Description.classList.add("favorite-description");
favorite2Description.textContent = "A stack of fluffy, golden pancakes served with butter and maple syrup. The perfect way to start your morning.";

const favorite3Description = document.createElement("p");
favorite3Description.classList.add("favorite-description");
favorite3Description.textContent = "Warm apple pie with a buttery, flaky crust, cinnamon-spiced apples, and a taste of nostalgia in every bite.";

const pageSeparator2 = document.createElement("p");
pageSeparator2.classList.add("page-separator2");
pageSeparator2.textContent = "• ─────────────────────────────────────────────────── •";

const aboutUsHeader = document.createElement("h2");
aboutUsHeader.classList.add("about-us-header");
aboutUsHeader.textContent = "A Little About Us";

const aboutUsHeader2 = document.createElement("h3");
aboutUsHeader2.classList.add("about-us-header2");
aboutUsHeader2.textContent = "A Taste of the Good Old Days";

const aboutUsText = document.createElement("p");
aboutUsText.classList.add("about-us-text");
aboutUsText.textContent = `At Old Timer's Diner, we believe the best memories are made around the table. 
                           Inspired by the classic American diners of the 1950s, we're all about hearty meals, friendly faces, and the simple pleasure of good food. 
                           Whether you're stopping by for a quick breakfast, enjoying lunch with friends, or satisfying a late-night craving, there's always a place for you here.`;

const pageSeparator3 = document.createElement("p");
pageSeparator3.classList.add("page-separator3");
pageSeparator3.textContent = "• ─────────────────────────────────────────────────── •";

const ourLocation = document.createElement("h2");
ourLocation.classList.add("ourLocation");
ourLocation.textContent = `Come On In!`;

const locationContainer = document.createElement("div");
locationContainer.classList.add("locationContainer");

const locationBox1 = document.createElement("div");
locationBox1.classList.add("locationBox");

const locationBox2 = document.createElement("div");
locationBox2.classList.add("locationBox");

const locationBox3 = document.createElement("div");
locationBox3.classList.add("locationBox");

const ourLocationHeader2 = document.createElement("h3");
ourLocationHeader2.classList.add("ourLocationHeader");
ourLocationHeader2.textContent = ` Pull Up a Chair!`;

const location = document.createElement("p");
location.classList.add("location");
location.textContent = `123 Main Street, Somewhere, USA`;

const workingHoursHeader = document.createElement("h3");
workingHoursHeader.classList.add("workingHoursHeader");
workingHoursHeader.textContent = "🕒 Opening Hours:";

const workingHours = document.createElement("ul");
workingHours.classList.add("hours");

const workingHours1 = document.createElement("li");
workingHours1.textContent = "Monday - Friday: 7 AM - 9 PM";

const workingHours2 = document.createElement("li");
workingHours2.textContent = "Saturday - Sunday: 8 AM - 10 PM";

const waitingHeader = document.createElement("h3");
waitingHeader.classList.add("waitingHeader");
waitingHeader.textContent = "☕ What's Waiting for You?";

const waitingList = document.createElement("ul");
waitingList.classList.add("waitingList");

const waitingItem1 = document.createElement("li");
waitingItem1.textContent = "Classic American comfort food";

const waitingItem2 = document.createElement("li");
waitingItem2.textContent = "Freshly brewed coffee";

const waitingItem3 = document.createElement("li");
waitingItem3.textContent = "Homemade desserts";

const waitingItem4 = document.createElement("li");
waitingItem4.textContent = "A warm, welcoming atmosphere";



content.appendChild(upperLine);
content.appendChild(underLine);
content.appendChild(mainSection);
mainSection.appendChild(contentHeader);
mainSection.appendChild(contentHeader2);
mainSection.appendChild(contentHeader3);
mainSection.appendChild(contentText);
mainSection.appendChild(toMenuButton);
mainSection.appendChild(pageSeparator);
mainSection.appendChild(favoritesHeader);
mainSection.appendChild(favoritesContainer);
favoritesContainer.appendChild(favorite1);
favoritesContainer.appendChild(favorite2);
favoritesContainer.appendChild(favorite3);
favorite1.appendChild(favorite1Visual);
favorite2.appendChild(favorite2Visual);
favorite3.appendChild(favorite3Visual);
favorite1.appendChild(favorite1Description);
favorite2.appendChild(favorite2Description);
favorite3.appendChild(favorite3Description);
mainSection.appendChild(pageSeparator2);
mainSection.appendChild(aboutUsHeader);
mainSection.appendChild(aboutUsHeader2);
mainSection.appendChild(aboutUsText);
mainSection.appendChild(pageSeparator3);
mainSection.appendChild(ourLocation);
mainSection.appendChild(locationContainer);
locationContainer.appendChild(locationBox1);
locationContainer.appendChild(locationBox2);
locationContainer.appendChild(locationBox3);
locationBox1.appendChild(ourLocationHeader2);
locationBox1.appendChild(location);
locationBox2.appendChild(workingHoursHeader);
locationBox2.appendChild(workingHours);
workingHours.appendChild(workingHours1);
workingHours.appendChild(workingHours2);
locationBox3.appendChild(waitingHeader);
locationBox3.appendChild(waitingList);
waitingList.appendChild(waitingItem1);
waitingList.appendChild(waitingItem2);
waitingList.appendChild(waitingItem3);
waitingList.appendChild(waitingItem4);
}