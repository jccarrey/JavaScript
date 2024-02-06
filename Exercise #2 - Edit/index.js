import { Edit } from "./modules/edit.js";

let myEdit = new Edit();

document.getElementById('btn1').addEventListener('click', convertirAParrafo);

function convertirAParrafo() {
    var myP1 = document.getElementById('p1').innerHTML;
    var textarea = document.createElement('textarea');
    textarea.value = myP1;
    document.getElementById('p1').replaceWith(textarea);
}