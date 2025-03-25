const forms = document.querySelectorAll('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('pwd');
const password2 = document.getElementById('pwd2');

const regBtn = document.querySelector(".reg-btn");
const logBtn = document.querySelector(".login-btn");

forms[0].addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function setErrorFor(input, message) {
  const small = input.nextElementSibling;
  input.className = 'inputBox error';
  small.innerText = message;
  small.style.visibility = 'visible';
}

function setSuccessFor(input, message) {
  const small = input.nextElementSibling;
  input.className = 'inputBox success';
  small.style.color = 'darkgreen';
  small.innerText = message;
  small.style.visibility = 'visible';
}

function isEmail(email) {
  return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email);
}

function isPhone(tel) {
  return /^(([0-9\ \+\_\-\,\.\^\*\?\$\^\#\(\)])|(ext|x)){1,20}$/i.test(tel);
}

function checkInputs() {
  // trim to remove the whitespaces
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const telValue = tel.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (fnameValue == '') {
    setErrorFor(fname, 'Cannot be blank');
  } else {
    setSuccessFor(fname, 'Looks right');
  }

  if (lnameValue == '') {
    setErrorFor(lname, 'Cannot be blank');
  } else {
    setSuccessFor(lname, 'Looks right');
  }

  if (emailValue === '') {
    setErrorFor(email, 'Cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not valid');
  } else {
    setSuccessFor(email, 'Looks right');
  }

  if (telValue == '') {
    setErrorFor(tel, 'Cannot be blank');
  } else if (!isPhone(telValue)) {
    setErrorFor(tel, 'Not valid');
  } else {
    setSuccessFor(tel, 'Looks right');
  }

  if (passwordValue == '') {
    setErrorFor(password, 'Cannot be blank');
  } else {
    setSuccessFor(password, 'Looks right');
  }

  if (password2Value == '') {
    setErrorFor(password2, 'Cannot be blank');
  } else if (passwordValue != password2Value) {
    setErrorFor(password2, 'Does not match');
  } else {
    setSuccessFor(password2, 'Looks right');
  }
}
