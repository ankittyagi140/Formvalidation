const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");

function validateEmail(email) {
    const re1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re1.test(String(email).toLowerCase());
}
function validatePhone(phone){
    const ph=/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return ph.test(phone);
}
function checkPassword(str)
{
    const re2 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re2.test(str);
}
const form = document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
})
function validation() {
    if (username.value === "") {
        document.getElementById("user").innerHTML = "*UserName can't be blank";
    }
    if (username.value.length<6){
        document.getElementById('user').innerHTML="*username must be more than 6 words"
    }
    if (email.value === "") {
        document.getElementById("emails").innerHTML = "*Email can't be blank";
    }
    if (phone.value === "") {
        document.getElementById("phones").innerHTML = "*Phone can't be blank";
    }
    if(!validatePhone(phone.value)){
        document.getElementById('phones').innerHTML="*Enter a valid Phone no."
    }
    if (password.value === "") {
        document.getElementById("pass").innerHTML = "*Password can't be blank";
    }
    if (password2.value === "") {
        document.getElementById("pass2").innerHTML = "*Confirm Password can't be blank";
    }
    if (!validateEmail(email.value)) {
        document.getElementById("emails").innerHTML="*Enter a valid Email";
    }
    if(password.value!==password2.value){
        document.getElementById("pass2").innerHTML="*Password does not match"
    }
    if(!checkPassword(password.value)){
        document.getElementById("pass").innerHTML="*password must be at least 8 char and must be a combination of[1-0,special char,a-z,A-Z] "
    }
    if(!checkPassword(password2.value)){
        document.getElementById("pass2").innerHTML="*password must be at least 8 char and must be a combination of[1-0,special char,a-z,A-Z]"
    }
}


