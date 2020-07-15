import validator from './validator.js';

const botonuno = document.getElementById('botonuno'); 
    botonuno.addEventListener('click', () => {
    const email = document.getElementById('email').value;
        if (email === '') {
            document.getElementById('email').focus();
        } else {
        document.getElementById('email').focus();
        document.getElementById('primerapag').style.display='none';
        document.getElementById('segundapag').style.display='block';
        }
});

console.log(validator);
