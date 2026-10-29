document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });
    }

    const togglePasswordButtons = document.querySelectorAll('.btn-toggle-password');
    togglePasswordButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            
            if (passwordInput) {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    this.textContent = 'Скрыть';
                } else {
                    passwordInput.type = 'password';
                    this.textContent = 'Показать';
                }
            }
        });
    });

    const registerForm = document.getElementById('register-form');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            let isValid = true;

            const fullnameInput = document.getElementById('reg-fullname');
            const emailInput = document.getElementById('reg-email');
            const loginInput = document.getElementById('reg-login');
            const passwordInput = document.getElementById('reg-password');
            const confirmInput = document.getElementById('reg-password-confirm');

            const errorFullname = document.getElementById('error-fullname');
            const errorEmail = document.getElementById('error-email');
            const errorLogin = document.getElementById('error-login');
            const errorPassword = document.getElementById('error-password');
            const errorConfirm = document.getElementById('error-password-confirm');

            errorFullname.textContent = '';
            errorEmail.textContent = '';
            errorLogin.textContent = '';
            errorPassword.textContent = '';
            errorConfirm.textContent = '';

            if (fullnameInput.value.trim() === '') {
                errorFullname.textContent = 'Поле обязательно для заполнения.';
                isValid = false;
            }
            const emailValue = emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailValue === '') {
                errorEmail.textContent = 'Поле обязательно для заполнения.';
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                errorEmail.textContent = 'Введите корректный адрес электронной почты.';
                isValid = false;
            }

            if (loginInput.value.trim() === '') {
                errorLogin.textContent = 'Поле обязательно для заполнения.';
                isValid = false;
            }

            const passwordValue = passwordInput.value;
            if (passwordValue === '') {
                errorPassword.textContent = 'Поле обязательно для заполнения.';
                isValid = false;
            } else if (passwordValue.length < 8) {
                errorPassword.textContent = 'Пароль должен содержать не менее 8 символов.';
                isValid = false;
            }

            const confirmValue = confirmInput.value;
            if (confirmValue === '') {
                errorConfirm.textContent = 'Поле обязательно для заполнения.';
                isValid = false;
            } else if (passwordValue !== confirmValue) {
                errorConfirm.textContent = 'Пароли не совпадают.';
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});
