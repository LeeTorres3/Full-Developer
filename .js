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
myExample = 'I changed the value';
print(myExample);
//Ejemplo de variable;

var word = 'alphabet';
var alphabet = 'word';
print(alphabet);
//Se imprime la palabra word;

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
