function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById("emi-loan-amount").value);
    const tenure = parseFloat(document.getElementById("emi-tenure").value) * 12; // Tenure in months
    const annualInterestRate = parseFloat(document.getElementById("emi-interest-rate").value);
    
    const monthlyInterestRate = annualInterestRate / 100 / 12; // Monthly interest rate

    // EMI formula
    const emi = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure) / (Math.pow(1 + monthlyInterestRate, tenure) - 1);

    // Total amount payable (EMI * tenure)
    const totalAmount = emi * tenure;

    // Total interest payable
    const totalInterest = totalAmount - loanAmount;

    // Update the individual result fields
    document.getElementById("principalAmount").textContent = loanAmount.toFixed(2);
    document.getElementById("monthlyEMI").textContent = emi.toFixed(2);
    document.getElementById("totalInterest").textContent = totalInterest.toFixed(2);
    document.getElementById("totalAmountPayable").textContent = totalAmount.toFixed(2);
}
