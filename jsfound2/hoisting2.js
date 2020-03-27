// hoisting happens on every execution context
// change to var to const to not rely on hoisting
var favouriteFood = "grapes";

var foodThoughts = function () {
    console.log("Originial fav food: " + favouriteFood);

    var favouriteFood = "sushi";

    console.log("New fav food: " + favouriteFood)
};

foodThoughts();

// how hoisting happens
// 1. creation phase
var favouriteFood = undefined;
var foodThoughts = undefined;

// 2. execution phase
var favouriteFood = "grapes";

// 3. make the function
foodThoughts = function () {
    // 7. creation phase
    var favouriteFood = undefined;
    console.log("Originial fav food: " + favouriteFood);

    var favouriteFood = "sushi";

    console.log("New fav food: " + favouriteFood)
};

// 4. run the function
foodThoughts();

// 5. a new execution context is created
// 6. inside this execution context, hoisting happens


// exr
function bigBrother(){
    function littleBrother() {
        return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
        return 'no me!';
    }
}

// Before running this code, what do you think the output is?
bigBrother();
