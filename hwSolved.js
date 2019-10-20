//Part 1  
// A

let swapCase = function (string) {
    return (string.split(" ").map(letter => letter.toUpperCase())).join(" ")
}
console.log(swapCase('hello stranger , what do we have today? '));

// i think this is easier than map
let swapCaseNoMap = (string => string.toUpperCase())
console.log(swapCaseNoMap('hello stranger , what do we have today? '));

//Part1
//B
var shiftLetters = function(string) {   
  return (string.split('').map(letter => String.fromCharCode(letter.charCodeAt()+1))).join('')
  
  }
  console.log(shiftLetters('hello'));
  console.log(shiftLetters('abcxyz'));

//Part2
//A
let suitsArr = ['hearts','diamonds','spades','clubs']
let rankArr = ['ace','2','3','4','5','6','7','8','9','10','jack','queen','king']
let deck=[]

//we can display the cards without pushing to an array and just instead of pushing the array we console.log()
suitsArr.forEach(suit => rankArr.forEach(rank => deck.push(rank+" of "+suit)))
console.log(deck);

//Part2
//B
let reverseSentence = function(sentence) {
    let tempArr = sentence.split(" ")
    let reversArr =[]
    tempArr = tempArr.filter(e => e.length >3)
    let counter = tempArr.length-1
    tempArr.forEach( ()=> {
            reversArr.push(tempArr[counter])
            counter--
    })
    return reversArr.join(' ')
}
console.log(reverseSentence("hello i can reverse sentences if i have words with more than three letters"))

  

