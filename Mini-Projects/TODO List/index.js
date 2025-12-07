const add = () => {
    let Input = document.getElementById('input');
    let InputValue = Input.value.trim();

    if (InputValue !== "") {
        const List = document.getElementById('List');
        const li = document.createElement('li');
        li.innerHTML = '<input type="checkbox"> ' + InputValue + ' <Button onclick="deleteTask(this)" >Delete</Button>';
        List.appendChild(li);
        Input.value = ''
    }
    else {
        alert("Please add a task ");
    }

}

const deleteTask = (btn) => {
    const liparent = btn.parentNode;
    liparent.parentNode.removeChild(liparent);
}

const deleteChecked = () => {
    let Input = document.getElementById('input');
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const liparent = checkbox.parentNode;
        liparent.parentNode.removeChild(liparent);
    })
}