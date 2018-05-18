const thumbnails = document.querySelectorAll('.site-preview');

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