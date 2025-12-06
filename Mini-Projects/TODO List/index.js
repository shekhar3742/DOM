let Input = document.getElementById('input');
let ul = document.getElementById('List');


const add = () => {
    let div = document.createElement('div');
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.textContent = "Delete";
    button.style.margin = "0px 0px 0px 10px"


    div.style.display = "flex";
    div.style.marginBottom = "10px";
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    let divElement = ul.appendChild(div);
    let addcheckbox = divElement.appendChild(checkbox);
    let addTask = divElement.appendChild(li);
    let addButton = divElement.appendChild(button);


    addTask.textContent = Input.value;

}