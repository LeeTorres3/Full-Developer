drawBoxrawBox(blue);
new line();
//Azul y un espacio: coloca colores;

drawBox(pickRandom(color));
//Coloca colores aleatoriamente;

var stripeColor = white;
drawBox(stripeColor);

var stripeColor = blue;
drawBox(stripeColor);
//Coloca hileras de colores;

var myExample;
myExample = 'I created a variable';
print(myExample);
//Ejemplo de variable usando var;

let variable = "string";
// Creación de variable usando (camel case): que es hacer una variable con varias palabras, entre varias palabras no debe haber espacios, por eso se ponen las demás palabras iniciando con muyúscula, el string va dentro de las comillas y puede contener cualquier tipo de signo, el nombre de la varible es (variable) el valor es (string);
// Con (let) podemos actualizar los valores de manera flexible sin que marque error como en (const);

const EXAMPLE_OF_SNAKE_CASE = "string";
// El snake_case es usar letras mayúsculas y usar guión_bajo para separación de palabras, se usan prinsipalmente en (const) para que no se cambien sus valores; 
let exampleOfCamelCase ="string";
// El camel case es usasr letras minúsculas y no dejar espacio y al poner una nueva palabra la ponemos la primer letra en mayúscula;

let myCity
myCity = 'CityFromMexico';
print(myCity);
//Ejemplo de varible usando let;

const constante = "string";
// Al usar (const) como varible significa que sus valores no deben cambiar, si tratamos de actualizar la variable por otro valor nos marcara error, (const) significa "constante", esta es la variable que debemos usar como predeterminada;

const city = "Chicago";
print(city);
// Creamos varible (city) y le asignamos un valor (Chicago) usando const;

var word = 'alphabet';
var alphabet = 'word';
print(alphabet);
//Se imprime la palabra word;

console.log("Hello, World!");
// Instrucción para que el computador muestre el valor en la consola;

const greeting = "Hello developers!";
console.log(greeting);
// Muestra en la consola el valor de la variable (greeting);

let currentStatus = "Waching Netflix";
currentStatus = "Relaxing at the Beach";
console.log(currentStatus);

currentStatus = "Reading";
console.log(currentStatus);
// Ejemplo de como se actualiza el valor de una variable utilizando (let), cuando actualizamos una varible se olvida de su valor anterior y ejecuta el nuevo que actualizamos;

let variable1 = "reading1";
let variable2 = "reading2";
variable1 = variable2;
console.log(variable2);
// Ejemplo de como una varible imprime el valorr de otra variable ya que su valor de la variable1 es la varible2;

const label = "Edad:" + "15";
console.log(label);
// Uso de el signo (+ más) en variables, sumando los strings para que se muestren en la consola, la consola lo mostrara juntos los strings que aya (Edad:15) los valores se muestran sin dejar espacios;


const firstName = "Lee";
const lastName = "Torres";
console.log(firstName + lastName);
// Ejemplo de suma de variables, la consola mostrara: (Lee Torres);

const suma = 3 + 1; // Se suman los valores con el signo de (+);
const resta = 5 - 2; // Se restan los valores con el signo de (-);
const multiplicacion = 2 * 2; // Se multiplican los valores con el signo de (*);
const division = 10 / 2; // Se dividen los valores con el signo de (/);
console.log(suma); // La consola muestra el resultado de la suma (4);
console.log(resta); // La consola muestra el resultado de la resta (3);
console.log(multiplicacion); // La consola muestra el resultado de la multiplicacion (4);
console.log(division); // La consola muestra el resultado de la division (5);
// Ejemplo de operaciones basicas usando signos y números, los valores de variables en números no llevan comillas como los strings;

const numberOfSteps = 70;
console.log("You're on step");
console.log(numberOfSteps + 5);
// La consola muestra: (You're on step 75);

const strings = "4" + "8";
console.log(strings);
// La consola muestra el valor de (48) ya que los valores son strings y no números, solo junto los numeros si son strings, si su valor son solo numeros sin strings se haria la operación;

const result = "10" + 10;
console.log(result);
//La consola muestra (1010) ya que al sumar un string de número con un número se tranformas el número en string;

const resulted = "Your score:" + 99;
console.log(resulted);
//La consola muestra (You score: 99) ya que se junta el string con el número y da ese resultado;

console.log("verdadero y falso");
const accion = true;
const noAccion = false;
console.log(accion);
//Uso de true y false, sirven para mostrar o indicar si una funcion esta activada o desactivada o si es verdadera o falsa, o si sucedio o no sucedio;

const resultedT = "Your score:" + true;
console.log(resultedT);
//La consola muestra (You score: true) ya que se junta el string con el booleano y da ese resultado;

