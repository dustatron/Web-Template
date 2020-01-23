$(document).ready(function(){
  var translated = [];

  function makePL(word) {
    //do the magic
    //return result;
  }

  function printToDom(item) {
    var result = item.join(" ");
    $("#result").text(result);
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

