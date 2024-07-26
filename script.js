// script for the countdown section
const seconds = document.querySelector(".seconds .number");
minutes = document.querySelector(".minutes .number");
hours = document.querySelector(".hours .number");
days = document.querySelector(".days .number");

let secValue = 60,
minValue = 46,
hourValue = 16,
dayValue = 14;

const timeFunction = setInterval(() => {
secValue--;

if(secValue === 0){
    minValue--;
    secValue = 60;
}
if(minValue === 0){
    hourValue--;
    minValue = 60;
}
if(hourValue === 0){
    dayValue--;
    hourValue = 60;
}
if(dayValue === 0){
    clearInterval(timeFunction)
}
seconds.textContent = secValue < 0 ? '0${secValue}' : secValue;
minutes.textContent = minValue < 0 ? '0${minValue}' : minValue;
hours.textContent = hourValue < 0 ? '0${hourValue}' : hourValue;
days.textContent = dayValue < 0 ? '0${dayValue}' : dayValue;
}, 1000); //1000ms = 1s

// script for the rating section

// select all element with the i tag and store them in a NodeList called stars
const stars = document.querySelectorAll(".stars i");

// loop through the stars NodeList
stars.forEach((star, index1) => {
    // add an event listener that runs a funtion when the click event is triggered
    star.addEventListener("click", () => {
        console.log(index1);
        // loop through the stars NodeList again
        stars.forEach((star, index2) => {
            // add the active class to the clicked star and any stars with a lower index
            // and remove the active class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
        });
    });
});