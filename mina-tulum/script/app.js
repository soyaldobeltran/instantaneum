const tng = document.getElementById('tonggle')
const navCont = document.getElementById('nav-cont')

tng.onclick = function (){
    tng.classList.toggle('active');
    navCont.classList.toggle('nav-active')
}
