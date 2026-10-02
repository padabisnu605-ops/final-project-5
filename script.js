document.addEventListener("DOMContentLoaded", function () {

  // QUANTITY BUTTONS
  var quantityBoxes = document.querySelectorAll(".qty");

  quantityBoxes.forEach(function (qty) {

    var minusButton = qty.querySelector(".minus");
    var plusButton = qty.querySelector(".plus");
    var input = qty.querySelector("input");

    plusButton.onclick = function () {
      var currentValue = Number(input.value);

      if (isNaN(currentValue)) {
        currentValue = 0;
      }

      input.value = currentValue + 1;
    };

    minusButton.onclick = function () {
      var currentValue = Number(input.value);

      if (isNaN(currentValue)) {
        currentValue = 0;
      }

      if (currentValue > 0) {
        input.value = currentValue - 1;
      }
    };

  });


  // REMOVE ITEM FROM CART
  var removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach(function (button) {

    button.onclick = function (e) {

      e.preventDefault();

      var cartItem = button.closest(".cart-item");

      if (cartItem) {
        cartItem.remove();
      }

    };

  });


  // PRODUCT THUMBNAILS
  var thumbnails = document.querySelectorAll(".thumbs img");

  thumbnails.forEach(function (img) {

    img.onclick = function () {

      thumbnails.forEach(function (image) {
        image.classList.remove("on");
      });

      img.classList.add("on");

      var bigPic = document.getElementById("bigPic");

      if (bigPic) {
        bigPic.src = img.src;
      }

    };

  });


  // FILTER PILLS
  var pills = document.querySelectorAll(".pill");

  pills.forEach(function (pill) {

    pill.onclick = function (e) {

      e.preventDefault();

      pills.forEach(function (item) {
        item.classList.remove("on");
      });

      pill.classList.add("on");

    };

  });


  // PAYMENT OPTION
  var paymentOptions = document.querySelectorAll("input[name='pay']");

  paymentOptions.forEach(function (radio) {

    radio.onchange = function () {

      var cardForm = document.getElementById("cardForm");

      if (cardForm) {

        if (radio.value === "card") {
          cardForm.style.display = "";
        } else {
          cardForm.style.display = "none";
        }

      }

    };

  });

});