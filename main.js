

let mylogin = document.getElementById('login');
let myreg = document.getElementById('register');
let mybtn = document.getElementById('btn');

login = () =>{
    mylogin.style.left = '50px';
    myreg.style.left = '500px';
    mybtn.style.left = '0px';
}

register = () =>{
    mylogin.style.left = '-450px';
    myreg.style.left = '50px';
    mybtn.style.left = '110px';
}
