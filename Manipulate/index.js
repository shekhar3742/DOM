const title = document.getElementById('main-heading');
title.style.color = 'red';

const classcolor = document.getElementsByClassName('list-items');


for(let i=0 ; i<classcolor.length; i++){
    classcolor[i].style.color = 'blue';
}

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
li.innerText = 'X-Men';
