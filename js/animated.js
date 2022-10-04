const animItems = document.querySelectorAll('.animItems');
const preloader = document.getElementById('preloader');
let preloaderFinish = false;
if(animItems.length > 0){
	window.addEventListener('scroll',animOnScroll);
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
		setTimeout(() => calculator(), 3000);
	}
	else{
		setTimeout(() => checkLoadingFinish(), 1000);
		console.log("loading");
	}
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
function animOnScroll(){
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
	}
	if(preloaderFinish){	
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
		//checkLoadingFinish();
	}
}