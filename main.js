const pw = document.querySelector('#password');
const confirmPw = document.querySelector('#confirm_password');
const pwTxt = document.querySelector('.pw-error-txt');


function validatePassword() {
    if(pw.value != confirmPw.value) {       
        confirmPw.setCustomValidity("Passwords Don't Match");
        pw.classList.add("error");
        confirmPw.classList.add("error");
        pwTxt.classList.add("pw-error-txt-show");
    } else {
        confirmPw.setCustomValidity("");        
        pw.classList.remove("error");
        confirmPw.classList.remove("error");
        pwTxt.classList.remove("pw-error-txt-show");
    }
}

pw.onchange = validatePassword;
confirmPw.onkeyup = validatePassword;