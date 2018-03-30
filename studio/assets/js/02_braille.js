var letters = Array.from(document.querySelectorAll('.letter'))

letters.forEach(function(letter) {
	letter.isActive = false
	letter.addEventListener('mousedown', function() {
		 letter.isActive = true
	})

})

window.addEventListener('mouseup', function() {
	letters.forEach(function(letter) {
		letter.isActive = false
	})
})

window.addEventListener('mousemove', function(event) {
	letters.forEach(function(letter) {
		if (letter.isActive) {
			letter.style.top = event.pageY - 20 + 'px'
			letter.style.left = event.pageX - 20 + 'px'
		}
	})
})
