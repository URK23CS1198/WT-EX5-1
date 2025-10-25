// FrostWorld Cake Order Calculator - JavaScript

// Discount codes
const discountCodes = {
    'SWEET10': 10,
    'FROST20': 20,
    'BIRTHDAY25': 25
};

function calculateBill() {
    // Get cake type base price
    const cakeType = parseInt(document.getElementById('cakeType').value);
    const weight = parseFloat(document.getElementById('weight').value) || 1;
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    
    // Calculate base price
    const basePrice = cakeType * weight * quantity;
    
    // Get add-ons
    const checkboxes = document.querySelectorAll('.checkbox-label input[type="checkbox"]:checked');
    let addonsTotal = 0;
    checkboxes.forEach(checkbox => {
        addonsTotal += parseInt(checkbox.value);
    });
    
    // Get delivery charge
    const deliveryCharge = parseInt(document.getElementById('deliveryType').value);
    
    // Calculate subtotal
    const subtotal = basePrice + addonsTotal + deliveryCharge;
    
    // Apply discount
    const discountCode = document.getElementById('discount').value.trim().toUpperCase();
    let discountPercent = 0;
    if (discountCodes[discountCode]) {
        discountPercent = discountCodes[discountCode];
    }
    const discountAmount = (subtotal * discountPercent) / 100;
    
    // Calculate after discount
    const afterDiscount = subtotal - discountAmount;
    
    // Calculate GST (5%)
    const gstAmount = (afterDiscount * 5) / 100;
    
    // Calculate total
    const totalAmount = afterDiscount + gstAmount;
    
    // Update display
    document.getElementById('basePrice').textContent = '₹' + basePrice.toFixed(2);
    document.getElementById('addonsTotal').textContent = '₹' + addonsTotal.toFixed(2);
    document.getElementById('deliveryCharge').textContent = '₹' + deliveryCharge.toFixed(2);
    document.getElementById('subtotal').textContent = '₹' + subtotal.toFixed(2);
    document.getElementById('discountAmount').textContent = discountPercent > 0 ? '-₹' + discountAmount.toFixed(2) : '₹0';
    document.getElementById('gstAmount').textContent = '₹' + gstAmount.toFixed(2);
    document.getElementById('totalAmount').textContent = '₹' + totalAmount.toFixed(2);
}

function placeOrder() {
    const cakeName = document.getElementById('cakeName').value.trim();
    const totalAmount = document.getElementById('totalAmount').textContent;
    
    if (cakeName === '') {
        alert('Please enter cake name!');
        return;
    }
    
    alert(`🎂 Order Placed Successfully!\n\nCake: ${cakeName}\nTotal Amount: ${totalAmount}\n\nThank you for choosing FrostWorld! 💖`);
}

// Calculate on page load
window.onload = function() {
    calculateBill();
};
