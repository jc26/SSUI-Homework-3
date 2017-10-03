// removing from cart

var removeButtons = document.querySelectorAll('.rm-btn');

for(var i = 0;i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', removeItem, false);
}

function removeItem(){
  var parent = document.getElementById(this.id.substring(0,1));
  console.log(parent);
  parent.remove();
  changeCartNum(-parseInt(this.id.substring(2, 3)));
}

function changeCartNum(increment) {
  var cartNum = document.getElementById('items-num');
  var newCartNum = parseInt(cartNum.innerHTML, 10) + increment;
  (newCartNum > 9) ? cartNum.innerHTML = newCartNum : cartNum.innerHTML = "0" + newCartNum.toString();
}
