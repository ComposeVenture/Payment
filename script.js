document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const reference = document.getElementById('reference').value;

    // Here you would usually handle the payment processing.
    // This example assumes the payment is always successful.

    // Mock successful payment
    const paymentSuccessful = true;

    if (paymentSuccessful) {
        // Display a success message and send download link
        document.getElementById('message').innerHTML = `
            <p>Payment successful! A download link has been sent to ${email}.</p>
        `;

        // Simulate sending a download link via email
        // In real-world application, you would handle this server-side
        // For demo purposes, we're just showing a link
        setTimeout(() => {
            document.getElementById('message').innerHTML += `
                <p><a href="your-download-link-here">Download Your Work</a></p>
            `;
        }, 2000);
    } else {
        document.getElementById('message').innerHTML = '<p>Payment failed. Please try again.</p>';
    }
});
