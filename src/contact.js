export default function contact() {
const content = document.querySelector("#content");
content.replaceChildren();

const contactSection = document.createElement("div");
contactSection.classList.add("contactSection");

const contactHeader = document.createElement("h1");
contactHeader.classList.add("contactHeader");
contactHeader.textContent = "Get in Touch";

const contactSubtitle = document.createElement("p");
contactSubtitle.classList.add("contactSubtitle");
contactSubtitle.textContent = "We'd love to hear from you!";

// Visit Us
const visitUsGroup = document.createElement("div");
visitUsGroup.classList.add("visitUsGroup");

const visitUsHeader = document.createElement("h2");
visitUsHeader.classList.add("visitUsHeader");
visitUsHeader.textContent = "📍 Visit Us";

const dinerNameGroup = document.createElement("div");
dinerNameGroup.classList.add("dinerNameGroup");

const dinerName = document.createElement("h3");
dinerName.classList.add("dinerName");
dinerName.textContent = "Old Timer's Diner";

const addressGroup = document.createElement("div");
addressGroup.classList.add("addressGroup");

const streetAddress = document.createElement("p");
streetAddress.classList.add("streetAddress");
streetAddress.textContent = "123 Route 66";

const cityAddress = document.createElement("p");
cityAddress.classList.add("cityAddress");
cityAddress.textContent = "Springfield, Illinois 62704";

const countryAddress = document.createElement("p");
countryAddress.classList.add("countryAddress");
countryAddress.textContent = "United States";

const contactPhoneGroup = document.createElement("div");
contactPhoneGroup.classList.add("contactPhoneGroup");

const contactPhoneLabel = document.createElement("p");
contactPhoneLabel.classList.add("contactPhoneLabel");
contactPhoneLabel.textContent = "📞 Phone:";

const contactPhone = document.createElement("p");
contactPhone.classList.add("contactPhone");
contactPhone.textContent = "(217) 555-0142";

const contactEmailGroup = document.createElement("div");
contactEmailGroup.classList.add("contactEmailGroup");

const contactEmailLabel = document.createElement("p");
contactEmailLabel.classList.add("contactEmailLabel");
contactEmailLabel.textContent = "✉️ Email:";

const contactEmail = document.createElement("p");
contactEmail.classList.add("contactEmail");
contactEmail.textContent = "hello@oldtimersdiner.com";

// Opening Hours
const openingHoursGroup = document.createElement("div");
openingHoursGroup.classList.add("openingHoursGroup");

const openingHoursHeader = document.createElement("h2");
openingHoursHeader.classList.add("openingHoursHeader");
openingHoursHeader.textContent = "Opening Hours";

const mondayHoursGroup = document.createElement("div");
mondayHoursGroup.classList.add("mondayHoursGroup");

const monday = document.createElement("p");
monday.classList.add("monday");
monday.textContent = "Monday";

const mondayHours = document.createElement("p");
mondayHours.classList.add("mondayHours");
mondayHours.textContent = "7:00 AM - 9:00 PM";

const tuesdayHoursGroup = document.createElement("div");
tuesdayHoursGroup.classList.add("tuesdayHoursGroup");

const tuesday = document.createElement("p");
tuesday.classList.add("tuesday");
tuesday.textContent = "Tuesday";

const tuesdayHours = document.createElement("p");
tuesdayHours.classList.add("tuesdayHours");
tuesdayHours.textContent = "7:00 AM - 9:00 PM";

const wednesdayHoursGroup = document.createElement("div");
wednesdayHoursGroup.classList.add("wednesdayHoursGroup");

const wednesday = document.createElement("p");
wednesday.classList.add("wednesday");
wednesday.textContent = "Wednesday";

const wednesdayHours = document.createElement("p");
wednesdayHours.classList.add("wednesdayHours");
wednesdayHours.textContent = "7:00 AM - 9:00 PM";

const thursdayHoursGroup = document.createElement("div");
thursdayHoursGroup.classList.add("thursdayHoursGroup");

const thursday = document.createElement("p");
thursday.classList.add("thursday");
thursday.textContent = "Thursday";

const thursdayHours = document.createElement("p");
thursdayHours.classList.add("thursdayHours");
thursdayHours.textContent = "7:00 AM - 9:00 PM";

const fridayHoursGroup = document.createElement("div");
fridayHoursGroup.classList.add("fridayHoursGroup");

const friday = document.createElement("p");
friday.classList.add("friday");
friday.textContent = "Friday";

const fridayHours = document.createElement("p");
fridayHours.classList.add("fridayHours");
fridayHours.textContent = "7:00 AM - 10:00 PM";

const saturdayHoursGroup = document.createElement("div");
saturdayHoursGroup.classList.add("saturdayHoursGroup");

const saturday = document.createElement("p");
saturday.classList.add("saturday");
saturday.textContent = "Saturday";

const saturdayHours = document.createElement("p");
saturdayHours.classList.add("saturdayHours");
saturdayHours.textContent = "8:00 AM - 10:00 PM";

const sundayHoursGroup = document.createElement("div");
sundayHoursGroup.classList.add("sundayHoursGroup");

const sunday = document.createElement("p");
sunday.classList.add("sunday");
sunday.textContent = "Sunday";

const sundayHours = document.createElement("p");
sundayHours.classList.add("sundayHours");
sundayHours.textContent = "8:00 AM - 8:00 PM";

// Get in Touch
const getInTouchGroup = document.createElement("div");
getInTouchGroup.classList.add("getInTouchGroup");

const getInTouchHeader = document.createElement("h2");
getInTouchHeader.classList.add("getInTouchHeader");
getInTouchHeader.textContent = "Get in Touch";

const getInTouchDescr = document.createElement("p");
getInTouchDescr.classList.add("getInTouchDescr");
getInTouchDescr.textContent = "Have a question, a suggestion, or just want to say hello? We'd love to hear from you!";

const getInTouchPhoneGroup = document.createElement("div");
getInTouchPhoneGroup.classList.add("getInTouchPhoneGroup");

const getInTouchPhoneLabel = document.createElement("p");
getInTouchPhoneLabel.classList.add("getInTouchPhoneLabel");
getInTouchPhoneLabel.textContent = "Phone:";

const getInTouchPhone = document.createElement("p");
getInTouchPhone.classList.add("getInTouchPhone");
getInTouchPhone.textContent = "(217) 555-0142";

const getInTouchEmailGroup = document.createElement("div");
getInTouchEmailGroup.classList.add("getInTouchEmailGroup");

const getInTouchEmailLabel = document.createElement("p");
getInTouchEmailLabel.classList.add("getInTouchEmailLabel");
getInTouchEmailLabel.textContent = "Email:";

const getInTouchEmail = document.createElement("p");
getInTouchEmail.classList.add("getInTouchEmail");
getInTouchEmail.textContent = "hello@oldtimersdiner.com";

// Private Events & Group Reservations
const privateEventsGroup = document.createElement("div");
privateEventsGroup.classList.add("privateEventsGroup");

const privateEventsHeader = document.createElement("h2");
privateEventsHeader.classList.add("privateEventsHeader");
privateEventsHeader.textContent = "Private Events & Group Reservations";

const privateEventsDescr = document.createElement("p");
privateEventsDescr.classList.add("privateEventsDescr");
privateEventsDescr.textContent = "Planning a family gathering, birthday party, or breakfast with friends?";

const privateEventsDetails = document.createElement("p");
privateEventsDetails.classList.add("privateEventsDetails");
privateEventsDetails.textContent = "We welcome groups of all sizes. Contact us to discuss reservations and special arrangements.";

const privateEventsPhoneGroup = document.createElement("div");
privateEventsPhoneGroup.classList.add("privateEventsPhoneGroup");

const privateEventsPhoneLabel = document.createElement("p");
privateEventsPhoneLabel.classList.add("privateEventsPhoneLabel");
privateEventsPhoneLabel.textContent = "Call us:";

const privateEventsPhone = document.createElement("p");
privateEventsPhone.classList.add("privateEventsPhone");
privateEventsPhone.textContent = "(217) 555-0142";

// A Little Note from Us
const dinerNoteGroup = document.createElement("div");
dinerNoteGroup.classList.add("dinerNoteGroup");

const dinerNoteHeader = document.createElement("h2");
dinerNoteHeader.classList.add("dinerNoteHeader");
dinerNoteHeader.textContent = "A Little Note from Us";

const dinerNoteFirst = document.createElement("p");
dinerNoteFirst.classList.add("dinerNoteFirst");
dinerNoteFirst.textContent = "Good food tastes better when shared.";

const dinerNoteSecond = document.createElement("p");
dinerNoteSecond.classList.add("dinerNoteSecond");
dinerNoteSecond.textContent = "Whether you're stopping by for your morning coffee, joining us for a family dinner, or treating yourself to a slice of homemade pie, we're always happy to see you.";

// Append everything to the DOM
content.appendChild(contactSection);
contactSection.appendChild(contactHeader);
contactSection.appendChild(contactSubtitle);

// Visit Us
contactSection.appendChild(visitUsGroup);
visitUsGroup.appendChild(visitUsHeader);
visitUsGroup.appendChild(dinerNameGroup);
dinerNameGroup.appendChild(dinerName);
visitUsGroup.appendChild(addressGroup);
addressGroup.appendChild(streetAddress);
addressGroup.appendChild(cityAddress);
addressGroup.appendChild(countryAddress);
visitUsGroup.appendChild(contactPhoneGroup);
contactPhoneGroup.appendChild(contactPhoneLabel);
contactPhoneGroup.appendChild(contactPhone);
visitUsGroup.appendChild(contactEmailGroup);
contactEmailGroup.appendChild(contactEmailLabel);
contactEmailGroup.appendChild(contactEmail);

// Opening Hours
contactSection.appendChild(openingHoursGroup);
openingHoursGroup.appendChild(openingHoursHeader);
openingHoursGroup.appendChild(mondayHoursGroup);
mondayHoursGroup.appendChild(monday);
mondayHoursGroup.appendChild(mondayHours);
openingHoursGroup.appendChild(tuesdayHoursGroup);
tuesdayHoursGroup.appendChild(tuesday);
tuesdayHoursGroup.appendChild(tuesdayHours);
openingHoursGroup.appendChild(wednesdayHoursGroup);
wednesdayHoursGroup.appendChild(wednesday);
wednesdayHoursGroup.appendChild(wednesdayHours);
openingHoursGroup.appendChild(thursdayHoursGroup);
thursdayHoursGroup.appendChild(thursday);
thursdayHoursGroup.appendChild(thursdayHours);
openingHoursGroup.appendChild(fridayHoursGroup);
fridayHoursGroup.appendChild(friday);
fridayHoursGroup.appendChild(fridayHours);
openingHoursGroup.appendChild(saturdayHoursGroup);
saturdayHoursGroup.appendChild(saturday);
saturdayHoursGroup.appendChild(saturdayHours);
openingHoursGroup.appendChild(sundayHoursGroup);
sundayHoursGroup.appendChild(sunday);
sundayHoursGroup.appendChild(sundayHours);

// Get in Touch
contactSection.appendChild(getInTouchGroup);
getInTouchGroup.appendChild(getInTouchHeader);
getInTouchGroup.appendChild(getInTouchDescr);
getInTouchGroup.appendChild(getInTouchPhoneGroup);
getInTouchPhoneGroup.appendChild(getInTouchPhoneLabel);
getInTouchPhoneGroup.appendChild(getInTouchPhone);
getInTouchGroup.appendChild(getInTouchEmailGroup);
getInTouchEmailGroup.appendChild(getInTouchEmailLabel);
getInTouchEmailGroup.appendChild(getInTouchEmail);

// Private Events & Group Reservations
contactSection.appendChild(privateEventsGroup);
privateEventsGroup.appendChild(privateEventsHeader);
privateEventsGroup.appendChild(privateEventsDescr);
privateEventsGroup.appendChild(privateEventsDetails);
privateEventsGroup.appendChild(privateEventsPhoneGroup);
privateEventsPhoneGroup.appendChild(privateEventsPhoneLabel);
privateEventsPhoneGroup.appendChild(privateEventsPhone);

// A Little Note from Us
contactSection.appendChild(dinerNoteGroup);
dinerNoteGroup.appendChild(dinerNoteHeader);
dinerNoteGroup.appendChild(dinerNoteFirst);
dinerNoteGroup.appendChild(dinerNoteSecond);
}