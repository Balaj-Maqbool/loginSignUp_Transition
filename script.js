document.addEventListener('DOMContentLoaded', function() {
    const showSignUpButton = document.getElementById('show-sign-up');
    const showSignInButton = document.getElementById('show-sign-in');
    const signUpSlider = document.querySelector('.sign-up-slider');
    const signInSlider = document.querySelector('.sign-in-slider');

    showSignUpButton.addEventListener('click', function() {
        signUpSlider.classList.add('active');
        signInSlider.classList.remove('active');
    });

    showSignInButton.addEventListener('click', function() {
        signInSlider.classList.add('active');
        signUpSlider.classList.remove('active');
    });
});
