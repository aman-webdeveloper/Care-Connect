function toggleForms(formType) {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const signInBtn = document.getElementById('signInBtn');
    const signUpBtn = document.getElementById('signUpBtn');

    if (formType === 'signin') {
        signInForm.classList.add('active');
        signUpForm.classList.remove('active');
        if (signInBtn && signUpBtn) {
            signInBtn.classList.add('active-btn');
            signUpBtn.classList.remove('active-btn');
        }
    } else {
        signUpForm.classList.add('active');
        signInForm.classList.remove('active');
        if (signInBtn && signUpBtn) {
            signUpBtn.classList.add('active-btn');
            signInBtn.classList.remove('active-btn');
        }
    }
}