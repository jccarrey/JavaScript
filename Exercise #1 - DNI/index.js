/*  Haz una página que pida el número de DNI y la letra y compruebe si se corresponden. Para ello
    utiliza el siguiente array:
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K','E', 'T'];
    Para averiguar la letra, divide el número del DNI por 23 y obtén el resto. La letra correspondiente a
    ese DNI ocupa en el array de letras el lugar indicado por el resto de la división. */

import { Dni } from './modules/dni.js';

let myDni = new Dni(); 

var myButton = document.getElementById('btn');
var myInput = document.getElementById('inp');
var h1Result = document.createElement('h1');

myButton.addEventListener('click', function() {
    h1Result.innerHTML = myDni.verifyDni(myInput.value);
    document.body.appendChild(h1Result);
})