// Income Tax Calculator
function calculateIncomeTax() {
    const income = parseFloat(document.getElementById("income-tax-income").value);

    let tax = 0;
    if (income <= 250000) {
        tax = 0;
    } else if (income <= 500000) {
        tax = (income - 250000) * 0.05;
    } else if (income <= 750000) {
        tax = (income - 500000) * 0.1 + 12500;
    } else {
        tax = (income - 750000) * 0.15 + 37500;
    }

    document.getElementById("income-tax-result").innerHTML = `Income Tax: ₹${tax.toFixed(2)}`;
}
