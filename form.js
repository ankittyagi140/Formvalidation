const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const phone = document.getElementById("phone");

function validateEmail(email) {
    const re1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function checkPassword(str)
{
    const re2 = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(str);
}
const form = document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
})
function validation() {
    if (username.value === "") {
        document.getElementById("user").innerHTML = "*UserName can't be blank";
    }
    if (email.value === "") {
        document.getElementById("emails").innerHTML = "*Email can't be blank";
    }
    if (phone.value === "") {
        document.getElementById("phones").innerHTML = "*Phone can't be blank";
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
        document.getElementById("pass").innerHTML="*password must be 8 char and contains @aA1"
    }
    if(!checkPassword(password2.value)){
        document.getElementById("pass2").innerHTML="*password must be 8 char and contains @aA1"
    }
}


