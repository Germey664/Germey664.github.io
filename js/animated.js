const animItems = document.querySelectorAll('.animItems');
const imageItems = document.querySelectorAll('.imageItems');
const preloader = document.getElementById('preloader');

let preloaderFinish = false;

if(animItems.length > 0){
	window.addEventListener('scroll',function(){
		animOnScroll();
		donloadOnScroll();
		checkScrollJQuery();
			});

	console.log("EventListnerScrollOn");
	checkLoadingFinish();
}else{
	console.log("element not found");
	console.log(animItems.length);
}
function checkLoadingFinish(){
	if(preloader.classList.contains('preloaderFinished')){
		preloaderFinish = true;
		animOnScroll();
		donloadOnScroll();
		scrollJQuery();
		setTimeout(() => modalWindowShow(), 10000);
	}
	else{
		setTimeout(() => checkLoadingFinish(), 1000);
		console.log("loading");
	}
}
function checkScrollJQuery(){
	let scrollDistance = $(window).scrollTop();
	$('.section').each((i,el) =>{
		if($(el).offset().top - $('nav').height() <= scrollDistance){
			$('nav a').each((i,el2) => {
				if($(el2).hasClass('active')){
					$(el2).removeClass('active');
				}
			});
			$('nav li:eq('+ i +')').find('a').addClass('active');
		}	
	})
}
function scrollJQuery(){
	$('nav a').on('click', function() {
		scrollJQueryWorking(this);
	});
}
function scrollJQueryWorking(_this = 0){
	//console.log("scrollJQuery");
		if(_this == 0){
			_this = this;
		}
	    let href = $(_this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(href).offset().top - $('nav').height()
	    }, {
	        duration: 370,   // по умолчанию «400» 
	        easing: "linear" // по умолчанию «swing» 
	    });

	    return false;
}
function modalWindowHide(){
	let el = document.getElementById("modalDialogAds");
	el.style.display = "none";
}
function modalWindowShow(){
	let el = document.getElementById("modalDialogAds");
	el.style.display = "block";
}
function calculator(){
	console.log("start calculator");
	if(confirm("Привет хочешь посмотреть цены и сроки?")){
		let textArr = [
			[1000,200,300,200,2000,1500,3000],
			[100,200,1000,0],
			[200,300,800],
			[100,200,600],
			[1000,800,600,400,200,0],
		]
		let typeWebsite, typeDesign, typeAdaptive, typeSystem,time;
		do{
			typeWebsite = prompt(
			"Какой тип сайта вам нужен. \n 1. - Интернет представительство. \n 2. - Сайт визитка. \n 3. - Корпоративный сайт. \n 4. - Лендинг \n 5. - Интернет магазин. \n 6. - Интернет витрина. \n 7. - Сервис");
		}while((typeWebsite.match(/^[0-9]+$/) == null) || !((typeWebsite > 0) && (typeWebsite < 8)));
		do{
			typeDesign = prompt(
			"Какой варианта дизайна вам нужно. \n 1. - Есть уже готовый дизайн. \n 2. - Работа в паре с вашим дизайнером. \n 3. - Заказной с нуля. \n 4. - Шаблоный");
		}while((typeDesign.match(/^[0-9]+$/) == null) || !((typeDesign > 0) && (typeDesign < 5 )));
		do{
			typeAdaptive = prompt(
			"Какой тип верстки вам нужен. \n 1. - Жесткая. \n 2. - Упругая. \n 3. - Адаптивная.");
		}while((typeAdaptive.match(/^[0-9]+$/) == null) || !((typeAdaptive > 0) && (typeAdaptive < 4)));
		do{
			typeSystem = prompt(
			"На какой платформе планируете работать. \n 1. - ПК. \n 2. - Смартфоны. \n 3. - Смартфоны и ПК");
		}while((typeSystem.match(/^[0-9]+$/) == null) || !((typeSystem > 0) && (typeSystem < 4)));
		do{
			time = prompt(
			"Сколько времени вы готовы ждать выполнение заказа. \n Укажите количество недель. \n Если вам необходимо скоросное выполнение оставте заявку на почту");
		}while((typeSystem.match(/^[0-9]+$/) == null) || !((typeSystem > 0) && (typeSystem < 97)));
		
		let timeBuff;
		if(time>textArr[4].length){
			timeBuff = textArr[4].length;
		}else{
			timeBuff = time;
		}

		console.log("typeWebsite " + typeWebsite + "  " + textArr[0][typeWebsite - 1]);
		console.log("typeDesign " + typeDesign + "  " + textArr[1][typeDesign - 1]);
		console.log("typeAdaptive " + typeAdaptive + "  " + textArr[2][typeAdaptive - 1]);
		console.log("typeSystem " + typeSystem + "  " + textArr[3][typeSystem - 1]);
		console.log("time " + time + "  " + textArr[4][timeBuff - 1]);

		let cost = 
		textArr[0][typeWebsite - 1] + textArr[1][typeDesign - 1] +
		textArr[2][typeAdaptive - 1] + textArr[3][typeSystem - 1] +
		textArr[4][timeBuff - 1];
		confirm("Приблизительная цена составляет: " + cost+ " \n Хотите уточнить стоимость у оператора?");
	}
}
function calculatorDocument(typeWebsite = 0, typeDesign = 0, typeAdaptive = 0, typeSystem = 0,time = 0){
	console.log("start calculator Block");
		let textArr = [
			[1000,200,300,200,2000,1500,3000],
			[100,200,1000,0],
			[200,300,800],
			[100,200,600],
			[1000,800,600,400,200,0],
		];
		typeWebsite = document.getElementById('costTypeSide').value;
		typeDesign = document.getElementById('costTypeDesign').value;
		typeSystem = document.getElementById('costTypeSystem').value;
		time = document.getElementById('costTypeTime').value;

		let timeBuff;
		if(time>textArr[4].length){
			timeBuff = textArr[4].length;
		}else{
			timeBuff = time;
		}
		if(typeWebsite == 0 || typeDesign == 0 || typeSystem == 0 || time == 0){
			return;
		}

		console.log("typeWebsite " + typeWebsite + "  " + textArr[0][typeWebsite - 1]);
		console.log("typeDesign " + typeDesign + "  " + textArr[1][typeDesign - 1]);
		console.log("typeAdaptive " + typeAdaptive + "  " + textArr[2][typeAdaptive - 1]);
		console.log("typeSystem " + typeSystem + "  " + textArr[3][typeSystem - 1]);
		console.log("time " + time + "  " + textArr[4][timeBuff - 1]);

		let cost = 
		textArr[0][typeWebsite - 1] + textArr[1][typeDesign - 1] + textArr[3][typeSystem - 1] +
		textArr[4][timeBuff - 1];
		let costText = document.getElementById('costTypeTextCost');
		costText.innerHTML = cost;
		//confirm("Приблизительная цена составляет: " + cost+ " \n Хотите уточнить стоимость у оператора?");
}
function modalImageCaseFocus(){
	console.log("this" + this.getAttribute('src'));
	if(this.getAttribute('focus') == 'false'){
		this.setAttribute('focus','true');
		this.style.position = "fixed";
		this.style.zIndex = "3";
		this.style.top = "10vh";
		this.style.left = "10vh";
		this.classList.remove('w-100');
		this.classList.add('w-80');
	}else{
		this.setAttribute('focus','false');
		this.style.position = "static";
		this.style.zIndex = "0";
		this.style.top = "0";
		this.style.left = "0";
		this.classList.remove('w-90');
		this.classList.add('w-100');
	}
	
}
function offset(el){
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}

