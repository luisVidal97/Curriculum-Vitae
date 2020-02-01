var modal = document.getElementById('simpleModal');
var modaBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];

var modalPeronal = document.getElementById('simpleModalPersonal');
var modaBtnPersonal = document.getElementById('modalBtnPersonal');
var closeBtnPersonal = document.getElementsByClassName('closeBtn')[1];

modalBtn.addEventListener('click',openModal);
closeBtn.addEventListener('click',closeModal);

modaBtnPersonal.addEventListener('click',openModalPersonal);
closeBtnPersonal.addEventListener('click',closeModalPersonal);
    
function openModal(){
    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function openModalPersonal(){
    modalPeronal.style.display = 'block';
}

function closeModalPersonal(){
    modalPeronal.style.display = 'none';
}