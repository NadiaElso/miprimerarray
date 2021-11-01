let num: number[] = new Array(5);
num[0] = 0;
num[1] = 0;
num[2] = 0;
num[3] = 0;
num[4] = 0;
for (let i = 0; i < num.length; i++) {
  num[i] = prompt("ingrese un numero");
}
for (let index = 0; index < num.length; index++) {
  console.log("El numero en la posicion", num[index], "es", num[index]);
}
