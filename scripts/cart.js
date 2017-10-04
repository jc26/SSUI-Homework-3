// removing from cart

var removeButtons = document.querySelectorAll('.rm-btn');

for(var i = 0;i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeItem, false);
}

function removeItem() {
  var parent = document.getElementById(this.id.substring(0,1));
  changeCartNum(-parseInt(document.getElementById(parent.id + "-quantity").innerHTML));
  subtractTotal(getSubtotal(parent.id));
  parent.remove();
  checkEmpty();
}

function changeCartNum(increment) {
  var cartNum = document.getElementById('items-num');
  var newCartNum = parseInt(cartNum.innerHTML, 10) + increment;
  (newCartNum > 9) ? cartNum.innerHTML = newCartNum : cartNum.innerHTML = "0" + newCartNum.toString();
}

function getSubtotal(item) {
  return parseFloat(document.getElementById(item + "-subtotal").innerHTML.substring(1));
}

function subtractTotal(dec) {
  var totalDiv = document.getElementById("total-price").innerHTML;
  var currPrice = parseFloat(totalDiv.substring(1));
  var newTotal = (currPrice - dec).toFixed(2);
  document.getElementById("total-price").innerHTML = "$" + newTotal.toString();
}

function checkEmpty() {
  var totalDiv = document.getElementById("total-price").innerHTML;
  var currTotal = parseFloat(totalDiv.substring(1));
  if (currTotal === 0.00) {
    document.getElementById("cart-table").remove();
    document.getElementById("total-checkout").remove();
    var div = document.getElementById("page-title");
    var noItemsMsg = document.createElement("h3");
    noItemsMsg.innerHTML = "No Items.";
    noItemsMsg.style.fontWeight = "300";
    noItemsMsg.style.fontSize = "30px";
    div.appendChild(noItemsMsg);
  }
}
