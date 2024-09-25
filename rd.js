// Recurring Deposit Calculator
function calculateRD() {
    const monthlyInvestment = parseFloat(document.getElementById("rd-monthly-investment").value); // Monthly investment
    const tenure = parseFloat(document.getElementById("rd-tenure").value); // Tenure in years
    const annualInterestRate = parseFloat(document.getElementById("rd-interest").value); // Annual interest rate
    const monthlyInterestRate = annualInterestRate / 100 / 12; // Monthly interest rate
    
    const months = tenure * 12; // Convert tenure to months
    const totalInvestment = monthlyInvestment * months; // Total amount invested

    // Formula for calculating maturity amount for RD
    const maturityAmount = monthlyInvestment * (((1 + monthlyInterestRate) ** months - 1) / monthlyInterestRate);

    const estimatedReturns = maturityAmount - totalInvestment; // Estimated returns

    // Display the results in separate fields
    document.getElementById("totalInvestment").textContent = totalInvestment.toFixed(2);
    document.getElementById("estimatedReturns").textContent = estimatedReturns.toFixed(2);
    document.getElementById("maturityAmount").textContent = maturityAmount.toFixed(2);
}
