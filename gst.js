// GST Calculator
function calculateGST() {
    const amount = parseFloat(document.getElementById("gst-amount").value);
    const gstRate = parseFloat(document.getElementById("gst-rate").value) / 100;

    const gstAmount = amount * gstRate;
    const totalAmount = amount + gstAmount;

    document.getElementById("gst-result").innerHTML = `GST Amount: ₹${gstAmount.toFixed(2)}<br>Total Amount: ₹${totalAmount.toFixed(2)}`;
}