const add = () => {
    let Input = document.getElementById('input');
    let InputValue = Input.value.trim();
    
    if(InputValue !== ""){
       const List =  document.getElementById('List');
       const li = document.createElement('li');
       li.innerHTML = '<input type="checkbox"> '+InputValue + ' <Button>Delete</Button>';
       List.appendChild(li);
    }
    else{
        alert("Please add a task ");
    }

}