console.log(!true);//La consola muestra (false);
console.log(!false);//La consola muestra (true);
//El signo de (!) es el operador de negación, convierte los valores en los contrario;

const primavera = true;
console.log(!primavera);
//El operador (!) muestra en la consola (false), indicando que no es primavera;

const isMorning = true;
const isEvening = !isMorning;
console.log(isEvening);
//La consola mostrara (false) indicando que no es de día, es de tarde;

console.log(5 === 5);//La consola muestra (true);
console.log(8 === 10);//La consola muestra (false);
//El signo de (===) es el operador de igualdad, si es verdadera la igualdad muestra true y si es negativa muestra false;

const votes = 10;
console.log(votes === 11);//La consola muestra false, ya que votes es 10 no 11;
//Ejemplo de comparacion con el operador de igualdad (===);

console.log("apple" === "apple");//La consola muestra (true) ya que el string es el mismo;
console.log("apple" === "orange");//La consola muestra (false) ya que el string no es igual;

const manzana = "apple";
const platano = "banana";
console.log(manzana === platano);//La consola mostrara (false) ya que los valores de las variables no son iguales;

console.log(8 !== 10);//La consola muestra (true);
console.log(5 !== 5);//La consola muestra (false);
//El signo de (!==) es el operador de desigualdad, si la igualdad es desigual muestra true y si es igual muestra false ya que no es desigual los valores;

const myLevel = 20;
const youLevel = 22;
console.log(myLevel !== youLevel);
//La consola mostrara true ya que los valores son desiguales;

console.log("apple" !== "apple");//La consola muestra (flase) ya que el string es el mismo;
console.log("apple" !== "orange");//La consola muestra (true) ya que el string no es igual;

const manzanita = "apple";
const platanito = "banana";
console.log(manzanita !== platanito);//La consola mostrara (true) ya que los valores de las variables no son iguales y usa el operador de deisgualdad;

console.log(50 > 49);//La consola mostrara (true) por que 50 si es mayor que 49;
console.log(49 > 51);//La consola mostrara (false) por que 49 es menor que 51;
console.log(30 < 60);//La consola mostrara (true) por que 30 es menor que 60;
console.log(20 < 9);//La consola mostrara (false) por que 20 es mayor que 9;
// Los signos (> mayor que) (< menor que) son los operadores de mayor y menor que, nos ayudan a comparar números;

console.log(50 >= 50);//La consola mostrara (true) por que 50 es igual o mayor que 50;
console.log(49 >= 51);//La consola mostrara (false) por que 49 es menor que 51;
console.log(30 <= 60);//La consola mostrara (true) por que 30 es menor que 60;
console.log(20 <= 9);//La consola mostrara (false) por que 20 es mayor que 9;
// Los signos (>= mayor o igual que) (<= menor o igual que) son los operadores de mayor, menor o igual que, nos ayudan a comparar si números son mayores, menores o iguales;

const cadenas = "Cookie";//Valor de cadena, entran aqui los strings; 
const numero = 40;//Valor de número, entran aquí números;
const booleano = true;//Valor booleano; entra aquí true y false;
//A los valores de cadenas, números y booleanos se les conoce como tipos;

let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn);//La consola muestra true por que todos los valores son true;
//El signo (&&) es el operador AND y es un operador lógico, si todas las condiciones son true, la consola muestra true, si una o más condiciones dan false, la consola mostrara false, y si todas las consiciones dan false, la consola mostrara false;

let isBatteryOn1 = false;
let isSwitchOn1 = false;
console.log(isBatteryOn1 && isSwitchOn1);//La consola muestra false por que todos los valores son false;

let isBatteryOn2 = true;
let isSwitchOn2 = false;
console.log(isBatteryOn2 && isSwitchOn2);//La consola muestra false por que un valor esta en false;

let isBatteryOn3 = true;
let isSwitchOn3 = false;
console.log(!(isBatteryOn3 && isSwitchOn3));//La consola muestra true por que invierte el valor de false por nuestro operador NOT (!) que este invierte los reusltados o valores;

let age = 18;
let isPass = true;
const isEligible = age >= 18 && isPass;
console.log(isEligible);
//La consola imprime true, contexto: emitir una licencia de conducción a una persona de 18 o mas años y aprobar su examen de manejo, en el ejemplo sale true ya que las condiciones si se cumplen;

