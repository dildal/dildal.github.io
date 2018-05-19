const thumbnails = document.querySelectorAll('.site-preview');
let startTime;

function show(){
	this.querySelector('.blurb').style.left = 0;
}

function hide(){
	this.querySelector('.blurb').style.left = '-1000px';	
}

thumbnails.forEach(thumbnail => {
	thumbnail.addEventListener('mouseenter', show);
	thumbnail.addEventListener('mouseleave', hide);
})


//smooth scroll
const anchors = document.querySelectorAll('.internal');

anchors.forEach(function(anchor){
	anchor.addEventListener('click', scroll);
})


function smoothScroll(timestamp, start, destination, duration){
	// ease in out quad function
	// t<.5 ? 2*t*t : -1+(4-2*t)*t
	console.log(start, destination);
	let runtime = timestamp - startTime;
	let progress = runtime/duration;
	let speed = progress < .5 ? 2*progress*progress : -1+(4-2*progress)*progress;
	let distance = destination-start;
	console.log(start+(distance*speed));
	window.scrollTo(0, start+(distance*speed));
	if(runtime < duration){
		requestAnimationFrame(function(timestamp){
			smoothScroll(timestamp, start, destination, duration);
		});
	}
}

function scroll(e){
	e.preventDefault();
	let destination = document.querySelector(`${this.hash}`).offsetTop - 60;
	let start = window.scrollY;
	requestAnimationFrame(timestamp => {
		startTime = timestamp;
		smoothScroll(startTime, start, destination, 800);
	})
}