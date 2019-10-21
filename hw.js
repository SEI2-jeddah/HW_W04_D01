​
var print = (x) => {return console.log(x)}
var swapCase = function(string) {
  var string = string.split('')
  string = string.map(string => string.toUpperCase())
  string = string.join('')
  return string;
};

swapCase('hello stranger , what do we have today?')

​

var name = ['moe'];



try {
  function to_code(input){
  var tem =[]
  input.forEach(function(e){
    e = e.split('')
    e.forEach(function(elem){
      var code = elem.charCodeAt(elem)
      tem.push(code)

    })
  })
  tem=tem.join();
  console.log(tem);

}
to_code(name)


}

catch(error){
  console.log('hummm try This XD');
  function to_code(input){
  input = input.split('')
  var tem =[]
  input.forEach(function(e){
    e = e.split('')
    e.forEach(function(elem){
      var code = elem.charCodeAt(elem)
      tem.push(code)

    })
  })
  tem=tem.join();
  console.log(tem);
  return tem

}
console.log(to_code(name))

var q = to_code(name)
function from_code(input){
  var tem =[]
  input.forEach(function(e){
    e = e.split('')
    e.forEach(function(elem){
      var code = elem.fromCharCode(elem)
      tem.push(code)
    })
  })
 tem=tem.join();
 console.log(tem);
}
 console.log(from_code(q))


}




// PART 2: USE FOREACH IN THE FOLLOWING EXCERCISES


var suits = ["spades", "diamonds", "clubs", "hearts"];
var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

suits.forEach(function(index,key){
  console.log(`Start with ${index} -- ${key}`);
  values.forEach(function(card,ind){
    console.log(` ${index+1} of ${card}`)

  })
})




let input = 'hello moe world mac'
var temp = []
var wordPlay = (x)=>{
  var word = x.split(' ')
  word.forEach(function(sent){
    if (sent.length == 3){
      sent = sent.split('')
      sent = sent.reverse()
      sent = sent.join('')
      console.log(sent);
      return sent

    }


  })
}

wordPlay(input)
