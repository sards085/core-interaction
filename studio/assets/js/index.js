var debtDiv = document.querySelector('div.debt')
var myDebt = 'TYPOGRAPHY'
debtDiv.innerText = 'MODULAR ' + myDebt


debtDiv.addEventListener('click' , function() {
  myDebt = 'TYPE SYSTEMS'
  debtDiv.innerText = 'MODULAR ' + myDebt
})


window.addEventListener('click', function(event) {
  var dot = document.querySelector('div.dot')
  dot.classList.add('dot')
  dot.style.top = event.pageY + 'px'
  dot.style.left = event.pageX + 'px'
  document.body.appendChild(dot)
})
