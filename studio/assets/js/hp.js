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
	document.body.style.backgroundColor = "black";

})

post2.addEventListener('mouseout', function() {
	img2.style.display="none";
	document.body.style.backgroundColor = "white";
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

var img5 = document.querySelector('.img05');
var post5 = document.querySelector('.post5');

post5.addEventListener('mouseover', function(){
	img5.style.display = "block";
})

post5.addEventListener('mouseout', function() {
	img5.style.display="none";
})

//------------------------------------------------//

var img6 = document.querySelector('.img06');
var post6 = document.querySelector('.post6');

post6.addEventListener('mouseover', function(){
	img6.style.display = "block";
})

post6.addEventListener('mouseout', function() {
	img6.style.display="none";
})

//-------------------------------------------------//
var img7 = document.querySelector('.img07');
var post7 = document.querySelector('.post7');

post7.addEventListener('mouseover', function(){
	img7.style.display = "block";
})

post7.addEventListener('mouseout', function() {
	img7.style.display="none";
})

//-------------------------------------------------//
var img8 = document.querySelector('.img08');
var post8 = document.querySelector('.post8');

post8.addEventListener('mouseover', function(){
	img8.style.display = "block";
})

post8.addEventListener('mouseout', function() {
	img8.style.display="none";
})

//-------------------------------------------------//

var img9 = document.querySelector('.img09');
var post9 = document.querySelector('.post9');

post9.addEventListener('mouseover', function(){
	img9.style.display = "block";
})

post9.addEventListener('mouseout', function() {
	img9.style.display="none";
})
