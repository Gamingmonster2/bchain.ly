console.log('Hello');
AOS.init();

// FAQ
document.querySelectorAll('.faq-title').forEach((item) => {
	item.addEventListener('click', () => {
		const content = item.nextElementSibling;
		const isActive = content.classList.contains('active');

		// Close all active items
		document.querySelectorAll('.faq-content.active').forEach((activeItem) => {
			activeItem.classList.remove('active');
			activeItem.previousElementSibling.classList.remove('active');
		});

		// Toggle the clicked item
		if (!isActive) {
			content.classList.add('active');
			item.classList.add('active');
		}
	});
});
