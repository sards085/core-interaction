
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


var debtDiv = document.querySelector('div.debt')
var myDebt = ['TYPOGRAPHY', 'FONTS', 'TYPEFACES', 'TYPE SYSTEMS']

debtDiv.innerText = 'MODULAR ' + myDebt[1]


debtDiv.addEventListener('click' , function() {
  debtDiv.innerText = 'MODULAR ' + myDebt[2]
})

window.addEventListener('click', function(event) {
  var dot = document.querySelector('div.dot')
  dot.classList.add('dot')
  dot.style.top = event.pageY + 'px'
  dot.style.left = event.pageX + 'px'
  document.body.appendChild(dot)
});
