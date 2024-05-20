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
    menu_laptop.classList.toggle('active'); 
  });

  menuClose.addEventListener('click', function() {
    menu_laptop.classList.remove('active');
  });
});

//Dropdown
    document.addEventListener('DOMContentLoaded', function() {
        var dropdownItems = document.querySelectorAll('.dropdown-item');

        dropdownItems.forEach(function(item) {
            item.addEventListener('click', function(event) {
                event.preventDefault();

                var selectedText = item.textContent.trim();
                var dropdownToggle = item.closest('.dropdown').querySelector('.dropdown-toggle');

                dropdownToggle.textContent = selectedText;
            });
        });
    });

//Shopping cart
var el;

// Обновление суммы при изменении количества или удалении товара
function updateSubtotal() {
  $("tr").each(function() {
    var subtotal = parseFloat($(this).children(".price").text().replace("$",""));
    var amount = parseFloat($(this).children(".amount").children("input").val());
    $(this).children(".pricesubtotal").text("$" + (Math.round(subtotal * amount * 100) / 100).toFixed(2));
  });
  changed();
}

// Функция для обработки изменений
function changed() {
  var subtotal = 0;
  $(".p").each(function() {
    subtotal = subtotal + parseFloat($(this).children(".pricesubtotal").text().replace("$",""));
  });
  $(".totalpricesubtotal").text("$" + (Math.round(subtotal * 100) / 100).toFixed(2));
  var a = (subtotal / 100 * 105) + parseFloat($(".shipping").text());
  var total = (Math.round(a * 100) / 100).toFixed(2);
  $(".realtotal").text(total);
  $(".taxval").text("($" + (Math.round(subtotal * 5) / 100).toFixed(2) + ") ");
}

// Обработчик события изменения поля ввода количества
$(".amount > input").on("change keyup", function() {
  if (parseFloat($(this).val()) < 1) {
    $(this).val(1);
    el = $(this).parents("td").parents("tr").children(".remove");
    el.addClass("hey");
    setTimeout(function() {
      el.removeClass("hey");
    }, 200);
  }
  updateSubtotal();
});

// Обработчик события удаления товара
$(".remove > div").click(function() {   
  $(this).parents("td").parents("tr").remove();
  updateSubtotal();
});

// Обработчик события при клике на кнопку "Checkout"
$("#checkout").click(function() {
  alert("And that's $" + $(".realtotal").text() + ", please.");
});

// Изначальное обновление суммы
updateSubtotal();

// Обработчик события при клике на кнопку "-"
$(".qty-minus").click(function(event) {
  event.preventDefault(); // Предотвращение автоматического скролла
  var input = $(this).next("input");
  var currentValue = parseFloat(input.val());
  if (currentValue > 1) {
    input.val(currentValue - 1);
    updateSubtotal();
  }
});

// Обработчик события при клике на кнопку "+"
$(".qty-plus").click(function(event) {
  event.preventDefault(); // Предотвращение автоматического скролла
  var input = $(this).prev("input");
  var currentValue = parseFloat(input.val());
  input.val(currentValue + 1);
  updateSubtotal();
});

// Обработчик события при клике на кнопку "expand"
$("#expand").click(function() {
  $("#coolstuff").toggle();
});
