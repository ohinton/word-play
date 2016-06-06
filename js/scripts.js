// THE LOOP WAY--REFER TO **var clippedArray = []; &&& newArray.forEach**

$(document).ready(function() {
  $("form#sentence-cell").submit(function(event) {

    var sentence = $("input#sentence").val();
    var space = " ";
    var arrayOfStrings;
    var clippedArray = [];

    function splitString(stringToSplit, separator) {
      var arrayOfStrings = stringToSplit.split(separator);
      return arrayOfStrings;
    }

    var newArray = splitString(sentence, space);
    // alert(newArray);

    newArray.forEach(function(element){
        if (element.length > 2) {
          clippedArray.push(element)
          clippedArray.reverse();
        }
    });

    var finalSentence = clippedArray.join(' ');
    document.getElementById("new-sentence").innerHTML = finalSentence;

    event.preventDefault();
  });
});


// THE MAP WAY--REFER TO **var clippedArray = newArray.map**

// $(document).ready(function() {
//   $("form#sentence-cell").submit(function(event) {
//
//     var sentence = $("input#sentence").val();
//     var space = " ";
//     var arrayOfStrings;
//
//     function splitString(stringToSplit, separator) {
//       var arrayOfStrings = stringToSplit.split(separator);
//       return arrayOfStrings;
//     }
//
//     var newArray = splitString(sentence, space);
//     // alert(newArray);
//
//     var clippedArray = newArray.map(function(element){
//         if (element.length > 2) {
//           return element;
//         }
//     });
//
//     clippedArray.reverse();
//     var finalSentence = clippedArray.join(' ');
//     document.getElementById("new-sentence").innerHTML = finalSentence;
//
//     event.preventDefault();
//   });
// });
