function calculateTime() {
    const initialAmount = parseFloat(document.getElementById('initialAmount').value);
    const monthlyInterestRate = parseFloat(document.getElementById('monthlyInterestRate').value) / 100;
    const targetAmount = parseFloat(document.getElementById('targetAmount').value);

    let months = 0;
    let currentAmount = initialAmount;
    const monthlyProfits = [];

    while (currentAmount < targetAmount) {
        const monthlyProfit = currentAmount * monthlyInterestRate;
        monthlyProfits.push(monthlyProfit);
        currentAmount += monthlyProfit;
        months++;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const resultMessage = `It will take approximately ${years} years and ${remainingMonths} months to reach your target amount.`;
    
    let monthlyProfitMessage = 'Monthly Profits:<ul>';
    for (let i = 0; i < monthlyProfits.length; i++) {
        monthlyProfitMessage += `<li>Month ${i + 1}: $${monthlyProfits[i].toFixed(2)}</li>`;
    }
    monthlyProfitMessage += '</ul>';
    
    document.getElementById('result').innerHTML = resultMessage + '<br>' + monthlyProfitMessage;
}
