// ITERATION 1

function updateSubtotal(product) {
console.log('product', product)
  let price = product.querySelector('.price span') 
  console.log(price)
  console.log(price.innerText)
  let quantity = product.querySelector('.quantity input')
  console.log(quantity.value)
  let totalprice = price.innerText * quantity.value
  console.log(totalprice)
  
  let subtotal = product.querySelector('.subtotal span' )
  subtotal.innerText = totalprice 
  return subtotal
  //console.log('Calculating subtotal, yey!'); 
  } 


function calculateAll() { 
//ITERATION 2


  const allProducts = document.querySelectorAll('.product');
  //console.log(allProducts)
  allProducts.forEach(function(product){
   updateSubtotal(product);
   //console.log('.products')
  })


  // ITERATION 3

  /*let totalProducts = 0
  let totalValue = 0

for (let i =0; i< allProducts.length; i++) {
totalProducts += updateSubtotal(allProducts[i])

let totalValue = document.querySelector('#total-value span')
totalValue.innerText  = totalProducts.innerText
}*/

}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});