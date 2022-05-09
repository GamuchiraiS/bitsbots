/* This file contains functions using different iteration methods */


/* Using a for loop */
function forLoop(){
    //Array to store the lines
    let linesArr = [];
    console.log("Using a for loop:");
    /* Loops through the digits 1 - 20 and checks 
    if the digit is a multiple of 2, 3 or both 2 and 3 or neither */
    /* Based on whether it is a multiple, we add the index 
    and a message based on the condition*/
    for (let index = 1; index <= 20; index++){
        /* If multiple of 2 and 3 */
        if (index % 2 == 0 && index % 3 == 0){   
            linesArr.push(index + ". bitsbots" );
        }
        /* If multiple of 2 */
        else if (index % 2 == 0){
            linesArr.push(index + ". bits" );
        }
        /* If multiple of 3 */
        else if(index % 3 == 0){
            linesArr.push(index + ". bots");
        }
        /* Multiple of neither */
        else{
            linesArr.push(index + ". 0");
        }
    }
    /* Combine the array into a string and separate
    each element/entry with \n. */
    linesArr = linesArr.join("\n");
    console.log(linesArr);
}

/* Using a while loop */
function whileLoop(){

    console.log("Using a while loop:");
    //Variables
    let counter = 1;
    /* Empty array to hold the lines */
    let arr = [];
    /* Length of array */
    let arrLen = 20;
    /* While the counter is less than equal to 20, 
    do the following */
    while (counter <= arrLen){
        /* If multiple of 2 and 3 */
        if (counter % 2 == 0 && counter % 3 == 0){   
            arr.push(counter + ". bitsbots" );
        }
        /* If multiple of 2 */
        else if (counter % 2 == 0){
            arr.push(counter+ ". bits" );
        }
        /* If multiple of 3 */
        else if(counter % 3 == 0){
            arr.push(counter + ". bots");
        }
        /* Multiple of neither */
        else{
            arr.push(counter + ". 0");
        }
        /* Increment the counter */ 
        counter++;
    }
    /* Combine the array into a string and separate
    each element/entry with \n. */
    arr = arr.join("\n");
    console.log(arr);
}

/* Using forEach */
function useForEach(){

    console.log("Using forEach:");
    /* Array to store numbers 1 - 20 */
    let numbers = [];
    /* Array to store lines */
    let linesArray = [];
    /* Loops through empty numbers array and adds the numbers
    1 - 20 into the array */
    for (let index = 1; index <= 20; index++){
        numbers.push(index);
    }
    /* Loops through the numbers array and checks if it
    satisfies any of the conditions below */
    numbers.forEach(number => {
        /* If multiple of 2 and 3 */
        if (number % 2 == 0 && number  % 3 == 0){   
            linesArray.push(number  + ". bitsbots" );
        }
        /* If multiple of 2 */
        else if (number  % 2 == 0){
            linesArray.push(number + ". bits" );
        }
        /* If multiple of 3 */
        else if(number % 3 == 0){
            linesArray.push(number + ". bots");
        }
        /* Multiple of neither */
        else{
            linesArray.push(number + ". 0");
        }

    });
    /* Combine the array into a string and separate
    each element/entry with \n. */
    linesArray = linesArray.join("\n");
    console.log(linesArray);
}
/* Using recursion */
function recursion(num){
    //Array to store lines
    let lines = [];

    /* If multiple of 2 and 3 */
    if (num % 2 == 0 && num  % 3 == 0){   
        lines.push(num  + ". bitsbots" );
    }
    /* If multiple of 2 */
    else if (num  % 2 == 0){
        lines.push(num + ". bits" );
    }
    /* If multiple of 3 */
    else if(num % 3 == 0){
        lines.push(num + ". bots");
    }
    /* Multiple of neither */
    else{
        lines.push(num + ". 0");
    }
    //increment number
    incrementNum = num + 1;
    /* Combine the array into a string and separate
    each element/entry with \n. */
    lines = lines.join("\n");
    console.log(lines);
    /* If incrementNum is less than or equal to 20,
    call the recursion function with the incremented num */
    if(incrementNum <= 20){
        recursion(incrementNum);
    }
}
/* Call functions */
forLoop();
whileLoop();
useForEach();
recursion(1);





