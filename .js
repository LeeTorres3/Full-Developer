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


var answer = pickRandom([
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

var answer = pickRandom([
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

