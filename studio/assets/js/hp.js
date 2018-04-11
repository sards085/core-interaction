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

var img1 = document.querySelector('.img01');
var post1 = document.querySelector('.post1');

post1.addEventListener('mouseover', function(){
	img1.style.display = "block";
})

post1.addEventListener('mouseout', function() {
	img1.style.display="none";
})

//------------------------------------------------//

var img2 = document.querySelector('.img02');
var post2 = document.querySelector('.post2');

post2.addEventListener('mouseover', function(){
	img2.style.display = "block";
})

post2.addEventListener('mouseout', function() {
	img2.style.display="none";
})

//------------------------------------------------//

var img3 = document.querySelector('.img03');
var post3 = document.querySelector('.post3');

post3.addEventListener('mouseover', function(){
	img3.style.display = "block";
})

post3.addEventListener('mouseout', function() {
	img3.style.display="none";
})

//------------------------------------------------//

var img4 = document.querySelector('.img04');
var post4 = document.querySelector('.post4');

post4.addEventListener('mouseover', function(){
	img4.style.display = "block";
})

post4.addEventListener('mouseout', function() {
	img4.style.display="none";
})

//------------------------------------------------//

var img3 = document.querySelector('.img03');
var post3 = document.querySelector('.post3');

post3.addEventListener('mouseover', function(){
	img3.style.display = "block";
})

post3.addEventListener('mouseout', function() {
	img3.style.display="none";
})

//------------------------------------------------//

var img3 = document.querySelector('.img03');
var post3 = document.querySelector('.post3');

post3.addEventListener('mouseover', function(){
	img3.style.display = "block";
})

post3.addEventListener('mouseout', function() {
	img3.style.display="none";
})