function animOnScroll(){
	if(preloaderFinish){	
		//console.log("loading complete");
		for(let index = 0; index < animItems.length; index++){
			const Item = animItems[index];
			const ItemHight = Item.offsetHeight;
			const ItemOffset = offset(Item).top;
			const Start = 4;

			let ItemPoint = window.innerHeight - ItemHight / Start;

			if(ItemHight > window.innerHeight){
				ItemPoint = window.innerHeight - window.innerHeight / Start;
			}

			if((pageYOffset > ItemOffset - ItemPoint) && pageYOffset < (ItemOffset + ItemHight)){
				Item.classList.add('_showAnimated');
			}else{
				Item.classList.remove('_showAnimated');
			}
		}
	}
}
function donloadOnScroll(){
	if(preloaderFinish){	
		//console.log("loading complete");
		for(let index = 0; index < imageItems.length; index++){
			const Item = imageItems[index];
			const ItemHight = Item.offsetHeight;
			const ItemOffset = offset(Item).top;
			const Start = 10;

			let ItemPoint = window.innerHeight - ItemHight / Start;

			if(ItemHight > window.innerHeight){
				ItemPoint = window.innerHeight - window.innerHeight / Start;
			}

			if((pageYOffset > ItemOffset - ItemPoint) && pageYOffset < (ItemOffset + ItemHight)){
				if(!Item.classList.contains('_downloadNormalImage')){
					Item.classList.add('_downloadNormalImage');
					if(Item.tagName == 'IMG' || Item.tagName == 'img'){
						let buff = Item.getAttribute('src');
						Item.setAttribute('src',Item.getAttribute('srcToggle'));
						Item.setAttribute('srcToggle',buff);
					}
					if(Item.tagName == 'DIV' || Item.tagName == 'div' || Item.tagName == 'SECTION' || Item.tagName == 'section'){
						Item.style.background = Item.getAttribute('urlNormal');
					}
				}
			}else{
				if(Item.classList.contains('_downloadNormalImage')){
					Item.classList.remove('_downloadNormalImage');
					if(Item.tagName == 'IMG' || Item.tagName == 'img'){
						let buff = Item.getAttribute('srcToggle');
						Item.setAttribute('srcToggle',Item.getAttribute('src'));
						Item.setAttribute('src',buff);
					}
					if(Item.tagName == 'DIV' || Item.tagName == 'div' || Item.tagName == 'SECTION' || Item.tagName == 'section'){
						Item.style.background = Item.getAttribute('urlBad');
					}
				}
				
			}
		}
	}
}