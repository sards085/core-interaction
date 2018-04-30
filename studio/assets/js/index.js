
fetch('https://wordsapiv1.p.mashape.com/words/typography', {
	headers: {
      'X-Mashape-Key': 'CscWC3WPg1mshdBHive95ZA1tW31p1SzgXZjsnuSuEj3fRozvT'
        }
})
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
    });


var modular = document.querySelector('div.modular')
// var synonyms = 'response.synonyms'

modular.innerText = 'MODULAR FONTS'
//
//
// modular.addEventListener('click' , function() {
//   modular.innerText = 'MODULAR ' + synonyms
// })



window.addEventListener('click', function(event) {
  var dot = document.querySelector('div.dot')
  dot.classList.add('dot')
  dot.style.top = event.pageY + 'px'
  dot.style.left = event.pageX + 'px'
  document.body.appendChild(dot)
});
