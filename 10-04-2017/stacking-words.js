let sentence = "The walrus danced through the trees in the light of the moon";

// Create an array that contains the words in the sentence
let sentenceArray = sentence.split(" ");

/***********************************************************/
/* Log Array */
/***********************************************************/

// function consoleLogArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log("arr[" + i + "]: " + arr[i]);
//     }
// }

// consoleLogArray(sentenceArray);

/*****************/
/* End Log Array */
/*****************/

/*
    The addExcitement function should be an impure function, and accept 
    the array as the sole argument. It should iterate over the array 
    and output the words to the browser console.
*/
function addExcitement (theWordArray) {
    for(let i = 0; i < theWordArray.length; i++) {
        for(let j = 0; j <= i; j++) {
            process.stdout.write(theWordArray[j] + " ");
        }
        console.log();
    }
}

// Invoke the function and pass in the array
addExcitement(sentenceArray);