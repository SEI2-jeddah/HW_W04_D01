// ------ FOR ALL THE EXCERCISES ONLY USE ARROW FUNCTIONS ----- //
// PART 1  USE MAP IN THE FOLLOWING EXCERCISES
// A) write a function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hello stranger , what do we have today? ') // => " HELLO stranger , WHAT do WE have TODAY ?"
console.log("\b");

var msg = "hello stranger , what do we have today?";
var swapCase = (string) => {
  msg = msg.split(" ");

  msg.map((x, index) => {
    if (index % 2 != 0) {
      msg[index] = x.toUpperCase();
    }
  });
  console.log(msg);
};
swapCase(msg);


// B) Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.charCodeAt() .
// see if you can use Ascii code to acomplish this
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
console.log("\b");

var shiftLetters = (string) => {
  string = string.toLowerCase();

  var result = "";

  for (var i = 0; i < string.length; i++) {
      var charcode = (string[i].charCodeAt()+1);
      result += String.fromCharCode(charcode);
  }
   console.log(result);
};
shiftLetters("hello")
shiftLetters("abcxyz")




// PART 2: USE FOREACH IN THE FOLLOWING EXCERCISES

// A) Build a Deck
// Use a forEach() loop within another forEach() loop to build an array representing a deck of cards. A deck consists of 52 cards - 13 ranks in each of 4 suits.
// Then, display a list of every card in the deck. (Hint: Each element of the array should read something like "ace of spades" or "4 of hearts").
// The start of your output should look something like this:
// - ace of clubs
// - 2 of clubs 
// - 3 of clubs 
// - 4 of clubs 
// - 5 of clubs 
// - 6 of clubs 
// - 7 of clubs 
// - 8 of clubs 
// - 9 of clubs 
// - 10 of clubs 
// - jack of clubs 
// - queen of clubs 
// - king of clubs 
// - ace of diamonds
// - 2 of diamonds
// - 3 of diamonds 
console.log("\b");
var suits = ["spades", "diamonds", "clubs", "hearts"];
var ranks = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
suits.forEach(suitse => {
    ranks.forEach(rankse => {
        console.log(rankse+" of "+suitse);
        
    });
    
});

// B) Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.
console.log("\b");

var newArr =[] ;

var wordPlay = (input) =>{
var inputarr = input.split(" ")
inputarr.forEach(element => {
    if(element.length >2){
         newArr.push(element)
    }
});
 return console.log(newArr.reverse());
 
}
var input = "how are you my self"

wordPlay(input)


