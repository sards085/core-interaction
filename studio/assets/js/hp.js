var circle = document.querySelector('.circle')

	circle.isActive = false
	circle.addEventListener('mousedown', function() {
		 circle.isActive = true
	})

window.addEventListener('mouseup', function() {
		circle.isActive = false
	})

window.addEventListener('mousemove', function(event) {
		if (circle.isActive) {
			circle.style.top = event.pageY - 20 + 'px'
			circle.style.left = event.pageX - 20 + 'px'
		}
	})
