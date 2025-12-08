const calc = () =>{
   const kg =  document.getElementById('kg').value;
   const cm = document.getElementById('cm').value;
   let m = parseInt(cm)/100;
   let mSquare = (m*m);
   
   let BMI = kg/mSquare;

   const show = document.getElementById("show");
   const para = document.createElement('p');
   para.innerHTML = `BMI : ${BMI.toFixed(2)}`;
   show.appendChild(para);


}