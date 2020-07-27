import validator from './validator.js';
//Funcion de primer boton y llenado de datos//
const boton1 = document.getElementById('boton1'); 
    boton1.addEventListener('click', () => {
    const correo = document.getElementById('email').value;
        if (correo === "") {
            document.getElementById('nota0').innerHTML= '*Ingresar email';
        } else {
        document.getElementById('contenidobanner').style.display='none';
        document.getElementById('primerapag').style.display='none';
        document.getElementById('segundapag').style.display='block';
        
        }
});

//funcion de segundo boton, llenado de datos de formulario//
const boton2= document.getElementById('boton2');
      boton2.addEventListener('click',() => {

      const creditCardNumber= document.getElementById('creditCardNumber').value;
      const nameClient= document.getElementById('nameClient').value;
      const mes= document.getElementById('mes').value;
      const year= document.getElementById('year').value;
      const cvv=document.getElementById('cvv').value;
      if (nameClient === "" || creditCardNumber === "" || mes ==="00" || year ==="88" || cvv === "") {
           document.getElementById('nota1').innerHTML= '*Ingresar datos requeridos';
           document.getElementById('nota2').style.display='none';
           document.getElementById('nota3').style.display='none';
           document.getElementById('nota1').style.display='block';
      //Declaracion de la variable//
      }  else {
        const numeroTarjeta = document.getElementById('creditCardNumber');
        const numeroTarjetaEncriptado = validator.maskify(numeroTarjeta.value);
        const isValidCardNumber = validator.isValid(numeroTarjeta.value);
        numeroTarjeta.value = numeroTarjetaEncriptado;
      
        if (isValidCardNumber === true) {
            document.getElementById('nota2').innerHTML= 'Tarjeta ingresada válida';
            document.getElementById('nota1').style.display='none';
            document.getElementById('nota3').style.display='none';
            document.getElementById('nota2').style.display='block';
            document.getElementById('segundapag').style.display='none';
            document.getElementById('tercerapag').style.display='block';
            document.getElementById("nombrecli").innerHTML = nameClient;
            
            } else {
            
            document.getElementById('nota3').innerHTML= '*Tarjeta ingresada inválida';
            document.getElementById('nota1').style.display='none';
            document.getElementById('nota2').style.display='none';
            document.getElementById('nota3').style.display='block';
            
            }   
      }

  });
//Funcion de tercer boton de la ultima pagina//
const boton3 = document.getElementById('boton3');
      boton3.addEventListener('click',() => {
       document.getElementById('nota2').style.display='none';
       document.getElementById('primerapag').style.display = 'none';
       document.getElementById('segundapag').style.display = 'none';
       document.getElementById('tercerapag').style.display = 'block';
       const audio = document.getElementById("victory");
       audio.play();
  });


 //console.log(validator);