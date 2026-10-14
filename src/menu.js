export default function menu() {

const content = document.querySelector("#content");
content.replaceChildren();

const menuSection = document.createElement("div");
menuSection.classList.add("menuSection");

const menuHeader = document.createElement("h1");
menuHeader.classList.add("mainSecHeader");
menuHeader.textContent = "Menu";

// Breakfast
const breakfastGroup = document.createElement("div");
breakfastGroup.classList.add("breakfastGroup");

const breakfast = document.createElement("h2");
breakfast.classList.add("breakfast");
breakfast.textContent = "🍳 Breakfast";

const pancakesGroup = document.createElement("div");
pancakesGroup.classList.add("pancakesGroup");

const pancakes = document.createElement("h4");
pancakes.classList.add("pancakes");
pancakes.textContent = "Old-Fashioned Pancakes";

const pancakesDescr = document.createElement("p");
pancakesDescr.classList.add("pancakesDescr");
pancakesDescr.textContent = "Fluffy buttermilk pancakes served with butter and maple syrup.";

const pancakePrice = document.createElement("p");
pancakePrice.classList.add("pancakePrice");
pancakePrice.textContent = "$8.99";

const classicBreakfastGroup = document.createElement("div");
classicBreakfastGroup.classList.add("classicBreakfastGroup");

const classicBreakfast = document.createElement("h4");
classicBreakfast.classList.add("classicBreakfast");
classicBreakfast.textContent = "Classic American Breakfast";

const classicBreakfastDescr = document.createElement("p");
classicBreakfastDescr.classList.add("classicBreakfastDescr");
classicBreakfastDescr.textContent = "Two eggs, crispy bacon, hash browns, and toast.";

const classicBreafastPrice = document.createElement("p");
classicBreafastPrice.classList.add("classicBreafastPrice");
classicBreafastPrice.textContent = "$11.99";

const frenchToastGroup = document.createElement("div");
frenchToastGroup.classList.add("frenchToastGroup");

const frenchToast = document.createElement("h4");
frenchToast.classList.add("frenchToast");
frenchToast.textContent = "French Toast";

const frenchToastDescr = document.createElement("p");
frenchToastDescr.classList.add("frenchToastDescr");
frenchToastDescr.textContent = "Thick slices of golden-brown bread dusted with powdered sugar.";

const frenchToastPrice = document.createElement("p");
frenchToastPrice.classList.add("frenchToastPrice");
frenchToastPrice.textContent = "$8.49";

const breakfastSandwichGroup = document.createElement("div");
breakfastSandwichGroup.classList.add("breakfastSandwichGroup");

const breakfastSandwich = document.createElement("h4");
breakfastSandwich.classList.add("breakfastSandwich");
breakfastSandwich.textContent = "Breakfast Sandwich";

const breakfastSandwichDescr = document.createElement("p");
breakfastSandwichDescr.classList.add("breakfastSandwichDescr");
breakfastSandwichDescr.textContent = "Fried egg, American cheese, and bacon on a toasted bun.";

const breakfastSandwichPrice = document.createElement("p");
breakfastSandwichPrice.classList.add("breakfastSandwichPrice");
breakfastSandwichPrice.textContent = "$7.99";

const biscuitsGravyGroup = document.createElement("div");
biscuitsGravyGroup.classList.add("biscuitsGravyGroup");

const biscuitsGravy = document.createElement("h4");
biscuitsGravy.classList.add("biscuitsGravy");
biscuitsGravy.textContent = "Country Biscuits & Gravy";

const biscuitsGravyDescr = document.createElement("p");
biscuitsGravyDescr.classList.add("biscuitsGravyDescr");
biscuitsGravyDescr.textContent = "Warm buttermilk biscuits topped with creamy sausage gravy.";

const biscuitsGravyPrice = document.createElement("p");
biscuitsGravyPrice.classList.add("biscuitsGravyPrice");
biscuitsGravyPrice.textContent = "$9.49";

const westernOmeletGroup = document.createElement("div");
westernOmeletGroup.classList.add("westernOmeletGroup");

const westernOmelet = document.createElement("h4");
westernOmelet.classList.add("westernOmelet");
westernOmelet.textContent = "Western Omelet";

const westernOmeletDescr = document.createElement("p");
westernOmeletDescr.classList.add("westernOmeletDescr");
westernOmeletDescr.textContent = "Three-egg omelet with ham, peppers, onions, and cheddar cheese.";

const westernOmeletPrice = document.createElement("p");
westernOmeletPrice.classList.add("westernOmeletPrice");
westernOmeletPrice.textContent = "$10.99";

const pageSeparator = document.createElement("p");
pageSeparator.classList.add("page-separator");
pageSeparator.textContent = "• ─────────────────────────────────────────────────── •";

// 2. Burgers & Sandwiches
const burgersGroup = document.createElement("div");
burgersGroup.classList.add("burgersGroup");

const burgers = document.createElement("h2");
burgers.classList.add("burgers");
burgers.textContent = "🍔 Burgers & Sandwiches";

const classicCheeseburgerGroup = document.createElement("div");
classicCheeseburgerGroup.classList.add("classicCheeseburgerGroup");

const classicCheeseburger = document.createElement("h4");
classicCheeseburger.classList.add("classicCheeseburger");
classicCheeseburger.textContent = "The Classic Cheeseburger";

const classicCheeseburgerDescr = document.createElement("p");
classicCheeseburgerDescr.classList.add("classicCheeseburgerDescr");
classicCheeseburgerDescr.textContent = "Beef patty, American cheese, lettuce, tomato, onion, and diner sauce.";

const classicCheeseburgerPrice = document.createElement("p");
classicCheeseburgerPrice.classList.add("classicCheeseburgerPrice");
classicCheeseburgerPrice.textContent = "$12.99";

const doubleTroubleBurgerGroup = document.createElement("div");
doubleTroubleBurgerGroup.classList.add("doubleTroubleBurgerGroup");

const doubleTroubleBurger = document.createElement("h4");
doubleTroubleBurger.classList.add("doubleTroubleBurger");
doubleTroubleBurger.textContent = "Double Trouble Burger";

const doubleTroubleBurgerDescr = document.createElement("p");
doubleTroubleBurgerDescr.classList.add("doubleTroubleBurgerDescr");
doubleTroubleBurgerDescr.textContent = "Two beef patties, double American cheese, pickles, and special sauce.";

const doubleTroubleBurgerPrice = document.createElement("p");
doubleTroubleBurgerPrice.classList.add("doubleTroubleBurgerPrice");
doubleTroubleBurgerPrice.textContent = "$15.99";

const oldTimersBurgerGroup = document.createElement("div");
oldTimersBurgerGroup.classList.add("oldTimersBurgerGroup");

const oldTimersBurger = document.createElement("h4");
oldTimersBurger.classList.add("oldTimersBurger");
oldTimersBurger.textContent = "The Old Timer's Burger";

const oldTimersBurgerDescr = document.createElement("p");
oldTimersBurgerDescr.classList.add("oldTimersBurgerDescr");
oldTimersBurgerDescr.textContent = "Beef patty, crispy bacon, cheddar cheese, caramelized onions, and BBQ sauce.";

const oldTimersBurgerPrice = document.createElement("p");
oldTimersBurgerPrice.classList.add("oldTimersBurgerPrice");
oldTimersBurgerPrice.textContent = "$14.99";

const crispyChickenSandwichGroup = document.createElement("div");
crispyChickenSandwichGroup.classList.add("crispyChickenSandwichGroup");

const crispyChickenSandwich = document.createElement("h4");
crispyChickenSandwich.classList.add("crispyChickenSandwich");
crispyChickenSandwich.textContent = "Crispy Chicken Sandwich";

const crispyChickenSandwichDescr = document.createElement("p");
crispyChickenSandwichDescr.classList.add("crispyChickenSandwichDescr");
crispyChickenSandwichDescr.textContent = "Crispy fried chicken, lettuce, tomato, and mayonnaise on a toasted bun.";

const crispyChickenSandwichPrice = document.createElement("p");
crispyChickenSandwichPrice.classList.add("crispyChickenSandwichPrice");
crispyChickenSandwichPrice.textContent = "$12.49";

const classicBLTGroup = document.createElement("div");
classicBLTGroup.classList.add("classicBLTGroup");

const classicBLT = document.createElement("h4");
classicBLT.classList.add("classicBLT");
classicBLT.textContent = "Classic BLT";

const classicBLTDescr = document.createElement("p");
classicBLTDescr.classList.add("classicBLTDescr");
classicBLTDescr.textContent = "Crispy bacon, fresh lettuce, and tomato with mayonnaise on toasted bread.";

const classicBLTPrice = document.createElement("p");
classicBLTPrice.classList.add("classicBLTPrice");
classicBLTPrice.textContent = "$9.99";

const phillyCheesesteakGroup = document.createElement("div");
phillyCheesesteakGroup.classList.add("phillyCheesesteakGroup");

const phillyCheesesteak = document.createElement("h4");
phillyCheesesteak.classList.add("phillyCheesesteak");
phillyCheesesteak.textContent = "Philly Cheesesteak";

const phillyCheesesteakDescr = document.createElement("p");
phillyCheesesteakDescr.classList.add("phillyCheesesteakDescr");
phillyCheesesteakDescr.textContent = "Thinly sliced beef, sautéed onions, peppers, and melted cheese on a hoagie roll.";

const phillyCheesesteakPrice = document.createElement("p");
phillyCheesesteakPrice.classList.add("phillyCheesesteakPrice");
phillyCheesesteakPrice.textContent = "$13.99";

const pageSeparator2 = document.createElement("p");
pageSeparator2.classList.add("page-separator");
pageSeparator2.textContent = "• ─────────────────────────────────────────────────── •";

// 3. Diner Classics
const dinerClassicsGroup = document.createElement("div");
dinerClassicsGroup.classList.add("dinerClassicsGroup");

const dinerClassics = document.createElement("h2");
dinerClassics.classList.add("dinerClassics");
dinerClassics.textContent = "🍽️ Diner Classics";

const fishAndChipsGroup = document.createElement("div");
fishAndChipsGroup.classList.add("fishAndChipsGroup");

const fishAndChips = document.createElement("h4");
fishAndChips.classList.add("fishAndChips");
fishAndChips.textContent = "Fish & Chips";

const fishAndChipsDescr = document.createElement("p");
fishAndChipsDescr.classList.add("fishAndChipsDescr");
fishAndChipsDescr.textContent = "Crispy battered fish served with fries and tartar sauce.";

const fishAndChipsPrice = document.createElement("p");
fishAndChipsPrice.classList.add("fishAndChipsPrice");
fishAndChipsPrice.textContent = "$13.99";

const chickenFriedSteakGroup = document.createElement("div");
chickenFriedSteakGroup.classList.add("chickenFriedSteakGroup");

const chickenFriedSteak = document.createElement("h4");
chickenFriedSteak.classList.add("chickenFriedSteak");
chickenFriedSteak.textContent = "Chicken Fried Steak";

const chickenFriedSteakDescr = document.createElement("p");
chickenFriedSteakDescr.classList.add("chickenFriedSteakDescr");
chickenFriedSteakDescr.textContent = "Breaded beef steak topped with creamy country gravy, served with mashed potatoes.";

const chickenFriedSteakPrice = document.createElement("p");
chickenFriedSteakPrice.classList.add("chickenFriedSteakPrice");
chickenFriedSteakPrice.textContent = "$15.99";

const meatloafDinnerGroup = document.createElement("div");
meatloafDinnerGroup.classList.add("meatloafDinnerGroup");

const meatloafDinner = document.createElement("h4");
meatloafDinner.classList.add("meatloafDinner");
meatloafDinner.textContent = "Meatloaf Dinner";

const meatloafDinnerDescr = document.createElement("p");
meatloafDinnerDescr.classList.add("meatloafDinnerDescr");
meatloafDinnerDescr.textContent = "Homemade-style meatloaf with mashed potatoes and brown gravy.";

const meatloafDinnerPrice = document.createElement("p");
meatloafDinnerPrice.classList.add("meatloafDinnerPrice");
meatloafDinnerPrice.textContent = "$14.99";

const macAndCheeseGroup = document.createElement("div");
macAndCheeseGroup.classList.add("macAndCheeseGroup");

const macAndCheese = document.createElement("h4");
macAndCheese.classList.add("macAndCheese");
macAndCheese.textContent = "Mac & Cheese";

const macAndCheeseDescr = document.createElement("p");
macAndCheeseDescr.classList.add("macAndCheeseDescr");
macAndCheeseDescr.textContent = "Creamy macaroni baked with a blend of melted cheeses.";

const macAndCheesePrice = document.createElement("p");
macAndCheesePrice.classList.add("macAndCheesePrice");
macAndCheesePrice.textContent = "$10.99";

const bbqPorkRibsGroup = document.createElement("div");
bbqPorkRibsGroup.classList.add("bbqPorkRibsGroup");

const bbqPorkRibs = document.createElement("h4");
bbqPorkRibs.classList.add("bbqPorkRibs");
bbqPorkRibs.textContent = "BBQ Pork Ribs";

const bbqPorkRibsDescr = document.createElement("p");
bbqPorkRibsDescr.classList.add("bbqPorkRibsDescr");
bbqPorkRibsDescr.textContent = "Tender pork ribs coated in smoky barbecue sauce, served with fries and coleslaw.";

const bbqPorkRibsPrice = document.createElement("p");
bbqPorkRibsPrice.classList.add("bbqPorkRibsPrice");
bbqPorkRibsPrice.textContent = "$18.99";

const grilledCheeseSoupGroup = document.createElement("div");
grilledCheeseSoupGroup.classList.add("grilledCheeseSoupGroup");

const grilledCheeseSoup = document.createElement("h4");
grilledCheeseSoup.classList.add("grilledCheeseSoup");
grilledCheeseSoup.textContent = "Grilled Cheese & Tomato Soup";

const grilledCheeseSoupDescr = document.createElement("p");
grilledCheeseSoupDescr.classList.add("grilledCheeseSoupDescr");
grilledCheeseSoupDescr.textContent = "Golden grilled cheese sandwich served with warm tomato soup.";

const grilledCheeseSoupPrice = document.createElement("p");
grilledCheeseSoupPrice.classList.add("grilledCheeseSoupPrice");
grilledCheeseSoupPrice.textContent = "$9.99";

const pageSeparator3 = document.createElement("p");
pageSeparator3.classList.add("page-separator");
pageSeparator3.textContent = "• ─────────────────────────────────────────────────── •";

// 4. Salads & Lighter Bites
const saladsGroup = document.createElement("div");
saladsGroup.classList.add("saladsGroup");

const salads = document.createElement("h2");
salads.classList.add("salads");
salads.textContent = "🥗 Salads & Lighter Bites";

const caesarSaladGroup = document.createElement("div");
caesarSaladGroup.classList.add("caesarSaladGroup");

const caesarSalad = document.createElement("h4");
caesarSalad.classList.add("caesarSalad");
caesarSalad.textContent = "Classic Caesar Salad";

const caesarSaladDescr = document.createElement("p");
caesarSaladDescr.classList.add("caesarSaladDescr");
caesarSaladDescr.textContent = "Crisp romaine lettuce, Parmesan cheese, croutons, and Caesar dressing.";

const caesarSaladPrice = document.createElement("p");
caesarSaladPrice.classList.add("caesarSaladPrice");
caesarSaladPrice.textContent = "$9.99";

const grilledChickenSaladGroup = document.createElement("div");
grilledChickenSaladGroup.classList.add("grilledChickenSaladGroup");

const grilledChickenSalad = document.createElement("h4");
grilledChickenSalad.classList.add("grilledChickenSalad");
grilledChickenSalad.textContent = "Grilled Chicken Salad";

const grilledChickenSaladDescr = document.createElement("p");
grilledChickenSaladDescr.classList.add("grilledChickenSaladDescr");
grilledChickenSaladDescr.textContent = "Grilled chicken, mixed greens, tomatoes, cucumbers, and ranch dressing.";

const grilledChickenSaladPrice = document.createElement("p");
grilledChickenSaladPrice.classList.add("grilledChickenSaladPrice");
grilledChickenSaladPrice.textContent = "$12.49";

const gardenSaladGroup = document.createElement("div");
gardenSaladGroup.classList.add("gardenSaladGroup");

const gardenSalad = document.createElement("h4");
gardenSalad.classList.add("gardenSalad");
gardenSalad.textContent = "Garden Salad";

const gardenSaladDescr = document.createElement("p");
gardenSaladDescr.classList.add("gardenSaladDescr");
gardenSaladDescr.textContent = "Fresh lettuce, tomatoes, cucumbers, carrots, and house dressing.";

const gardenSaladPrice = document.createElement("p");
gardenSaladPrice.classList.add("gardenSaladPrice");
gardenSaladPrice.textContent = "$7.99";

const chickenTendersGroup = document.createElement("div");
chickenTendersGroup.classList.add("chickenTendersGroup");

const chickenTenders = document.createElement("h4");
chickenTenders.classList.add("chickenTenders");
chickenTenders.textContent = "Chicken Tenders";

const chickenTendersDescr = document.createElement("p");
chickenTendersDescr.classList.add("chickenTendersDescr");
chickenTendersDescr.textContent = "Crispy chicken strips served with fries and your choice of dipping sauce.";

const chickenTendersPrice = document.createElement("p");
chickenTendersPrice.classList.add("chickenTendersPrice");
chickenTendersPrice.textContent = "$11.99";

const pageSeparator4 = document.createElement("p");
pageSeparator4.classList.add("page-separator");
pageSeparator4.textContent = "• ─────────────────────────────────────────────────── •";

// 5. Desserts
const dessertsGroup = document.createElement("div");
dessertsGroup.classList.add("dessertsGroup");

const desserts = document.createElement("h2");
desserts.classList.add("desserts");
desserts.textContent = "🥧 Desserts";

const applePieGroup = document.createElement("div");
applePieGroup.classList.add("applePieGroup");

const applePie = document.createElement("h4");
applePie.classList.add("applePie");
applePie.textContent = "Homemade Apple Pie";

const applePieDescr = document.createElement("p");
applePieDescr.classList.add("applePieDescr");
applePieDescr.textContent = "Warm apple pie with a buttery crust and cinnamon-spiced apples.";

const applePiePrice = document.createElement("p");
applePiePrice.classList.add("applePiePrice");
applePiePrice.textContent = "$5.99";

const cheesecakeGroup = document.createElement("div");
cheesecakeGroup.classList.add("cheesecakeGroup");

const cheesecake = document.createElement("h4");
cheesecake.classList.add("cheesecake");
cheesecake.textContent = "Classic Cheesecake";

const cheesecakeDescr = document.createElement("p");
cheesecakeDescr.classList.add("cheesecakeDescr");
cheesecakeDescr.textContent = "Creamy New York-style cheesecake with a graham cracker crust.";

const cheesecakePrice = document.createElement("p");
cheesecakePrice.classList.add("cheesecakePrice");
cheesecakePrice.textContent = "$6.99";

const brownieSundaeGroup = document.createElement("div");
brownieSundaeGroup.classList.add("brownieSundaeGroup");

const brownieSundae = document.createElement("h4");
brownieSundae.classList.add("brownieSundae");
brownieSundae.textContent = "Chocolate Brownie Sundae";

const brownieSundaeDescr = document.createElement("p");
brownieSundaeDescr.classList.add("brownieSundaeDescr");
brownieSundaeDescr.textContent = "Warm chocolate brownie topped with vanilla ice cream and chocolate sauce.";

const brownieSundaePrice = document.createElement("p");
brownieSundaePrice.classList.add("brownieSundaePrice");
brownieSundaePrice.textContent = "$7.49";

const bananaSplitGroup = document.createElement("div");
bananaSplitGroup.classList.add("bananaSplitGroup");

const bananaSplit = document.createElement("h4");
bananaSplit.classList.add("bananaSplit");
bananaSplit.textContent = "Banana Split";

const bananaSplitDescr = document.createElement("p");
bananaSplitDescr.classList.add("bananaSplitDescr");
bananaSplitDescr.textContent = "Three scoops of ice cream topped with banana, chocolate sauce, and whipped cream.";

const bananaSplitPrice = document.createElement("p");
bananaSplitPrice.classList.add("bananaSplitPrice");
bananaSplitPrice.textContent = "$8.49";

const milkshakeGroup = document.createElement("div");
milkshakeGroup.classList.add("milkshakeGroup");

const milkshake = document.createElement("h4");
milkshake.classList.add("milkshake");
milkshake.textContent = "Old-Fashioned Milkshake";

const milkshakeDescr = document.createElement("p");
milkshakeDescr.classList.add("milkshakeDescr");
milkshakeDescr.textContent = "Thick, creamy milkshake available in vanilla, chocolate, or strawberry.";

const milkshakePrice = document.createElement("p");
milkshakePrice.classList.add("milkshakePrice");
milkshakePrice.textContent = "$6.49";

const peachCobblerGroup = document.createElement("div");
peachCobblerGroup.classList.add("peachCobblerGroup");

const peachCobbler = document.createElement("h4");
peachCobbler.classList.add("peachCobbler");
peachCobbler.textContent = "Peach Cobbler";

const peachCobblerDescr = document.createElement("p");
peachCobblerDescr.classList.add("peachCobblerDescr");
peachCobblerDescr.textContent = "Warm baked peaches beneath a golden crust, served with vanilla ice cream.";

const peachCobblerPrice = document.createElement("p");
peachCobblerPrice.classList.add("peachCobblerPrice");
peachCobblerPrice.textContent = "$6.49";

const pageSeparator5 = document.createElement("p");
pageSeparator5.classList.add("page-separator");
pageSeparator5.textContent = "• ─────────────────────────────────────────────────── •";

// 6. Drinks
const drinksGroup = document.createElement("div");
drinksGroup.classList.add("drinksGroup");

const drinks = document.createElement("h2");
drinks.classList.add("drinks");
drinks.textContent = "☕ Drinks";

const coffeeGroup = document.createElement("div");
coffeeGroup.classList.add("coffeeGroup");

const coffee = document.createElement("h4");
coffee.classList.add("coffee");
coffee.textContent = "Freshly Brewed Coffee";

const coffeeDescr = document.createElement("p");
coffeeDescr.classList.add("coffeeDescr");
coffeeDescr.textContent = "Classic diner coffee, served hot.";

const coffeePrice = document.createElement("p");
coffeePrice.classList.add("coffeePrice");
coffeePrice.textContent = "$2.49";

const icedCoffeeGroup = document.createElement("div");
icedCoffeeGroup.classList.add("icedCoffeeGroup");

const icedCoffee = document.createElement("h4");
icedCoffee.classList.add("icedCoffee");
icedCoffee.textContent = "Iced Coffee";

const icedCoffeeDescr = document.createElement("p");
icedCoffeeDescr.classList.add("icedCoffeeDescr");
icedCoffeeDescr.textContent = "Chilled coffee served over ice.";

const icedCoffeePrice = document.createElement("p");
icedCoffeePrice.classList.add("icedCoffeePrice");
icedCoffeePrice.textContent = "$3.49";

const hotChocolateGroup = document.createElement("div");
hotChocolateGroup.classList.add("hotChocolateGroup");

const hotChocolate = document.createElement("h4");
hotChocolate.classList.add("hotChocolate");
hotChocolate.textContent = "Hot Chocolate";

const hotChocolateDescr = document.createElement("p");
hotChocolateDescr.classList.add("hotChocolateDescr");
hotChocolateDescr.textContent = "Rich hot chocolate topped with whipped cream.";

const hotChocolatePrice = document.createElement("p");
hotChocolatePrice.classList.add("hotChocolatePrice");
hotChocolatePrice.textContent = "$3.49";

const lemonadeGroup = document.createElement("div");
lemonadeGroup.classList.add("lemonadeGroup");

const lemonade = document.createElement("h4");
lemonade.classList.add("lemonade");
lemonade.textContent = "Fresh Lemonade";

const lemonadeDescr = document.createElement("p");
lemonadeDescr.classList.add("lemonadeDescr");
lemonadeDescr.textContent = "Homemade-style lemonade served ice-cold.";

const lemonadePrice = document.createElement("p");
lemonadePrice.classList.add("lemonadePrice");
lemonadePrice.textContent = "$3.49";

const cocaColaGroup = document.createElement("div");
cocaColaGroup.classList.add("cocaColaGroup");

const cocaCola = document.createElement("h4");
cocaCola.classList.add("cocaCola");
cocaCola.textContent = "Classic Coca-Cola";

const cocaColaDescr = document.createElement("p");
cocaColaDescr.classList.add("cocaColaDescr");
cocaColaDescr.textContent = "Ice-cold Coca-Cola served with ice.";

const cocaColaPrice = document.createElement("p");
cocaColaPrice.classList.add("cocaColaPrice");
cocaColaPrice.textContent = "$2.49";

const rootBeerFloatGroup = document.createElement("div");
rootBeerFloatGroup.classList.add("rootBeerFloatGroup");

const rootBeerFloat = document.createElement("h4");
rootBeerFloat.classList.add("rootBeerFloat");
rootBeerFloat.textContent = "Root Beer Float";

const rootBeerFloatDescr = document.createElement("p");
rootBeerFloatDescr.classList.add("rootBeerFloatDescr");
rootBeerFloatDescr.textContent = "Root beer topped with a scoop of vanilla ice cream.";

const rootBeerFloatPrice = document.createElement("p");
rootBeerFloatPrice.classList.add("rootBeerFloatPrice");
rootBeerFloatPrice.textContent = "$5.49";

const orangeJuiceGroup = document.createElement("div");
orangeJuiceGroup.classList.add("orangeJuiceGroup");

const orangeJuice = document.createElement("h4");
orangeJuice.classList.add("orangeJuice");
orangeJuice.textContent = "Fresh Orange Juice";

const orangeJuiceDescr = document.createElement("p");
orangeJuiceDescr.classList.add("orangeJuiceDescr");
orangeJuiceDescr.textContent = "Chilled orange juice.";

const orangeJuicePrice = document.createElement("p");
orangeJuicePrice.classList.add("orangeJuicePrice");
orangeJuicePrice.textContent = "$3.99";

const chocolateMilkGroup = document.createElement("div");
chocolateMilkGroup.classList.add("chocolateMilkGroup");

const chocolateMilk = document.createElement("h4");
chocolateMilk.classList.add("chocolateMilk");
chocolateMilk.textContent = "Chocolate Milk";

const chocolateMilkDescr = document.createElement("p");
chocolateMilkDescr.classList.add("chocolateMilkDescr");
chocolateMilkDescr.textContent = "Cold milk blended with chocolate.";

const chocolateMilkPrice = document.createElement("p");
chocolateMilkPrice.classList.add("chocolateMilkPrice");
chocolateMilkPrice.textContent = "$2.99";

// Append everything to the DOM
content.appendChild(menuSection);
menuSection.appendChild(menuHeader);

// Breakfast
menuSection.appendChild(breakfastGroup);
breakfastGroup.appendChild(breakfast);
breakfastGroup.appendChild(pancakesGroup);
pancakesGroup.appendChild(pancakes);
pancakesGroup.appendChild(pancakesDescr);
breakfastGroup.appendChild(pancakePrice);
breakfastGroup.appendChild(classicBreakfastGroup);
classicBreakfastGroup.appendChild(classicBreakfast);
classicBreakfastGroup.appendChild(classicBreakfastDescr);
breakfastGroup.appendChild(classicBreafastPrice);
breakfastGroup.appendChild(frenchToastGroup);
frenchToastGroup.appendChild(frenchToast);
frenchToastGroup.appendChild(frenchToastDescr);
breakfastGroup.appendChild(frenchToastPrice);
breakfastGroup.appendChild(breakfastSandwichGroup);
breakfastSandwichGroup.appendChild(breakfastSandwich);
breakfastSandwichGroup.appendChild(breakfastSandwichDescr);
breakfastGroup.appendChild(breakfastSandwichPrice);
breakfastGroup.appendChild(biscuitsGravyGroup);
biscuitsGravyGroup.appendChild(biscuitsGravy);
biscuitsGravyGroup.appendChild(biscuitsGravyDescr);
breakfastGroup.appendChild(biscuitsGravyPrice);
breakfastGroup.appendChild(westernOmeletGroup);
westernOmeletGroup.appendChild(westernOmelet);
westernOmeletGroup.appendChild(westernOmeletDescr);
breakfastGroup.appendChild(westernOmeletPrice);
menuSection.appendChild(pageSeparator);

// Burgers & Sandwiches
menuSection.appendChild(burgersGroup);
burgersGroup.appendChild(burgers);
burgersGroup.appendChild(classicCheeseburgerGroup);
classicCheeseburgerGroup.appendChild(classicCheeseburger);
classicCheeseburgerGroup.appendChild(classicCheeseburgerDescr);
burgersGroup.appendChild(classicCheeseburgerPrice);
burgersGroup.appendChild(doubleTroubleBurgerGroup);
doubleTroubleBurgerGroup.appendChild(doubleTroubleBurger);
doubleTroubleBurgerGroup.appendChild(doubleTroubleBurgerDescr);
burgersGroup.appendChild(doubleTroubleBurgerPrice);
burgersGroup.appendChild(oldTimersBurgerGroup);
oldTimersBurgerGroup.appendChild(oldTimersBurger);
oldTimersBurgerGroup.appendChild(oldTimersBurgerDescr);
burgersGroup.appendChild(oldTimersBurgerPrice);
burgersGroup.appendChild(crispyChickenSandwichGroup);
crispyChickenSandwichGroup.appendChild(crispyChickenSandwich);
crispyChickenSandwichGroup.appendChild(crispyChickenSandwichDescr);
burgersGroup.appendChild(crispyChickenSandwichPrice);
burgersGroup.appendChild(classicBLTGroup);
classicBLTGroup.appendChild(classicBLT);
classicBLTGroup.appendChild(classicBLTDescr);
burgersGroup.appendChild(classicBLTPrice);
burgersGroup.appendChild(phillyCheesesteakGroup);
phillyCheesesteakGroup.appendChild(phillyCheesesteak);
phillyCheesesteakGroup.appendChild(phillyCheesesteakDescr);
burgersGroup.appendChild(phillyCheesesteakPrice);
menuSection.appendChild(pageSeparator2);

// Diner Classics
menuSection.appendChild(dinerClassicsGroup);
dinerClassicsGroup.appendChild(dinerClassics);
dinerClassicsGroup.appendChild(fishAndChipsGroup);
fishAndChipsGroup.appendChild(fishAndChips);
fishAndChipsGroup.appendChild(fishAndChipsDescr);
dinerClassicsGroup.appendChild(fishAndChipsPrice);
dinerClassicsGroup.appendChild(chickenFriedSteakGroup);
chickenFriedSteakGroup.appendChild(chickenFriedSteak);
chickenFriedSteakGroup.appendChild(chickenFriedSteakDescr);
dinerClassicsGroup.appendChild(chickenFriedSteakPrice);
dinerClassicsGroup.appendChild(meatloafDinnerGroup);
meatloafDinnerGroup.appendChild(meatloafDinner);
meatloafDinnerGroup.appendChild(meatloafDinnerDescr);
dinerClassicsGroup.appendChild(meatloafDinnerPrice);
dinerClassicsGroup.appendChild(macAndCheeseGroup);
macAndCheeseGroup.appendChild(macAndCheese);
macAndCheeseGroup.appendChild(macAndCheeseDescr);
dinerClassicsGroup.appendChild(macAndCheesePrice);
dinerClassicsGroup.appendChild(bbqPorkRibsGroup);
bbqPorkRibsGroup.appendChild(bbqPorkRibs);
bbqPorkRibsGroup.appendChild(bbqPorkRibsDescr);
dinerClassicsGroup.appendChild(bbqPorkRibsPrice);
dinerClassicsGroup.appendChild(grilledCheeseSoupGroup);
grilledCheeseSoupGroup.appendChild(grilledCheeseSoup);
grilledCheeseSoupGroup.appendChild(grilledCheeseSoupDescr);
dinerClassicsGroup.appendChild(grilledCheeseSoupPrice);
menuSection.appendChild(pageSeparator3);

// Salads & Lighter Bites
menuSection.appendChild(saladsGroup);
saladsGroup.appendChild(salads);
saladsGroup.appendChild(caesarSaladGroup);
caesarSaladGroup.appendChild(caesarSalad);
caesarSaladGroup.appendChild(caesarSaladDescr);
saladsGroup.appendChild(caesarSaladPrice);
saladsGroup.appendChild(grilledChickenSaladGroup);
grilledChickenSaladGroup.appendChild(grilledChickenSalad);
grilledChickenSaladGroup.appendChild(grilledChickenSaladDescr);
saladsGroup.appendChild(grilledChickenSaladPrice);
saladsGroup.appendChild(gardenSaladGroup);
gardenSaladGroup.appendChild(gardenSalad);
gardenSaladGroup.appendChild(gardenSaladDescr);
saladsGroup.appendChild(gardenSaladPrice);
saladsGroup.appendChild(chickenTendersGroup);
chickenTendersGroup.appendChild(chickenTenders);
chickenTendersGroup.appendChild(chickenTendersDescr);
saladsGroup.appendChild(chickenTendersPrice);
menuSection.appendChild(pageSeparator4);

// Desserts
menuSection.appendChild(dessertsGroup);
dessertsGroup.appendChild(desserts);
dessertsGroup.appendChild(applePieGroup);
applePieGroup.appendChild(applePie);
applePieGroup.appendChild(applePieDescr);
dessertsGroup.appendChild(applePiePrice);
dessertsGroup.appendChild(cheesecakeGroup);
cheesecakeGroup.appendChild(cheesecake);
cheesecakeGroup.appendChild(cheesecakeDescr);
dessertsGroup.appendChild(cheesecakePrice);
dessertsGroup.appendChild(brownieSundaeGroup);
brownieSundaeGroup.appendChild(brownieSundae);
brownieSundaeGroup.appendChild(brownieSundaeDescr);
dessertsGroup.appendChild(brownieSundaePrice);
dessertsGroup.appendChild(bananaSplitGroup);
bananaSplitGroup.appendChild(bananaSplit);
bananaSplitGroup.appendChild(bananaSplitDescr);
dessertsGroup.appendChild(bananaSplitPrice);
dessertsGroup.appendChild(milkshakeGroup);
milkshakeGroup.appendChild(milkshake);
milkshakeGroup.appendChild(milkshakeDescr);
dessertsGroup.appendChild(milkshakePrice);
dessertsGroup.appendChild(peachCobblerGroup);
peachCobblerGroup.appendChild(peachCobbler);
peachCobblerGroup.appendChild(peachCobblerDescr);
dessertsGroup.appendChild(peachCobblerPrice);
menuSection.appendChild(pageSeparator5);

// Drinks
menuSection.appendChild(drinksGroup);
drinksGroup.appendChild(drinks);
drinksGroup.appendChild(coffeeGroup);
coffeeGroup.appendChild(coffee);
coffeeGroup.appendChild(coffeeDescr);
drinksGroup.appendChild(coffeePrice);
drinksGroup.appendChild(icedCoffeeGroup);
icedCoffeeGroup.appendChild(icedCoffee);
icedCoffeeGroup.appendChild(icedCoffeeDescr);
drinksGroup.appendChild(icedCoffeePrice);
drinksGroup.appendChild(hotChocolateGroup);
hotChocolateGroup.appendChild(hotChocolate);
hotChocolateGroup.appendChild(hotChocolateDescr);
drinksGroup.appendChild(hotChocolatePrice);
drinksGroup.appendChild(lemonadeGroup);
lemonadeGroup.appendChild(lemonade);
lemonadeGroup.appendChild(lemonadeDescr);
drinksGroup.appendChild(lemonadePrice);
drinksGroup.appendChild(cocaColaGroup);
cocaColaGroup.appendChild(cocaCola);
cocaColaGroup.appendChild(cocaColaDescr);
drinksGroup.appendChild(cocaColaPrice);
drinksGroup.appendChild(rootBeerFloatGroup);
rootBeerFloatGroup.appendChild(rootBeerFloat);
rootBeerFloatGroup.appendChild(rootBeerFloatDescr);
drinksGroup.appendChild(rootBeerFloatPrice);
drinksGroup.appendChild(orangeJuiceGroup);
orangeJuiceGroup.appendChild(orangeJuice);
orangeJuiceGroup.appendChild(orangeJuiceDescr);
drinksGroup.appendChild(orangeJuicePrice);
drinksGroup.appendChild(chocolateMilkGroup);
chocolateMilkGroup.appendChild(chocolateMilk);
chocolateMilkGroup.appendChild(chocolateMilkDescr);
drinksGroup.appendChild(chocolateMilkPrice);
}