
window.addEventListener('click', function () {
	let counter
	const basket = document.querySelector('[basket]');


	if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
	const counterWrapper = event.target.closest('.counter_basket');

	counter = counterWrapper.querySelector('[data-counter]');
	}




	if (event.target.dataset.action === 'plus') {

		if (parseInt(counter.innerText) < 10) {
			counter.innerText = ++counter.innerText;
			basket.innerText = ++basket.innerText;
			calcCartPrice()
		}

	}


	if (event.target.dataset.action === 'minus') {



				if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText;
			basket.innerText = --basket.innerText;
			calcCartPrice()
		} else if (event.target.closest('.card_basket') && parseInt(counter.innerText) === 1) {
			event.target.closest('.card_basket').remove();
			basket.innerText = --basket.innerText; 
			calcCartPrice()
			toggleCartStatus()	

		}
		
	}
});