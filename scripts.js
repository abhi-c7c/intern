document.addEventListener('DOMContentLoaded', () => {
    const phoneOption = document.getElementById('phone-option');
    const emailOption = document.getElementById('email-option');
    const phoneForm = document.getElementById('phone-form');

    phoneOption.addEventListener('click', () => {
        phoneOption.classList.add('active');
        emailOption.classList.remove('active');
        phoneForm.classList.add('active-form');
    });

    emailOption.addEventListener('click', () => {
        window.location.href = 'email-login.html';
    });

    phoneForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const phoneNumber = document.getElementById('phone').value;
        window.location.href = `otp.html?phone=${phoneNumber}`;
    });
});
