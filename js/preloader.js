document.body.onload = function(){
	setTimeout(function(){
		var preloader = document.getElementById('preloader');
			preloader.classList.add('preloaderFinished');
			console.log("preloader complete load");
	},1000);
}
