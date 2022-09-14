
//Number click changes the color
//Clicking on Submit removes current page and shows thanks page

//Tests


//DOM Selectors 

let rating_1 = document.getElementsByClassName("user-rating__rating-number-1")[0];
let rating_2 = document.getElementsByClassName("user-rating__rating-number-2")[0];
let rating_3 = document.getElementsByClassName("user-rating__rating-number-3")[0];
let rating_4 = document.getElementsByClassName("user-rating__rating-number-4")[0];
let rating_5 = document.getElementsByClassName("user-rating__rating-number-5")[0];

const submit = document.getElementsByClassName("user-rating__submit");


//Functions

let ratingArray = [];
// ratingArray.push(rating_1);
// ratingArray.push(rating_2);
// ratingArray.push(rating_3);
// ratingArray.push(rating_4);
// ratingArray.push(rating_5);

const getAllClassLists = () => {
    console.log("rating_1  " + rating_1.classList);
    return 1;
}


const ratingElementCurrentlySelected =
    ratingArray.forEach(element =>
        //console.log(element + "  " + element.classList.contains("user-rating__rating-number--orange"))
        console.log(element)
    );

// ratingArray.filter(ratingElement =>
//     //console.log("ratingElement " + ratingElement.innerText);
//     ratingElement.classList.contains("user-rating__rating-number--orange") === true
// );


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


    //let element;

    //console.log(typeof (ratingArray[0]));

    //ratingArray[0].classList.remove("user-rating__rating-number--orange");

    // for (i = 1; i < 6; i++) {
    //     console.log(`rating_${i}`);
    //     rating_5.classList.remove("user-rating__rating-number--orange");
    //     // classList.remove("user-rating__rating-number--orange");
    //     if (i != parseInt(elementToExclude.innerText)) {
    //         element = rating_ + i;
    //         console.log(typeof (element));
    //         element.classList.remove("user-rating__rating-number--orange");
    //     }
    // }

    // let newArray = ratingArray.slice();
    // newArray.splice(elementToExclude, 1);

    // console.log(newArray.join(""));

    // newArray.forEach(element => element.classList.remove("user-rating__rating-number--orange"));

}

//Event Listeners



//add class to element if it doesn't exist
//remove class from other elements
//find out element which has got clicked
//find out which element has got given class
rating_1.addEventListener("click", (e) => {

    //console.log(getAllClassLists());

    //console.log(ratingElementCurrentlySelected);


    rating_1.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_1);

    //console.log(rating_5.classList.contains("user-rating__rating-number--orange"));
    //rating_5.classList.remove("user-rating__rating-number--orange");

    //ratingElementCurrentlySelected[0].classList.remove("user-rating__rating-number--orange");

    // console.log(e.target);
    // console.log(rating_1);

    // console.log(document.getElementsByClassName("user-rating__rating-number"));
}
);

rating_2.addEventListener("click", () => {

    rating_2.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_2);
});

rating_3.addEventListener("click", (e) => {
    //console.log(rating_2.innerText);

    //alert("clicked 2");

    rating_3.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_3);
});

rating_4.addEventListener("click", (e) => {
    //console.log(rating_2.innerText);

    //alert("clicked 2");

    rating_4.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_4);
});

rating_5.addEventListener("click", (e) => {
    //console.log(rating_2.innerText);

    //alert("clicked 2");

    rating_5.classList.add("user-rating__rating-number--orange");

    removeClassFromElements(rating_5);
});


