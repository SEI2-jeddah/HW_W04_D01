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

$(document).ready(function(){
  var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
  var suits = ["Diamonds", "Hearts", "Clubs", "Spades"];
  var deck = [];

  suits.forEach(function(suit){
    cards.forEach(function(card){
      deck.push(card + " of " + suit);
    });
  });
  deck.forEach(function(rank){
    $(".cards").append("<li>" + rank);
  });
  alert("Take the cards");
});
