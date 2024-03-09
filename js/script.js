

// // increment decrement product price
// let displayNumberElement = document.getElementById('displayNumber');
// let productPriceElement = document.getElementById('productPrice');
// // increment
// function incrementValue() {
//     let currentValue = parseInt(displayNumberElement.value);
//     displayNumberElement.value = currentValue + 1;
//       // price increases
//     let newPrice = (currentValue + 1) * 1200;
//     productPriceElement.textContent = `$${newPrice}`;
// }
// // decrement
// function decrementValue(){
//     let currentValue = parseInt(displayNumberElement.value);
//     if(currentValue>0){ 
//     displayNumberElement.value = currentValue - 1;
//           // price decreases 
//           let newPrice = (currentValue - 1) * 1200;
//           productPriceElement.textContent = `$${newPrice}`;
// }
// }



function incrementQuantity(id) {
    let productPriceElement = document.getElementById('productPrice');
    let quantityInput = document.getElementById(id);
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
      // price increases
      let newPrice = (currentValue + 1) * 1200;
      productPriceElement.textContent = `$${newPrice}`;
}

function decrementQuantity(id) {
    let productPriceElement = document.getElementById('productPrice');
    let quantityInput = document.getElementById(id);
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
            // price decreases 
            let newPrice = (currentValue - 1) * 1200;
            productPriceElement.textContent = `$${newPrice}`;
    }
}



