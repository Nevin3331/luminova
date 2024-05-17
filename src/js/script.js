$('.review_carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });

  const items = document.querySelectorAll('.product_wrapper_item');

  items.forEach(item => {
      item.addEventListener('mouseenter', () => {
          items.forEach(otherItem => otherItem.classList.remove('active'));
          item.classList.add('active');
      });
  
      item.addEventListener('mouseleave', () => {
          item.classList.remove('active');
      });
  });
  
  
  



//Hamburger
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
