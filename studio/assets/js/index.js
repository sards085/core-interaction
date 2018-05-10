
fetch('https://wordsapiv1.p.mashape.com/words/typeface', {
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
        // console.log(jsonData);
        render(jsonData);
    });

function render(data) {

	console.log(data.results[0]);

    var modular = document.querySelector('.modular')
    var modularisActive = false
    var fonts = [data.results[0].synonyms[1], data.results[0].synonyms[2], data.results[0].typeOf[0], data.results[0].memberOf[0], data.results[0].hasTypes[14]]
         modular.addEventListener('mouseover',function() {
        if (modularisActive) {
            modular.innerText = 'MODULAR ' + fonts[4]
      } else {
            modular.innerText = 'MODULAR ' + fonts[3]
      }
        modularisActive = !modularisActive
    })
 }


window.addEventListener('click', function(event) {
  var dot = document.querySelector('div.dot')
  dot.classList.add('dot')
  dot.style.top = event.pageY + 'px'
  dot.style.left = event.pageX + 'px'
  document.body.appendChild(dot)
});

var md = new MobileDetect(window.navigator.userAgent);

if (md.phone()) {
	window.location.href="hp.html"
	console.log('hey its a phone')
}
