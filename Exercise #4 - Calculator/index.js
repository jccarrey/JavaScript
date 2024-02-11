import { Calculator } from "./modules/calculator.js";

let myCalculator = new Calculator();

function createButton(value) {
    const button = document.createElement('div'); // Cambiado a div
    button.textContent = value;
    button.classList.add('calculator-button'); // Agregar clase para estilos
    button.addEventListener('click', () => handleButtonClick(value));
    return button;
}

function initCalculator() {
    const calculator = document.getElementById('calculator-container');

    // Crear pantalla
    const screen = document.createElement('div');
    screen.id = 'screen';
    screen.classList.add('calculator-screen'); // Agregar clase para estilos
    calculator.appendChild(screen);

    // Array con los botones y sus valores
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    buttons.forEach(value => {
        calculator.appendChild(createButton(value));
    });
}

function handleButtonClick(value) {
    console.log(`Botón clicado: ${value}`);
}

initCalculator();
