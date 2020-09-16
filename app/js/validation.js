const btnEmailSubs = document.querySelector('#btn_email_subscription');
const inputEmail = document.querySelector('#email_address');
const errMsg = document.querySelector('#err_msg_email');
const errIcon = document.querySelector('#err_icon_email');

const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


btnEmailSubs.addEventListener('click', (event) => {
    if(!regexEmail.test(inputEmail.value)){
        errMsg.classList.remove('hide');
        errMsg.classList.add('show');
        errIcon.classList.remove('hide');
        errIcon.classList.add('show');
    } else {
        errMsg.classList.remove('show');
        errMsg.classList.add('hide');
        errIcon.classList.remove('show');
        errIcon.classList.add('hide');
    }

});