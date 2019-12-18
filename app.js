//ADd event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('submit').addEventListener('click', onSubmitClick);

function validateName() {
    const name = document.getElementById('name');
    const re = /^[a-z]{2,10}$/i;

    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{5}(-[0-9]{4})?$/;

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    const email = document.getElementById('email');
    const re = /^(\w)*@(\w)*\.(\w){2,5}$/i;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    const phone = document.getElementById('phone');
    const re = /^[0-9]{10}$/;
    const re2 = /^[0-9]{3}\.[0-9]{3}\.[0-9]{4}$/;
    const re3 = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    const re4 = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/;

    if (!re.test(phone.value) && !re2.test(phone.value) && !re3.test(phone.value) && !re4.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}

function onSubmitClick() {
    event.preventDefault();
    const elements = document.getElementsByClassName('is-invalid');
    const name = document.getElementById('name').value;
    const zip = document.getElementById('zip').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (elements.length > 0 || !name || !zip || !email || !phone) {
        window.alert('You have errors in your form!');
    } else {
        window.alert('You\'re good to go!');
    }
}