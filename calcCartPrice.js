function calcCartPrice () {
	const cartItems = document.querySelectorAll('.card_basket');

	const totalPriceEl = document.querySelector('.modal-price-text')
	let totalPrice = 0;

	cartItems.forEach(function (item) {

		const amountEl = item.querySelector('[data-counter]');
		const priceEl = item.querySelector('.price_basket');
		const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)
		totalPrice += currentPrice;
	})
	totalPriceEl.innerText = totalPrice;
}