// // Object to store previous quantities
// let previousQuantity = {};

// // Function to decrement quantity
// function decrementQuantity(inputId, priceId, subtotalId, taxId, totalId) {
//     let inputElement = document.getElementById(inputId);
//     let currentValue = parseInt(inputElement.value);
//     if (currentValue > 0) {
//         inputElement.value = currentValue - 1;
//         updatePrice(inputId, priceId, subtotalId, taxId, totalId);
//     }
// }

// // Function to increment quantity
// function incrementQuantity(inputId, priceId, subtotalId, taxId, totalId) {
//     let inputElement = document.getElementById(inputId);
//     let currentValue = parseInt(inputElement.value);
//     inputElement.value = currentValue + 1;
//     updatePrice(inputId, priceId, subtotalId, taxId, totalId);
// }

// // Function to update price
// function updatePrice(inputId, priceId, subtotalId, taxId, totalId) {
//     let inputElement = document.getElementById(inputId);
//     let quantity = parseInt(inputElement.value);
//     let priceElement = document.getElementById(priceId);
//     let unitPrice = (priceId === 'price1') ? 1200 : 1500; // Adjust this value to the actual unit price
//     let totalPrice = quantity * unitPrice;
//     priceElement.textContent = "$" + totalPrice;

//     updateSubtotal(subtotalId);
//     calculateTax(subtotalId, taxId, totalId);
// }

// // Function to remove product
// function removeProduct(productId, subtotalId, taxId, totalId) {
//     let inputId = productId.replace("product", "quantity");
//     let inputElement = document.getElementById(inputId);
//     let previousValue = previousQuantity[inputId];
//     if (previousValue !== undefined) {
//         inputElement.value = previousValue; // Restore the previous quantity
//         updatePrice(inputId, 'price' + productId.substring(7), subtotalId, taxId, totalId);
//     }
// }

// // Function to update subtotal
// function updateSubtotal(subtotalId) {
//     let subtotal = 0;
//     let productContainers = document.querySelectorAll('.product-container');
//     productContainers.forEach(function(container) {
//         let priceElement = container.querySelector('.productPrice');
//         let price = parseFloat(priceElement.textContent.replace('$', ''));
//         subtotal += price;
//     });
//     document.getElementById(subtotalId).textContent = "$" + subtotal;
// }

// // Function to calculate tax and total
// function calculateTax(subtotalId, taxId, totalId) {
//     let subtotalElement = document.getElementById(subtotalId);
//     let subtotal = parseFloat(subtotalElement.textContent.replace('$', ''));
//     let tax = subtotal * 0.1; // Assuming 10% tax rate
//     document.getElementById(taxId).textContent = "$" + tax.toFixed(2);
    
//     let total = subtotal + tax;
//     document.getElementById(totalId).textContent = "$" + total.toFixed(2);
// }

// // Initialize previous quantities
// document.addEventListener('DOMContentLoaded', function() {
//     let quantityInputs = document.querySelectorAll('.form-control');
//     quantityInputs.forEach(function(input) {
//         previousQuantity[input.id] = parseInt(input.value);
//     });
// });



// let checkoutClicked = false; // Flag to track if checkout button is clicked
// // Function to calculate total
// function calculateTotal() {
//     checkoutClicked = true; // Set the flag to true when checkout button is clicked
//     let subtotal = calculateSubtotal();
//     let tax = calculateTax(subtotal);
//     let total = subtotal + tax;

//     // Update HTML elements with new subtotal, tax, and total values
//     document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
//     document.getElementById("tax").textContent = "$" + tax.toFixed(2);
//     document.getElementById("total").textContent = "$" + total.toFixed(2);
// }

// // Function to calculate subtotal
// function calculateSubtotal() {
//     // Add your logic here to calculate subtotal
// }























//  // Function to decrement quantity
//  function decrementQuantity(inputId) {
//     let inputElement = document.getElementById(inputId);
//     let currentValue = parseInt(inputElement.value);
//     if (currentValue > 1) {
//         inputElement.value = currentValue - 1;
//         updatePrice(inputId);
//     }
// }

// // Function to increment quantity
// function incrementQuantity(inputId) {
//     let inputElement = document.getElementById(inputId);
//     let currentValue = parseInt(inputElement.value);
//     inputElement.value = currentValue + 1;
//     updatePrice(inputId);
// }

// // Function to update price
// function updatePrice(inputId) {
//     let inputElement = document.getElementById(inputId);
//     let quantity = parseInt(inputElement.value);
//     let priceElement = document.getElementById('price' + inputId.slice(-1));
//     let price = 100 * (inputId === 'quantity2' ? 2 : 1); // Assuming product 1 is $100 and product 2 is $200
//     priceElement.textContent = "$" + (price * quantity);
// }

// // Function to calculate total
// function calculateTotal() {
//     let quantity1 = parseInt(document.getElementById('quantity1').value);
//     let quantity2 = parseInt(document.getElementById('quantity2').value);
//     let price1 = parseInt(document.getElementById('price1').textContent.slice(1));
//     let price2 = parseInt(document.getElementById('price2').textContent.slice(1));
//     let subtotal = (quantity1 * price1) + (quantity2 * price2);
//     let tax = subtotal * 0.05; // Assuming 5% tax rate
//     let total = subtotal + tax;
//     document.getElementById('subtotal').textContent = subtotal;
//     document.getElementById('tax').textContent = tax.toFixed(2);
//     document.getElementById('total').textContent = total.toFixed(2);
// }


















// Store previous values
let previousValues = {};

// Function to decrement quantity
function decrementQuantity(inputId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    if (currentValue > 1) {
        inputElement.value = currentValue - 1;
        updatePrice(inputId);
    }
}

// Function to increment quantity
function incrementQuantity(inputId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
    updatePrice(inputId);
}

// Function to remove quantity
function removeQuantity(inputId) {
    let inputElement = document.getElementById(inputId);
    let currentValue = parseInt(inputElement.value);
    // Store the previous value
    previousValues[inputId] = currentValue;
    inputElement.value = 0;
    updatePrice(inputId);
}

// Function to undo remove operation
function undoRemove(inputId) {
    let inputElement = document.getElementById(inputId);
    // Check if there's a previous value
    if (previousValues[inputId] !== undefined) {
        // Restore the previous value
        inputElement.value = previousValues[inputId];
        updatePrice(inputId);
    }
}

// Function to update price
function updatePrice(inputId) {
    let inputElement = document.getElementById(inputId);
    let quantity = parseInt(inputElement.value);
    let priceElement = document.getElementById('price' + inputId.slice(-1));
    let price = 100 * (inputId === 'quantity2' ? 2 : 1); // Assuming product 1 is $100 and product 2 is $200
    priceElement.textContent = "$" + (price * quantity);
}

// Function to calculate total
function calculateTotal() {
    let quantity1 = parseInt(document.getElementById('quantity1').value);
    let quantity2 = parseInt(document.getElementById('quantity2').value);
    let price1 = parseInt(document.getElementById('price1').textContent.slice(1));
    let price2 = parseInt(document.getElementById('price2').textContent.slice(1));
    let subtotal = (quantity1 * price1) + (quantity2 * price2);
    let tax = subtotal * 0.05; // Assuming 5% tax rate
    let total = subtotal + tax;
    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('tax').textContent = tax.toFixed(2);
    document.getElementById('total').textContent = total.toFixed(2);
}









