// selecting shapes and writing a custom shape in the product details page

var active = null;

var shapeButtons = document.querySelectorAll('.shape-opt');

for(var i = 0;i < shapeButtons.length; i++) {
  shapeButtons[i].addEventListener('click', highlight, false);
}

function highlight(){
  if (active === "custom") {
    document.getElementById("custom-text").remove();
  }
  if (active === null) {
    this.style.backgroundColor = "#4F72F0";
    this.style.color = "white";
  } else if (active === this.innerHTML) {
    this.style.backgroundColor = "white";
    this.style.color = "black";
    active = null;
    return;
  } else {
    var curr = document.getElementById(active);
    curr.style.backgroundColor = "white";
    curr.style.color = "black";
    this.style.backgroundColor = "#4F72F0";
    this.style.color = "white";
  }
  if (this.innerHTML === "custom") {
    var div = document.getElementById("details-info");
    var textarea = document.createElement("textarea");
    textarea.id = "custom-text";
    textarea.class = "custom-shape";
    textarea.maxLength = "5000";
    textarea.placeholder = "Please write your request here, and we will see what we can do!"
    div.appendChild(textarea);
  }
  active = this.innerHTML;
}

// increase and decrease quantity in the product details page

var quantityButtons = document.querySelectorAll('.quantity-btn');

for(var i = 0;i < quantityButtons.length; i++) {
  quantityButtons[i].addEventListener('click', changeQuantity, false);
}

function changeQuantity(){
  var curr = document.getElementById('input-quantity');
  var curr_quan = parseInt(curr.value, 10)
  if (this.value === '-' && curr_quan != 1) {
    curr.value = curr_quan - 1;
  } else if (this.value === '+' && curr != 99) {
    curr.value = curr_quan + 1;
  }
}

// adding to cart

document.getElementById('add-btn').addEventListener('click', alertAndRedirect, false);

function alertAndRedirect() {
  if (active != null) {
    var quantity = document.getElementById('input-quantity').value;
    alert(quantity + " order(s) of " + document.getElementById('item-name').innerHTML +
          "(s) with a " + active + " shape have been added to your cart.");
    changeCartNum(parseInt(quantity, 10));
  } else {
    alert("Please select a shape before adding item to cart.");
  }
}

function changeCartNum(increment) {
  var cartNum = document.getElementById('items-num');
  var newCartNum = parseInt(cartNum.innerHTML, 10) + increment;
  (newCartNum > 9) ? cartNum.innerHTML = newCartNum : cartNum.innerHTML = "0" + newCartNum.toString();
}
