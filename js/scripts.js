$(document).ready(function(){
  var translated = [];

  function makePL(word) {
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    var letters = word.split('');

    if (word.length === 1 && vowels.includes(word)){

      //One letter words.
      letters[0] = word + 'ay';
    } else if (word.length > 1 && vowels.includes(word[0])){

      //words starting with vowels and greater than 1.
      letters.push("way");
    } else if (word.length > 1 && !vowels.includes(word[0])) {

      //words starting consonants and greater 1.
      for (let i = 0; i < (letters.length -1); i++) {
       if(vowels.includes(letters[i])){
         var back = letters.splice(i, (letters.length -1))
         if (letters[letters.length -1] === "q" || letters[letters.length -1] === "Q" && back[0] === "u" || back[0] === "U"){
           var theU = back[0];
           letters.push(theU)
           back.shift();
         }

        var letters = back.concat(letters); 
         letters.push('ay');
         break
       } 
      }
 
    } else {
      console.log('error');
    }
    
    //do the magic
    return letters.join('');
  }

  function printToDom(arrayItem) {
    var result = arrayItem.join(" ");
    $("#result").text(result);
    translated = [];
  }

  //Button function
  $("form").submit(function(event) {
    event.preventDefault()
    var words = $("#pig-latin-input").val().split(" ")

    words.forEach(function(word){
      if(isNaN(word)){
        translated.push(makePL(word))
      } else {
        translated.push(word)
      }
    })//end foreach.
    printToDom(translated);
  })
  
});

