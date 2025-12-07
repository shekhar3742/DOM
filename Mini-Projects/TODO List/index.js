const add = () => {
    let Input = document.getElementById('input');
    let InputValue = Input.value.trim();
    
    if(InputValue !== ""){
       const List =  document.getElementById('List');
       const li = document.createElement('li');
       li.innerHTML = '<input type="checkbox"> '+InputValue + ' <Button onclick="deleteTask(this)" >Delete</Button>';
       List.appendChild(li);
       Input.value = ''
    }
    else{
        alert("Please add a task ");
    }

}

const deleteTask = (btn) =>{
    const liparent  = btn.parentNode;
    liparent.parentNode.removeChild(liparent);
}