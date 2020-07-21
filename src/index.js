import {validator} from './validator.js';

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
           document.getElementById('nota1').innerHTML= '¡Ingresar datos requeridos!';
           document.getElementById('nota3').style.display='none';
           document.getElementById('nota2').style.display='none';
           document.getElementById('nota1').style.display='block';
      }  else {
        const numeroTarjeta = document.getElementById('creditCardNumber');
        const numeroTarjetaEncriptado = validator.maskify(numeroTarjeta.value);
        const isValidCardNumber = validator.isValid(numeroTarjeta.value);
        numeroTarjeta.value = numeroTarjetaEncriptado;
      
        if (isValidCardNumber === true) {
          document.getElementById('tarjetaválida').innerHTML= 'Tarjeta ingresada válida';
            document.getElementById('nota1').style.display='none';
            document.getElementById('nota3').style.display='none';
            document.getElementById('nota2').style.display='block';
            // setTimeout('document.location.reload()',10000);
            } else {
            
            document.getElementById('tarjetainválida').innerHTML= 'Tarjeta ingresada inválida';
            document.getElementById('nota1').style.display='none';
            document.getElementById('nota2').style.display='none';
            document.getElementById('nota3').style.display='block';
            // setTimeout('document.location.reload()',10000);
            }   
      }



      });
      

    


 //console.log(validator);