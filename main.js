

let myreg = document.getElementById('register');
let mylogin = document.getElementById('login');
let mybtn = document.getElementById('btn');

register = () => {
  myreg.style.left = '50px';
  mylogin.style.left = '500px';
  mybtn.style.left = '0px';
}

login = () => {
  myreg.style.left = '-450px';
  mylogin.style.left = '50px';
  mybtn.style.left = '110px';
}

const myform = document.querySelectorAll('.inputArea');
forEach(field in myform).noValidate = true;

const btns = document.querySelectorAll('.submit_btn')
forEach(btn in btns).addEventListener('submit', validateForm);

function validateForm(e) {
  const form = e.target;
  if (form.checkValidity()) {
    // form is valid - make further checks
  }
  else {
    // form is invalid - cancel submit
    e.preventDefault();
    // apply invalid class
    Array.from(form.elements).forEach(i => {
      if (i.checkValidity()) {
        // field is valid - remove class
        i.parentElement.classList.remove('invalid');
      }
      else {
        // field is invalid - add class
        i.parentElement.classList.add('invalid');
      }
    });
  }
};
