// B) Word Play
// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

$(document).ready(function() {
  $('#form').submit(function(event){
    var wordInSentence = $('#wordInSentence').val();
    let array = wordInSentence.split(' ');

    let array_new = array.map(function(word){
      if(word.length > 3){return word;};

    });
    var resultArray = array_new.reverse();
    const resultText = resultArray.join(' ');

    alert(resultText);
  });
});
