/* global Cart */
'use strict';

// DONE: Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let tbody = findFirstDescendant('cart', 'tbody');

function findFirstDescendant(parent, tagname){
  parent = document.getElementById(parent);
  let descendant = parent.getElementsByTagName(tagname);
  if ( descendant.length ){
    return descendant[0];
  } else {
    return null;
  }
  }

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// DONE: Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  while(tbody.firstChild){
    tbody.removeChild(tbody.firstChild);
  }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  // DONE: Find the table body
  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR
  for(let i = 0; i < cart.length; i++){
    let tRow = document.createElement('tr');
    table.appendChild(tRow);
    let tDelete = document.createElement('td');
    tDelete.id = `${Cart.items[i].product}`;
    let tQuantity = document.createElement('td');
    let tItem = document.createElement('td');
    tDelete.textContent = 'Delete';
    tDelete.addEventListener('click', removeItemFromCart);
    tQuantity.textContent = `${Cart.items[i].quantity}`;
    tItem.textContent = `${Cart.items[i].product}`;
    tRow.appendChild(tItem);
    tRow.appendChild(tQuantity);
    tRow.appendChild(tDelete);
  }
}

function removeItemFromCart(event) {
let deleteMe = event.target.id;
Cart.removeItem(deleteMe);
renderCart();
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
