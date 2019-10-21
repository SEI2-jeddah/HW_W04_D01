//part 1-A
var capitalize=(word)=>word.toUpperCase();

var swapCase = (string)=> {
  // Codeeeee
  string=string.split(" ");
  string=string.map((word,index)=>{
    if(index%2==0){
       return capitalize(word);
    }else{
        return word;
    }
  });
  return string.join(" ");
};
console.log(swapCase('hello stranger, what do we have today? '));

//part 1-B

var shiftLetters=(string)=>{
    // code!
    originalString=string;
    string=string.split("");
    string=string.map((_letter,index)=>{
         return String.fromCharCode(originalString.charCodeAt(index)+1);
      });
      return string.join("");
};

console.log(shiftLetters('hello'));
console.log(shiftLetters('abcxyz'));

//part 2-A

var ranks=["ace","1","2","3","4","5","6","7","8","9","10","jack","queen","king"];
var suits=["clubs","diamonds","hearts","spades"];

suits.forEach((suit)=>{
    ranks.forEach((rank)=>{
        console.log(rank+" of "+suit);
    })
})

//part 2-B
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`please enter a sentence: `, (sentence) => {
    // console.log(`Hi ${name}!`)
    console.log(part2B(sentence));

    readline.close();
  })

  var part2B=(sentence)=>{
    sentence=sentence.split(" ");
    var newArray=[];
    var finalArray=[];
    newArray=sentence.filter((word)=>{
        return word.length>=3
    });
    newArray.forEach((word,index)=>{
        finalArray[newArray.length-1-index]=word;
    });

    return finalArray.join(" ");
  }