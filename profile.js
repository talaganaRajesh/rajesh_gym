document.addEventListener('DOMContentLoaded', function() {
    const balanceElement = document.getElementById('balance');
    const addMoneyButton = document.getElementById('addMoney');
    const rechargeWalletButton = document.getElementById('rechargeWallet');

    addMoneyButton.addEventListener('click', function() {
        // Add money logic here
        // For example:
        let currentBalance = parseFloat(balanceElement.innerText.slice(1)); // Get current balance
        currentBalance += 10; // Add 10 dollars
        balanceElement.innerText = `$${currentBalance}`;
    });

    rechargeWalletButton.addEventListener('click', function() {
        // Recharge wallet logic here
        // For example:
        let currentBalance = parseFloat(balanceElement.innerText.slice(1)); // Get current balance
        currentBalance += 50; // Recharge with 50 dollars
        balanceElement.innerText = `$${currentBalance}`;
    });
});
