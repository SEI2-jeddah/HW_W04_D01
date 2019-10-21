//part 1

  ////////////////////////////////////////////////////////////////////////////////////////


// A
var swapCase = (string) =>{
    // Codeeeee
    var arr = string.split(' ')
    console.log(arr);
    
    var arr = arr.map((item, index)=>{
      if(index % 2 == 0) {
        item = item.toUpperCase();
      }
       return item
    })
    let ans = ''
    for(elm of arr){
        ans += ' '+ elm
    }
  
  console.log(ans);
  
  };
  swapCase('this is a thing that i am tring to do')
  

  ////////////////////////////////////////////////////////////////////////////////////////

//B
  var shiftLetters = string => {
      string = string.split('')
        var code =0
        var letter = ''
      string = string.map(item => {
          code = item.charCodeAt()
          code ++
          letter = String.fromCharCode(code)
          return letter
          
      })
      let ans = ''
      for(char of string){
        ans += char
      }
   console.log(ans);
   
    };

    shiftLetters('hello')

  ////////////////////////////////////////////////////////////////////////////////////////
//Part 2


  ////////////////////////////////////////////////////////////////////////////////////////

  //A - Build a Deck

  let suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']
  let ranks = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']

  suits.forEach(suit => {
    ranks.forEach(rank =>{
        console.log(rank + ' of '+ suit);
        
    })  

  });

  ////////////////////////////////////////////////////////////////////////////////////////


  //B

  let wordPlay = string =>{
    var char = []
    var ans = []
    string = string.split(' ')
    string.forEach(element => {
        char = element.split('')
        if(char.length >= 3){
            ans.push(element)
        }
    });
    var ans2 = []

    
    ans.forEach((element, index) => {

        var reverce = ans.length - index -1 
       
        
        ans2.push(ans[reverce])
    });
  
    let answer = ''
    ans2.forEach(ans => {
        answer +=  ans+ ' '
    });
    console.log(answer);
    
  }

  wordPlay('hey there i am Yazeed')