document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const phone = urlParams.get('phone');

    if (phone) {
        alert(`OTP sent to phone number: ${phone}`);
    }

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const otp = document.getElementById('otp').value;
        // Here you would typically send the OTP to the server for verification
        alert(`OTP entered: ${otp}`);
        // For now, just redirect to a placeholder page
        window.location.href = 'welcome.html';
    });
});
