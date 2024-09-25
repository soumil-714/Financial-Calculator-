function calculateMutualFund() {
    const investment = parseFloat(document.getElementById("mf-investment").value); // Monthly investment
    const tenure = parseFloat(document.getElementById("mf-tenure").value); // Tenure in years
    const interestRate = parseFloat(document.getElementById("mf-interest").value) / 100 / 12; // Monthly interest rate

    const months = tenure * 12; // Convert tenure to months
    const investedAmount = investment * months; // Total invested amount

    // Formula to calculate maturity amount using compound interest
    const maturityAmount = investment * (((1 + interestRate) ** months - 1) * (1 + interestRate)) / interestRate;

    const estimatedReturns = maturityAmount - investedAmount; // Estimated returns

    // Update the individual result fields
    document.getElementById("investedAmount").textContent = investedAmount.toFixed(2);
    document.getElementById("estimatedReturns").textContent = estimatedReturns.toFixed(2);
    document.getElementById("maturityAmount").textContent = maturityAmount.toFixed(2);
}
