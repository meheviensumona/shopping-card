
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

    updateSubtotal(subtotalId);
    calculateTax(subtotalId, taxId, totalId);
}

function removeProduct(productId, subtotalId, taxId, totalId) {
    var productElement = document.getElementById(productId);
    productElement.parentNode.removeChild(productElement);

    updateSubtotal(subtotalId);
    calculateTax(subtotalId, taxId, totalId);
}

function updateSubtotal(subtotalId) {
    var subtotal = 0;
    var productContainers = document.querySelectorAll('.product-container');
    productContainers.forEach(function(container) {
        var priceElement = container.querySelector('.productPrice');
        var price = parseFloat(priceElement.textContent.replace('$', ''));
        subtotal += price;
    });
    document.getElementById(subtotalId).textContent = "$" + subtotal;
}

function calculateTax(subtotalId, taxId, totalId) {
    var subtotalElement = document.getElementById(subtotalId);
    var subtotal = parseFloat(subtotalElement.textContent.replace('$', ''));
    var tax = subtotal * 0.1; // Assuming 10% tax rate
    document.getElementById(taxId).textContent = "$" + tax.toFixed(2);
    
    var total = subtotal + tax;
    document.getElementById(totalId).textContent = "$" + total.toFixed(2);
}