let loanREjected = false;//No le cancelaron el prestamo;
let dollars = 30000;//Tiene dinero insuficiente para comprar el carro;
let costo = 50000;//El precio del carro;
const insufficientFunds = dollars < costo;//No le alcanza el dinero por que el tiene 30000 y el carro cuesta 50000 tiene menos dinero de lo que scuesta el carro;
const canBuyCar = !(loanREjected && insufficientFunds);//Puede comprar el carro ya que no le anularon el prestamo y su dinero es de 30000;
console.log(canBuyCar);//En conclusion el prestamo seria de 20000 y si le alcanzaria para comprar el carro entre su dinero actual y el prestamo;
//La consola imprime true, contexto: comprobar si una persona puede comprar un carro o no;

let bateriaEncendida = true;
let enchufe = false;
console.log(bateriaEncendida || enchufe);//La consola muestra true por que un valor es true;
//El signo (||) es el operador OR yes un operador lógico, basta con que un valor sea true para que la consola muestre true, si no hay ningun valor true la consola mostrara false;

let bateriaEncendida1 = true;
let enchufe1 = true;
console.log(bateriaEncendida1 || enchufe1);//La consola muestra true por que un valor es true;

let bateriaEncendida2 = false;
let enchufe2 = false;
console.log(bateriaEncendida2 || enchufe2);//La consola muestra false por que todos los valores son false y no hay ningun true;

let isLoanApproved = true;
let cash = 30000;
let cost = 40000;
const isCarBought = isLoanApproved || (cash > cost);
console.log(isCarBought);
//La consola imprime true, contexto: verificar si una persona puede comprar un carro si su prestamo es aprobado o si su monto es mayor al costo del carro y en el ejemplo sale true por que si se le fue aprovado el prestamo;

let cloundStorage = 4;//Almacenamiento de la nube;
let systemStorage = 8;//Almacenamiento del sistema;
let fileSize = 5;//Tamaño del archivo;
const resultado = (cloundStorage > fileSize) || (systemStorage > fileSize);//Si el almacenamiento de la nube es mayor al tamaño del archivo o si el almacenamiento del sistema es mayor al tamaño del archivo;
console.log("Saved? :" + resultado);//No se cumple con la primera afirmacion que equivale a false pero la segunda si y esa equivale a true, entonces el archivo si se guarda ya que el tamaño de alamacenamiento es superior al del archivo;
//La consola imprime true, contexto: guardar un archivo en la nube si el almacenaniento de esta es mayor al del archivo o si el almacenamiento del sistema es mayor que la del tamaño del archivo;

if (true) {
    console.log("Hello");
}
//Uso de la sentencia if sirve ejecutar el codigo, aqui la consola muestra el texto: (Hello) ya que (true) es la condicional y le indica que ejecute el código, (false y true) son condiciones;

if (false) {
    console.log("Hello");
}
//Aqui la consola no muestra el texto: (Hello) ya que (false) es la condicional y le indica que no ejecute el código, que ignore el codigo;

const ejecutar = true;
if (ejecutar) {
    console.log("Hello");
    console.log("This is a code block");
    console.log("Contains the lines that we want");
}
//Esto es un bloque de codigo, se ejecutara por que tiene la condición true dentro de una variable y ejecutara todo lo que está dentro de los parentesis;

let answer = "Picasso";
if (answer === "Picasso") {
    console.log(answer + " is correct!");
}
//La consola imprime (Picasso is correct!) ya que si el valor de answer es igual a la palabra "Picasso" seria equivalente a un true por que se cumple la condición de igualdad (===) se ejecutara la consola con el valor de answer y el string;

let answer1 = "Matisse";
if (answer1 !== "Picasso") {
    console.log(answer + " is wrong!");
}
//La conola imprime (Matisse is wrong!) ya que si el valor de answer es desigual a  la palabra "Picasso" seria equivalente a un true por que se cumple la condición de desigualdad (!==) se ejecutara la consola el valor de answer y el string;

let age1 = 75;
if (age >= 55) {
    console.log("Discount applied");
}
//La consola imprime (Discount applied) ya que si el valor de age (75) es mayor o igual que 55 que equivale a un true ya que la condición si se cumple, la consola ejecuta el codigo e imprime (Discount applied);

let isDay = true;
if (isDay === true) {
    console.log("Lights off!");
}
//La consola imprime (Lights off!) ya que si el valor de isDay (true) es igual a true la consola debe ejecutar el codigo e imprimir el string;

let score1 = 51;
let pass = score > 50;
if (pass) {
    console.log(pass);
}
//La consola muestra true ya que si el score es mayor a 50 si puede obtener el pass;

let number1 = 100;
if (number === 10) {
    console.log("It's 10");
} else {
    console.log("It's not 10");
}//La consola imprime (It's not 10) por que el 100 no es igual a 10, ese seria al valor false, entonces se ejecutara el else ya que la respuesta es (100 no es igual a 10) ese sería el valor true;
//La declaración else se ejecuta cuando la condición de instruccion de if es false, es como una respuesta o accion que se ejecuta cuando algo es negativo; 

