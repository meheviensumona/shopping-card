
function decrementQuantity(inputId, priceId, subtotalId, taxId, totalId) {
    var inputElement = document.getElementById(inputId);
    var currentValue = parseInt(inputElement.value);
    if (currentValue > 0) {
        inputElement.value = currentValue - 1;
        updatePrice(inputId, priceId, subtotalId, taxId, totalId);
    }
}

function incrementQuantity(inputId, priceId, subtotalId, taxId, totalId) {
    var inputElement = document.getElementById(inputId);
    var currentValue = parseInt(inputElement.value);
    inputElement.value = currentValue + 1;
    updatePrice(inputId, priceId, subtotalId, taxId, totalId);
}

function updatePrice(inputId, priceId, subtotalId, taxId, totalId) {
    var inputElement = document.getElementById(inputId);
    var quantity = parseInt(inputElement.value);
    var priceElement = document.getElementById(priceId);
    var unitPrice = (priceId === 'price1') ? 1200 : 1500; // Adjust this value to the actual unit price
    var totalPrice = quantity * unitPrice;
    priceElement.textContent = "$" + totalPrice;
    
    // Update subtotal
    var subtotalElement = document.getElementById(subtotalId);
    var subtotal = parseInt(subtotalElement.textContent.replace("$", ""));
    var previousTotal = isNaN(subtotal) ? 0 : subtotal;
    var newTotal = previousTotal + totalPrice;
    subtotalElement.textContent = "$" + newTotal;
    
    // Update tax
    var taxElement = document.getElementById(taxId);
    var tax = newTotal * 0.05;
    taxElement.textContent = "$" + tax.toFixed(2);
    
    // Update total
    var totalElement = document.getElementById(totalId);
    var total = newTotal + tax;
    totalElement.textContent = "$" + total.toFixed(2);
}

function removeProduct(productId, subtotalId, taxId, totalId) {
    var productElement = document.getElementById(productId);
    productElement.parentNode.removeChild(productElement);
    // Recalculate subtotal, tax, and total
    calculateTotal(subtotalId, taxId, totalId);
}

function calculateTotal(subtotalId, taxId, totalId) {
    var subtotalElement = document.getElementById(subtotalId);
    var subtotal = 0;
    var productContainers = document.querySelectorAll('.product-container');
    productContainers.forEach(function(container) {
        var priceElement = container.querySelector('.productPrice');
        var price = parseInt(priceElement.textContent.replace("$", ""));
        subtotal += price;
    });
    subtotalElement.textContent = "$" + subtotal;
    
    var taxElement = document.getElementById(taxId);
    var tax = subtotal * 0.05;
    taxElement.textContent = "$" + tax.toFixed(2);
    
    var totalElement = document.getElementById(totalId);
    var total = subtotal + tax;
    totalElement.textContent = "$" + total.toFixed(2);
}
