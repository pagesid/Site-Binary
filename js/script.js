// Плавный скролл 
$('[data-scroll]').on('click', function (event) {
	event.preventDefault();

	let blockId = $(this).data('scroll');
	let blockOffset = $(blockId).offset().top;

	$('html, body').animate({
		scrollTop: blockOffset
	}, 900);

})

// Zoom
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// 
	});
}

// Фильтры
$('.filter__item').click(function (e) {
	let i = $(this).data('filter');

	if (i == 1) {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.p_' + i).show();
	}

	// Добавляем активный класс
	$('.filter__item').removeClass('active');
	$(this).addClass('active');

	return false;
});
