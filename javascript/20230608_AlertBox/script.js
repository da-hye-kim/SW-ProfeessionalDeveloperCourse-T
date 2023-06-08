const openBtn = document.getElementById('open'); 
const box = document.getElementById('box');
const closeBtn = document.getElementById('close');
console.log(openBtn, box, closeBtn);

openBtn.addEventListener('click', function(){
    box.style.display = 'flex';
});

closeBtn.addEventListener('click', function(){
    box.style.display = 'none';
});