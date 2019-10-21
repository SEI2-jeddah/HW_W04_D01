// PART 1: -------------
//A
var capitalize = string => string.toUpperCase();
var swapCase = string => {
    var string = string.split(" ")
    string.forEach((element,index) => {
        if (index%2 == 0){
            string[index]=capitalize(string[index])
        }
    });
    return string.join(" ")
  };
console.log(swapCase("hello stranger, what do we have today? "));

//B
var shiftLetters = string => (Array.prototype.map.call(string, (x) => String.fromCharCode(x.charCodeAt(0) + 1))).join("")
console.log(shiftLetters('hello'));
console.log(shiftLetters('abcxyz'));

// PART 2: -------------
//A
var ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
var suits = ["spades", "diamonds", "clubs", "hearts"]
var cards =[]
suits.forEach((suit) => {
 ranks.forEach((rank) => {
    cards.push(rank+ " of  " +suit)
 })
})
console.log(cards);

//B
var sentence = 'hello my name is shahad'
sentence = sentence.split(" ")
var sentenceNew =[]
var a = sentence.forEach(element => {
    if (element.length > 2){
        sentenceNew.push(element)
    } 
});
var sentenceNew = (sentenceNew.reverse()).join(" ")
console.log(sentenceNew);
