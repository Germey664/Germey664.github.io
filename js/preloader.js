document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('preloader');
			preloader.classList.add('preloaderFinished');
			animOnScroll();
	},1000);
}
