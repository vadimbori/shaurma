const cartWrapper = document.querySelector('.modal-content-1');
const basket = document.querySelector('[basket]');


window.addEventListener('click', function (event){
	if (event.target.hasAttribute('data-cart')) {
		const card = event.target.closest('.card');


		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.img-card').getAttribute('src'),
			title: card.querySelector('.card-text__name').innerText,
			price: card.querySelector('.card-text-price').innerText,

		}  


		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);

		if(itemInCart) {
			const counterElement = itemInCart.querySelector('[data-counter]');



			 		if (parseInt(counterElement.innerText) < 10) {
			basket.innerText = ++basket.innerText;
			counterElement.innerText = parseInt(counterElement.innerText) + parseInt(1)
		}


		} else{
		const cartItemHTML = `<div class="card_basket" data-id="${productInfo.id}">
	<div class="card_basket-img">
		<div class="card_basket-img-cintainer">
			<img class="img-bask" src="${productInfo.imgSrc}" alt="">
		</div>
	</div>
	<div class="card_basket-name">
		<p class="card_basket-text">${productInfo.title}</p>
	</div>
	<div class="card_basket-price">
		<p class="price_basket card_basket-text">${productInfo.price}</p>
	</div>
	<div class="card_basket-counter">
							<div class="counter_basket">
	<div class="counter_basket-control" data-action="minus">-</div>
	<div class="counter_basket-name" data-counter>1</div>
	<div class="counter_basket-control" data-action="plus">+</div>
	</div>
</div>
</div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);

			basket.innerText = ++basket.innerText;

			}
			toggleCartStatus()

			calcCartPrice()

	}
})