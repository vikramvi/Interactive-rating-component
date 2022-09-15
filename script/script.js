
//Number click changes the color
//Clicking on Submit removes current page and shows thanks page

//Tests


// ---------------------- DOM Selectors ----------------------

let rating_1 = document.getElementsByClassName("user-rating__rating-number-1")[0];
let rating_2 = document.getElementsByClassName("user-rating__rating-number-2")[0];
let rating_3 = document.getElementsByClassName("user-rating__rating-number-3")[0];
let rating_4 = document.getElementsByClassName("user-rating__rating-number-4")[0];
let rating_5 = document.getElementsByClassName("user-rating__rating-number-5")[0];

const mainScreen = document.getElementsByClassName("user-rating")[0];
const thankYouScreen = document.getElementsByClassName("thank-you")[0];

const submit = document.getElementsByClassName("user-rating__submit")[0];


// ---------------------- Functions ----------------------

const removeClassFromElements = (elementToExclude) => {

    console.log("elementToExclude  " + elementToExclude.innerText + "  " + typeof (elementToExclude));

    if (!(elementToExclude.innerText === rating_1.innerText)) {
        console.log("if");
        rating_1.classList.remove("user-rating__rating-number--orange");
    } else {
        console.log("else");
    }

    if (!(elementToExclude.innerText === rating_2.innerText)) {
        console.log("if");
        rating_2.classList.remove("user-rating__rating-number--orange");
    } else {
        console.log("else");
    }

    if (!(elementToExclude.innerText === rating_3.innerText)) {
        console.log("if");
        rating_3.classList.remove("user-rating__rating-number--orange");
    } else {
        console.log("else");
    }

    if (!(elementToExclude.innerText === rating_4.innerText)) {
        console.log("if");
        rating_4.classList.remove("user-rating__rating-number--orange");
    } else {
        console.log("else");
    }

    if (!(elementToExclude.innerText === rating_5.innerText)) {
        console.log("if");
        rating_5.classList.remove("user-rating__rating-number--orange");
    } else {
        console.log("else");
    }


}

// ---------------------- Event Listeners ----------------------



//add class to element if it doesn't exist
//remove class from other elements
//find out element which has got clicked
//find out which element has got given class
rating_1.addEventListener("click", () => {

    rating_1.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_1);

}
);

rating_2.addEventListener("click", () => {

    rating_2.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_2);
});

rating_3.addEventListener("click", (e) => {

    rating_3.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_3);
});

rating_4.addEventListener("click", (e) => {

    rating_4.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_4);
});

rating_5.addEventListener("click", (e) => {

    rating_5.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_5);
});


//user clicks on Submit button to view Thank You screen
submit.addEventListener("click", () => {
    mainScreen.style.display = "none";
    thankYouScreen.style.display = "block";
})

