document.addEventListener('DOMContentLoaded', async () => {
    const connectWalletButton = document.getElementById('connect-wallet');
    let walletAddress = null;

    // Function to connect to the Backpack wallet
    async function connectWallet() {
        if ('solana' in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                try {
                    const response = await provider.connect();
                    walletAddress = response.publicKey.toString();
                    alert(`Connected to wallet: ${walletAddress}`);
                } catch (err) {
                    console.error('Wallet connection failed', err);
                }
            } else {
                alert('Please install Backpack wallet.');
            }
        } else {
            alert('Please install Backpack wallet.');
        }
    }

    connectWalletButton.addEventListener('click', connectWallet);

    // Form submission handler
    const form = document.getElementById('assignment-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const recipientKey = document.getElementById('public-key').value;
        const amount = document.getElementById('amount').value;
        const token = document.getElementById('token').value;

        if (!walletAddress) {
            alert('Please connect your wallet first.');
            return;
        }

        // Here you can add the logic to handle the form submission
        // For example, sending the data to your backend or processing the transaction
        console.log('Form submitted with:', { recipientKey, amount, token });
    });
});
