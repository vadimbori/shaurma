function toggleCartStatus() {


	const cartWrapper = document.querySelector('.modal-content-1');

	const cartEmptyBadge = document.querySelector('[data-cart-empty]');
	const orderForm = document.querySelector('#order-form');

	if (cartWrapper.children.length > 0) {
		cartEmptyBadge.classList.add('none');
		orderForm.classList.remove('none');
	} else {
		orderForm.classList.add('none');
		cartEmptyBadge.classList.remove('none');
	}
}