let hour = 9;
if (hour < 12) {
    console.log("Good morning");
} else {
    console.log("Good evening");
}
//La conola imprimira (Good morning) ya que si la hora es menor a 12 la consola imprime good morning, ese seria el valor true y si no que la consola imprima good evening, ese seria el valor false;

let hours = 14;//hour es 14;
if (hours < 12) { //Si hours (14) es menor a 12 que la consola imprima (Good morning) pero no es asi, el valor seria false;
    console.log("Good morning");
} else if (hours < 17) { //Ademas del else agregamos una nueva condición, ahora si hours (14) es menor a 17 la consola debe ejecutar (Good safternoon) este seria el valor true;
    console.log("Good afternoon")
}
//La consola muestra (Good afternoon) la sentencia del else se le llama: (sentencia else sentencia if), podemos agregar todas las declaraciones else que sean requeridas, siempre y cuando vayan despues de una condicion if, dentro de los parentesis de if o else if podemos agregar operadores para hacer nuestra condicion;

var answet = pickRandom([
    'yes',
    'no'
])
print(answer)
pickRandom([
    'tal vez',
    'probablemente'
])
//Ejemplo de respuestas aleatorias;

var exmapleArray =[
    'blue',
    'orange',
    5,
    10
    [
        50,
        10
    ]
];
//Ejemplo de arreglo;

var colors = [
    'black',
    'white'
];

drawBox(colors[0]);
drawBox(colors[1]);
drawBox(colors[0]);
newline();
drawBox(colors[1]);
drawBox(colors[0]);
drawBox(colors[1]);
newline();
drawBox(colors[0]);
drawBox(colors[1]);
drawBox(colors[0]);
//Patron de colores usando arreglos;

var color = pickRandom([
    'blue',
    'green'
])
print(color);
if (color === blue) {
    drawBox(blue);
    drawBox(green);
}
//Editor if, uso de colores, si es verdadera la igualdad "===" solo se ejecuta;

var answel = pickRandom([
    'heads',
    'tails'
])
print(answer);
if (answer === 'heads') {
    drawBoxes('gwg ggg gwg');
}
if (answer === 'tails') {
    drawBoxes('bbb brb bbb'); 
}
//Se ejecutan los valores en forma de patron de colores los valores igualados;

var aNumber = 5;
if (aNumber === 5) {
    drawBox(blue);    
}
if (aNumber === 4) {
    drawBox(red);   
}
//Ejemplo de if statement;

var x = 5;
x = x + 5;
print('x is' + 3);
x = x - 3;
print('x is now' + x);
//Uso de operadores (+) y menos (-);

var y = 10;
y = y * 5;
print(y);
y = y / 2;
print(y);
//Uso de operadores multiplicacion (*) y division (/);

print('pinNumber is' + pinNumber);
print('foundKey is' + foundKey);
if (foundKey === 'no' && pinNumber === 10) {
    print('You opened the lock!');
}
if (foundKey === 'no' && pinNumber === 10) {
    print('The number is right, but you are missing the key');
}
//Uso del operador (&&) para combinar 2 verificaciones en un if statement;

print('x is' + x);
print('y is' + y);
if (x > 3 && y < 11) {
    print('x is greater than 3, and y is less than 11');
}
if (x > 10 || y > 10) {
    print('x or y, or both, are greater than 10');
}
//Uso del operador mayor que (>), operador menor que (<), operador o (||);

for (var letter of 'grasshoper') {
    print(letter);
}
//Ejemplo de un for...of loop, permiten repetir el mismo bloque de codigo varias veces;

for (var letter of img) {
    if (letter !== 'e') {
        drawBoxes(letter);
    }
}
//Uso de un if statement dentro de un for...of loop para revelar una imagen;

for(var adj of [
    'Raging',
    'Happy',
    'Hungry'
]) {
    for (var noun of [
        'Pharmacists',
        'Squids',
        'Twins'
    ]) {
        print('The' + adj + ' ' + noun); 
    }
}
//Uso de un ciclo anidado;

var someCustomColor = {
    red: 255,
    green: 0,
    blue: 255
};
drawBox(someCustomColor);
//Ejemplo de uso de un objeto y agrega propiedades al objeto;

print(message);
if (messange.leght > 80) {
    print('The message is too log for a postcard');
}
if (message.legth < 80) {
    print('The message fist on a postcard');
}
//Se usa la propiedad (.legt) para verificar el numero total de caracteres en un string, incluye largo de caracteres y espacio;

