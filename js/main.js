const btnVoucher = document.querySelector('.voucher'),
btnLongterm = document.querySelector('.long-term'),
txtUsername = document.querySelector('#uname'),
txtPassword = document.querySelector('#pw'),
btnSubmit = document.querySelector('form input[type="submit"]');

btnVoucher.addEventListener('click', () => {
    btnVoucher.classList.add('active');
    btnLongterm.classList.remove('active');
    txtPassword.style.display = 'none';
    txtUsername.placeholder = 'Enter voucher code';
    txtUsername.focus();
    btnSubmit.value = 'Connect';
    clearText();
    
})

btnLongterm.addEventListener('click', () => {
    btnVoucher.classList.remove('active');
    btnLongterm.classList.add('active');
    txtPassword.style.display = 'block';
    txtUsername.placeholder = 'Username';
    txtUsername.focus();
    btnSubmit.value = 'Login';
    clearText();
})

function clearText(){
    txtUsername.value = '';
    txtPassword.value = '';
}