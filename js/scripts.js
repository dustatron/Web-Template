$(document).ready(function(){
  var translated = [];

  function makePL(word) {
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    var letters = word.split('');

    if (word.length === 1 && vowels.includes(word)){
      letters[0] = word + 'ay';
    } else if (word.length > 1 && vowels.includes(word[0])){
      letters.push("way");
    } else if (word.length > 1 && !vowels.includes(word[0])) {
      letters.push(letters[0]);
      letters.splice(0, 1);
      letters.push("ay");
    } else {
      console.log('error');
    }

    // letters.forEach(function(letter, index){
      // if (word.length === 1 && vowels.includes(word)){
      //   letters[index] = letter + 'ay';
      // } else if ( vowels.includes(letter) && letters.length > 0 ) {
      //   console.log(letters.shift());
      // } else {
      //   console.log('error')
      // }
    // });
    
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

