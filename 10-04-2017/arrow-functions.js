let sentence = "The walrus danced through the trees in the light of the moon";

let nextSentence = "Hello there this is a test of this function to see if it's working";

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
/*
    The function now accepts a string and the string is split into an array within 
    the function
*/
let addExcitement = (nextSentence, mysterySymbol) => {    
    
    // Create an array that contains the words in the sentence
    let sentenceArray = nextSentence.split(" ");
    
    for (let i = 0; i < sentenceArray.length; i++) {
        
        let devSymbol = "";
        
        for (let j = 0; j <= i; j++) {            
            if ((j + 1) % 3 === 0) {
                devSymbol += mysterySymbol;
                process.stdout.write(sentenceArray[j] + devSymbol + " ");
            } else {
                process.stdout.write(sentenceArray[j] + " ");
            }            
        }
        console.log();
    }
}

// Invoke the function and pass in the array
addExcitement(nextSentence, "*");