// Humbarger
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close1 = document.getElementById("close");

// Open Navbar
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

// Close Navbar
if (close1) {
  close1.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
// Cart Section 

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".navbar-cart");
let closecart = document.querySelector("#close-cart");

// Open Cart 
cartIcon.onclick = () => {
  cart.classList.add("active");
};
// Close Cart 
closecart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working 

if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}else{
  ready()
}

// Function
function ready(){
  //Remove Items From Cart  
  var removeCartButtons = document.getElementsByClassName('cart-remove');
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons[i]
    button.addEventListener('click', removeCartItem)
  }
  // Quantity logic
  var quantityInputs = document.getElementsByClassName('cart-quantity')
  for (var i = 0; i < quantityInputs.length; i++){
    var input = quantityInputs[i]
    input.addEventListener("change" , quantityChanged); 
  }
  // Add To Cart
  var addCart = document.getElementsByClassName('add-cart');
  for (var i = 0; i < addCart.length; i++){
    var button = addCart[i]
    button.addEventListener('click' , addCartClicked);
  }
}

//Remove Items From Cart
function removeCartItem(event){
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatetotal();
}
// Quantity logic
function quantityChanged(event){
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updatetotal()
}
// Add To Cart 
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
  var price = shopProducts.getElementsByClassName('price')[0].innerText;
  var productImg = shopProducts.getElementsByClassName('product-img')[0].src; 
  addProductToCart(title , price , productImg);
  updatetotal();
}




// Update Total
function updatetotal(){
  var cartContent = document.getElementsByClassName('cart-content')[0] 
  var cartBoxes = cartContent.getElementsByClassName('cart-box') 
  var total = 0;
  for (var i = 0; i < cartBoxes.length ; i++){
    var cartBox = cartBoxes[i] 
    var priceElement = cartBox.getElementsByClassName('cart-price')[0];
    var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0] ;
    var price = parseFloat(priceElement.innerText.replace("₹",""));
    var quantity = quantityElement.value ;
    total = total +  (price * quantity) ; 
    // if price Contains Value in Paisa
    total = Math.round(total * 100) / 100;


    document.getElementsByClassName('total-price')[0].innerText = '₹' + total;
  }
}