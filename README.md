# О сайте
Лаконичн сайт с интересными блоками. На данном проекте хорошо закрепил навыки по адаптивной верстке, а так же убедился, что отрицатетельный margin это отличная штука.
JS Здесь применен для скролла, слайдера, фильтра и активного класса.

## JavaScript
В данном проекте была использована популярная библиотека jQuery.

### _Скролл к блокам при клике на ссылки_

Отменяем стандарное поведение ссылки:
```
event.preventDefault();
```

Создаем переменную, в которой будет сохраняться значение 'data-scroll':
```
let blockId = $(this).data('scroll');
```
Далее создаем селектор blockId, к которому потом наша странице будет переходить при клике:

```
let blockOffset = $(blockId).offset().top;
```
Задаем анимацию:
```
$('html, body').animate({
			scrollTop: blockOffset
		}, 900);
```
### _Активируем слайдер_

При помощи библиотеки baguettebox делаем слайдер
Акивируем по скрипту:
```
if ($('.gallery').length > 0) {
	baguetteBox.run('.gallery', {
		// 
	});
}
```
### _Фильтры_
Навешиваем на класс событие клик.
```
$('.filter__item').click(function (e) {
	
});
```
Создаем переменную i, присваем ей значение data-filter.
После этого создаем инструкцию if, при i=1.
```
if (i == 1) {
		$('.portfolio__column').show();
	} else {
		$('.portfolio__column').hide();
		$('.portfolio__column.p_' + i).show();
	}
```
Если значение ata-filter = 1, то показывать (.show();) все.
Иначе скрыть (.hide();)
Но, фильтры с классом p+i показать.
Тут же добавляем активный класс:
У всех
```
filter__item
```
Убираем активный класс, но при выполнении функции (this), добавляем.
