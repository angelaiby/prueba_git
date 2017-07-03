// EJERCICIO 1
var num1= parseInt(prompt("Ingrese el primer numero"));
var num2= parseInt(prompt("Ingrese el segundo numero"));
var num3= parseInt(prompt("Ingrese el tercer numero"));
if(num1<num2 &&num1<num3 &&num2<num3){
  console.log ("El menor numero es " +num1+" el mayor numero es "+num3);
}else if(num1>num2 && num1>num3 && num2 >num3){
  console.log("El mayor numero es "+num1+" el numero menor es "+ num3);
}else if (num2>num3 && num2>num1){
    console.log("el numero mayor es "+num2 +" el numero menor es "+num1);
}else{console.log( "el numero mayor es "+ num2 + " el menor numero es" +num3);
};


// ejercicio 2
var par=[];
var impar=[];
function parImpar(numeros){
  for(var i=0;i<numeros.length;i++){
    if(numeros%2==0){
      return par=par[i];
    }
    else {

      return impar =impar[i];
    };
  };
  console.log("Elementos de posición par " +par+ " Elementos de posición impar "+ impar);
}
parImpar[1,2,3,4,5];




//ejercicio 3
var invertir = [1, 2, 3, 4,6];
console.log(invertir.reverse());
