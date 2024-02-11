import { Edit } from "./modules/edit.js";

let myEdit = new Edit();

addButtons();

function addButtons() {
    var paragraphs = document.getElementsByClassName('parrafoEditable');
    for (let index = 0; index < paragraphs.length; index++) {
        var button = document.createElement('button');
        button.setAttribute('id', 'btn' + (index + 1));
        document.body.appendChild(button);
    }
}

document.getElementById('btn1').addEventListener('click', convertToTextArea1);
document.getElementById('btn2').addEventListener('click', convertToTextArea2);

function convertToTextArea1() {
    var myButton1 = document.getElementById('btn1');
    var myP1 = document.getElementById('p1').innerHTML;
    var textarea = document.createElement('textarea');
    textarea.value = myP1;
    document.getElementById('p1').replaceWith(textarea);
    textarea.setAttribute('id', 'text-area1')
    myButton1.style.display = 'none';

    var cancelButton = document.createElement('button');
    var acceptButton = document.createElement('button');

    acceptButton.textContent = 'ACCEPT';
    cancelButton.textContent = 'CANCEL';

    acceptButton.setAttribute('id', 'btn-accept');
    acceptButton.setAttribute('class', 'btn');

    cancelButton.setAttribute('id', 'btn-cancel');
    cancelButton.setAttribute('class', 'btn');

    document.body.appendChild(acceptButton);
    document.body.appendChild(cancelButton);

    acceptButton.addEventListener('click', function() {
        acceptChanges(textarea, myButton1, acceptButton, cancelButton);
    });
    cancelButton.addEventListener('click', cancelChanges());
}

function convertToTextArea2() {
    var myButton2 = document.getElementById('btn2');
    var myP2 = document.getElementById('p2').innerHTML;
    var textarea = document.createElement('textarea');
    textarea.value = myP2;
    document.getElementById('p2').replaceWith(textarea);
    textarea.setAttribute('id', 'text-area2')
    myButton2.style.display = 'none';
}

function acceptChanges(textarea, originalButton, acceptButton, cancelButton) {
    var textAreaContent = textarea.value;

    var newParagraph = document.createElement('p');
    newParagraph.setAttribute('id', 'p1');
    newParagraph.textContent = textAreaContent;

    textarea.replaceWith(newParagraph);

    originalButton.style.display = 'block';

    acceptButton.remove();
    cancelButton.remove();
}

function cancelChanges() {

}