const calc = () =>{
    const Bill = document.getElementById('amount').value;
    const Tip = document.getElementById('percentage').value;

    let calculate = (Bill*Tip) / 100 ;
    console.log(calculate);
    let Total = parseInt(Bill)+parseInt(calculate);

    const show = document.getElementById('show');
    const TipAmount = document.createElement('p');
    TipAmount.innerHTML = `Tip Amount : ${Tip}`
    const TotalAmount =  document.createElement('p');
    TotalAmount.innerHTML = `Total Amount : ${Total}`;
    show.appendChild(TipAmount);
    show.appendChild(TotalAmount);
    
    

}