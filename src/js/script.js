$('.review_carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });


  document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом product_wrapper_item
    const items = document.querySelectorAll('.product_wrapper_item');

    // Добавляем обработчики событий для каждого элемента
    items.forEach(item => {
        // Добавляем обработчик для наведения курсора
        item.addEventListener('mouseenter', () => {
            // Удаляем класс active у всех элементов с классом product_wrapper_item_footer
            document.querySelectorAll('.product_wrapper_item_footer').forEach(footer => {
                footer.classList.remove('active');
            });

            // Удаляем класс active у всех элементов .product_wrapper_item
            items.forEach(item => {
                item.classList.remove('active');
            });

            // Добавляем класс active к текущему элементу
            item.classList.add('active');

            // Показываем только footer, который является потомком текущего элемента
            const footer = item.querySelector('.product_wrapper_item_footer');
            if (footer) {
                footer.classList.add('active');
            }
        });

        // Добавляем обработчик для ухода курсора с элемента .product_wrapper_item
        item.addEventListener('mouseleave', () => {
            // Удаляем класс active у всех элементов с классом product_wrapper_item_footer
            document.querySelectorAll('.product_wrapper_item_footer').forEach(footer => {
                footer.classList.remove('active');
            });

            // Удаляем класс active у текущего элемента
            item.classList.remove('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const burger = document.querySelector('.burger');
  const menu_laptop = document.querySelector('.menu_laptop');
  const menuClose = document.querySelector('.menu_close');

  burger.addEventListener('click', function() {
    menu_laptop.classList.toggle('active'); // добавляем или удаляем класс 'active'
  });

  menuClose.addEventListener('click', function() {
    menu_laptop.classList.remove('active'); // закрываем меню
  });
});
