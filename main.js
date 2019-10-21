var swapCase = function (string) {
    var convertToArray = string.toLowerCase().split(" ");
    var result = convertToArray.map(function (val) {
        if(convertToArray[0]==val){
            val=val.toUpperCase()
        }
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

console.log(swapCase("hello stranger , what do we have today"));


var shiftLetters = function (string) {
    var code = string.toLowerCase().split("");
    var result = code.map(function (val) {

        for (let i = 0; i < code.length; i++)
            return val.replace(val.charAt(i), String.fromCharCode(val.charCodeAt(i) + 1));
    });

    return result.join("");

};
console.log(shiftLetters('abcxyz'))



function creatDeck() {
    var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    var suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
    var deck = [];

    suits.forEach(function (suit) {
        cards.forEach(function (card) {
            deck.push(card + " of " + suit);
            console.log(card + " of " + suit)
        });
    });
    return deck
}
 creatDeck();



var wordPlay = function (string) {
    var convertToArray = string.split(" ");
    let arr = []
    var result = convertToArray.map(function (val) {
        if (val.length > 3) {
            arr.push(val)
        }
    });
    arr = arr.reverse()
    result = arr.join(' ')
    return result
}
console.log(wordPlay("hello stranger , what do we have today"))