const forms = document.querySelectorAll('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const password = document.getElementById('pwd');
const password2 = document.getElementById('pwd2');
console.log(fname.parentElement);

forms.forEach().addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function setErrorFor(input, message) {
  const error = formControl.querySelector('small');
  input.classList.add('invalid');
  error.innerText = message;
  error.classList.add('show');
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^>()\[\]\\.,;:\s@"]+)*)| (*.+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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
    setSuccessFor(fname);
  }

  if (lnameValue == '') {
    setErrorFor(lname, 'Cannot be blank');
  } else {
    setSuccessFor(lname);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Cannot be blank');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Not valid');
  } else {
    setSuccessFor(email);
  }

  if (telValue == '') {
    setErrorFor(tel, 'Cannot be blank');
  } else {
    setSuccessFor(tel);
  }

  if (passwordValue == '') {
    setErrorFor(password, 'Cannot be blank');
  } else {
    setSuccessFor(password);
  }

  if (password2Value == '') {
    setErrorFor(password2, 'Cannot be blank');
  } else if (passwordValue != password2Value) {
    setErrorFor(password2, 'Does not match');
  } else {
    setSuccessFor(password2);
  }
}
