  const validator = {
//funcion para validar tarjeta//
  isValid: function(creditCardNumber){
//funcion para poner en reversa los numeros//
    const reverse = (array) => {      
    let newArray = [];
    let size = array.length;
    let lastPosition = size - 1;
    for (let i = lastPosition; i >= 0; i--) {
      newArray.push(array[i]);
    }
    return newArray;
  
  };
//funcion para multiplicar solo las ubicaciones pares de la tarjeta//
  const multiply = (array) => {
  let newArray = [];
    for (let index = 0; index < array.length; index++) {
      if (index % 2 !== 0) {
        const numeroTemp = Number(array[index]); 
        const newNumber = numeroTemp * 2;
        newArray.push(String(newNumber));
      } else {
        newArray.push(array[index]);
      }
    }
    return newArray;
  };
//funcion que suma los digitos mayores a nueve//
  const sumDigits = (array) => {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
    const temp = Number(array[index]);
      if (temp >= 10) {
        const tempArray = array[index].split(''); 
        let sum = 0;
        for (let i = 0; i < tempArray.length; i++) {
          sum += Number(tempArray[i]);
        }
  
        newArray.push(String(sum));
      } else {
        newArray.push(array[index]);
      }
    }
    return newArray;
  };
//funcion de suma total del nuevo array//
  const sumTotal = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += Number(array[i]);
    }
    return sum;
  };
//Encadenamiento de las funciones anteriores//
  const reverseCard = reverse(creditCardNumber);
  const multiplyCard = multiply(reverseCard);
  const sumDigitsCard = sumDigits(multiplyCard);
  const suma = sumTotal(sumDigitsCard);
  const isValidCardNumber = suma % 10 === 0;  //se aplica el valor de true o false si es multiplo de 10//
  return isValidCardNumber;
}

//funcion para convertir los primeros 12 numeros a # y dejar visible los 4 numeros restantes//
,maskify: function(creditCardNumber){
  let lastfour = creditCardNumber.length;
  let finalnumber = "";
  for(let i = 0; i < lastfour - 4; i++)
    {
      finalnumber += "#";
    }
    
  return finalnumber + creditCardNumber.substring(lastfour-4,lastfour); 
   

}


};

export default validator;
