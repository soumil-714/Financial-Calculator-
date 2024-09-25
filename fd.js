// Show the specific calculator
function showCalculator(calculatorId) {
    // Hide all calculators
    const calculators = document.querySelectorAll('.calculator');
    calculators.forEach(calculator => {
        calculator.style.display = 'none';
    });

    // Show the selected calculator
    document.getElementById(calculatorId).style.display = 'block';
}
// Fixed Deposit Calculator
function calculateFD() {
    const principal = parseFloat(document.getElementById("fd-principal").value);
    const tenure = parseFloat(document.getElementById("fd-tenure").value);
    const interestRate = parseFloat(document.getElementById("fd-interest").value) / 100;

    // Compound interest formula: A = P (1 + r/n)^(nt)
    // where n is 4 (quarterly compounding) and t is tenure in years
    const n = 4; // Quarterly compounding
    const maturityAmount = principal * Math.pow(1 + interestRate / n, tenure * n);
    
    // Calculate the estimated return
    const estimatedReturn = maturityAmount - principal;

    // Display the results
    document.getElementById("invested-amount").textContent = principal.toFixed(2);
    document.getElementById("estimated-return").textContent = estimatedReturn.toFixed(2);
    document.getElementById("fd-result").textContent = maturityAmount.toFixed(2);
}
