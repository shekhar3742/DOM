const generate = () =>{
    const input = document.getElementById('display').value;
    const charset = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%*+-";
    let password  = '';
    if(input > 8){
        for(let i=0; i<input; i++){
        let index = Math.floor(Math.random()*charset.length);
        const randomchar = charset[index];
        password += randomchar ;
        document.getElementById('password').textContent = password;
        
    }
    }
    else{
        document.getElementById('password').textContent = "Enter length greater than or equal to 9";
        return ;
    }
    
    
    
}