const animItems = document.querySelectorAll('.animItems');
const preloader = document.getElementById('preloader');
if(animItems.length > 0){
	window.addEventListener('scroll',animOnScroll);
	console.log("element found");
	function animOnScroll(){
		if(preloader.classList.contains('preloaderFinished')){	
			console.log("loading complete");
			for(let index = 0; index < animItems.length; index++){
				const animItem = animItems[index];
				const animItemHight = animItem.offsetHeight;
				const animeItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHight / animStart;

				if(animItemHight > window.innerHeight){
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if((pageYOffset > animeItemOffset - animItemPoint) && pageYOffset < (animeItemOffset + animItemHight)){
					animItem.classList.add('_active');
				}else{
					animItem.classList.remove('_active');
				}
			}
		}else{
			console.log("loading");
			console.log("start");
			setTimeout(() => {
				animOnScroll();
			},1100);

		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
		
}else{
	console.log("element not found");
	
	console.log(animItems.length);
}
