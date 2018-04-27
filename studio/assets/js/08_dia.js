var bigimg = document.querySelector('.bigimg');
var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');
var img3 = document.querySelector('.img3');

bigimg.addEventListener('mouseover', function(){
	bigimg.style.display = "block";
})

bigimg.addEventListener('mouseout', function() {
	bigimg.style.display="none";
})
