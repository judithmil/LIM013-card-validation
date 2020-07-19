//import validator from './validator.js';

//funcion primer boton-------------------------
const boton1 = document.getElementById('boton1'); 
    boton1.addEventListener('click', () => {
    const correo = document.getElementById('email').value;
        if (correo === "") {
            document.getElementById('email').focus();
        } else {
        document.getElementById('email').focus();
        document.getElementById('primerapag').style.display='none';
        document.getElementById('segundapag').style.display='block';
        }
});

//pantalla dos -------------------
const boton2= document.getElementById('boton2');
      boton2.addEventListener('click',() => {

      const creditCardNumber= document.getElementById('creditCardNumber').value;
      const nameClient= document.getElementById('nameClient').value;
      const exp= document.getElementById('exp').value;
      const cvv=document.getElementById('cvv').value;
      if (nameClient === "" && creditCardNumber === "" && exp === "" && cvv === "") {
           document.getElementById('nota1').innerHTML= 'Ingresar datos requeridos';
      }  





      });
      

    


 //console.log(validator);