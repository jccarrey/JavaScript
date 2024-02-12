import { Edit } from "./modules/edit.js";

let myEdit = new Edit();

// Función que añade los botones necesarios para editar cada '<p>'

function addButtons() {
    var paragraphs = document.getElementsByClassName('parrafoEditable');
    for (let index = 0; index < paragraphs.length; index++) {
        var button = document.createElement('button');
        button.setAttribute('id', 'btn' + (index + 1));
        document.body.appendChild(button);
    }
}

// Función que convierte los '<p>' a '<textarea>'

function convertToTextArea(buttonId, paragraphId) {
    var myButton = document.getElementById(buttonId);
    var myParagraph = document.getElementById(paragraphId);
    var myPValue = myParagraph.innerHTML;
    var textarea = document.createElement('textarea');
    textarea.value = myPValue;
    myParagraph.replaceWith(textarea);
    textarea.setAttribute('id', 'text-area-' + buttonId.substring(3));

    myButton.style.display = 'none';

    var cancelButton = createButton('CANCEL', 'btn-cancel-' + buttonId.substring(3));
    var acceptButton = createButton('ACCEPT', 'btn-accept-' + buttonId.substring(3));

    document.body.appendChild(acceptButton);
    document.body.appendChild(cancelButton);

    acceptButton.addEventListener('click', function () {
        acceptChanges(myParagraph, textarea, myButton, acceptButton, cancelButton);
    });

    cancelButton.addEventListener('click', function () {
        cancelChanges(myParagraph, textarea, myPValue, myButton, acceptButton, cancelButton);
    });
}

// Función que crea los botones 'ACCEPT' y 'CANCEL'

function createButton(text, id) {
    var button = document.createElement('button');
    button.textContent = text;
    button.setAttribute('id', id);
    return button;
}

// Función que acepta los cambios

function acceptChanges(myParagraph, textarea, originalButton, acceptButton, cancelButton) {
    var textAreaContent = textarea.value;

    var newParagraph = document.createElement('p');
    newParagraph.setAttribute('id', myParagraph.id);
    newParagraph.textContent = textAreaContent;

    textarea.replaceWith(newParagraph);

    originalButton.style.display = 'block';

    acceptButton.remove();
    cancelButton.remove();
}

// Función que cancela los cambios

function cancelChanges(myParagraph, textarea, myPcont, originalButton, acceptButton, cancelButton) {
    var newParagraph = document.createElement('p');
    newParagraph.setAttribute('id', myParagraph.id);
    newParagraph.textContent = myPcont;

    textarea.replaceWith(newParagraph);

    originalButton.style.display = 'block';

    acceptButton.remove();
    cancelButton.remove();
}

// Función que añade nuevos parrafos

function addParagraphs() {
    var newParagraph = document.createElement('p');
    newParagraph.classList.add('parrafoEditable');
    newParagraph.textContent = 'Nuevo párrafo';
    
    var paragraphId = 'p' + (document.getElementsByClassName('parrafoEditable').length + 1);

    var editButton = createButton('EDIT', 'btn-edit-' + (document.getElementsByClassName('parrafoEditable').length + 1));
    
    editButton.addEventListener('click', function () {
        convertToTextArea(editButton.id, paragraphId);
    });

    newParagraph.setAttribute('id', paragraphId);
    document.body.appendChild(newParagraph);
    document.body.appendChild(editButton);
}

addButtons();

var addButton = createButton('Add Paragraph', 'btn-add-paragraph');
addButton.addEventListener('click', addParagraphs);
document.body.appendChild(addButton);

document.getElementById('btn1').addEventListener('click', function () {
    convertToTextArea('btn1', 'p1');
});
document.getElementById('btn2').addEventListener('click', function () {
    convertToTextArea('btn2', 'p2');
});
