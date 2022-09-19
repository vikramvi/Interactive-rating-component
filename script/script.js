
//User Stories
//Number click changes the color
//Clicking on Submit removes current page and shows thanks page

//Tests
// NA, couldn't think of any

// ---------------------- DOM Selectors ----------------------

let rating_1 = document.getElementsByClassName("user-rating__rating-number-1")[0];
let rating_2 = document.getElementsByClassName("user-rating__rating-number-2")[0];
let rating_3 = document.getElementsByClassName("user-rating__rating-number-3")[0];
let rating_4 = document.getElementsByClassName("user-rating__rating-number-4")[0];
let rating_5 = document.getElementsByClassName("user-rating__rating-number-5")[0];

const mainScreen = document.getElementsByClassName("user-rating")[0];
const thankYouScreen = document.getElementsByClassName("thank-you")[0];
const userSelectedValue = document.getElementsByClassName("thanks-you__user-selection-value")[0];

const submit = document.getElementsByClassName("user-rating__submit")[0];


// ---------------------- Functions ----------------------

window.onload = () => {
    submit.disabled = true;
    //mainScreen.style.display = "grid";
    thankYouScreen.style.display = "none";
}

const ratingArray = [rating_1, rating_2, rating_3, rating_4, rating_5];


//Get sub-set of array except selected element
//Remove required class from sub-set of array
const removeClassFromElements = (elementToExclude) => {

    ratingArray
        .filter(element => element !== elementToExclude)
        .forEach((element) => {
            if (element.classList.contains("user-rating__rating-number--orange") === true) {
                element.classList.remove("user-rating__rating-number--orange");
            }
        });
}

//Thank you screen dynamic value to be set from user selection
const setRatingValue = (value) => {
    userSelectedValue.textContent = value;
}

const postElementClickActions = (element) => {
    element.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(element);

    submit.disabled = false;

    setRatingValue(element.innerText);
}

// ---------------------- Event Listeners ----------------------


//add class to element if it doesn't exist
//remove class from other elements
//find out element which has got clicked
//find out which element has got given class
rating_1.addEventListener("click", () => {

    postElementClickActions(rating_1);
}
);

rating_2.addEventListener("click", () => {

    postElementClickActions(rating_2);

});

rating_3.addEventListener("click", () => {

    postElementClickActions(rating_3);

});

rating_4.addEventListener("click", () => {

    postElementClickActions(rating_4);

});

rating_5.addEventListener("click", () => {

    postElementClickActions(rating_5);

});


//user clicks on Submit button to view Thank You screen
//check if any of the rating values are selected
submit.addEventListener("click", () => {

    mainScreen.style.display = "none";
    thankYouScreen.style.display = "grid";

})


