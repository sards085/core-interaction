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
})
