let numberOne= parseInt(prompt("Ingresa el primer número entero:"));
let numberTwo= parseInt(prompt("Ingresa el segundo número entero:"));
if(numberOne>numberTwo){
  alert(`El primer número=${numberOne} es mayor al segundo=${numberTwo}`);
}else if(numberOne<numberTwo){
  alert(`El primer número=${numberOne} es menor que el segundo=${numberTwo}`);
}else{
  alert(`El primer número=${numberOne} es igual al segundo=${numberTwo}`);
}