function calculateSIP() {
    const investment = parseFloat(document.getElementById("sip-investment").value);
    const tenure = parseFloat(document.getElementById("sip-tenure").value);
    const interestRate = parseFloat(document.getElementById("sip-interest").value) / 100 / 12; // Monthly interest rate

    if (isNaN(investment) || isNaN(tenure) || isNaN(interestRate)) {
        alert('Please enter valid numbers.');
        return;
    }

    const months = tenure * 12;
    const totalInvestment = investment * months;

    // SIP Maturity Calculation Formula
    const maturityAmount = investment * (((1 + interestRate) ** months - 1) * (1 + interestRate)) / interestRate;
    const estimatedReturns = maturityAmount - totalInvestment;

    // Update the individual fields
    document.getElementById("totalInvestment").textContent = totalInvestment.toFixed(2);
    document.getElementById("estimatedReturns").textContent = estimatedReturns.toFixed(2);
    document.getElementById("maturityAmount").textContent = maturityAmount.toFixed(2);
}
