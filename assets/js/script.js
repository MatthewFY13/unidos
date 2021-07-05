document.getElementById("phone").addEventListener("click", menu__phone);

function menu__phone(){
    document.getElementById("phone__move").classList.toggle('move__container');
    document.getElementById("menu__phone").classList.toggle('menu__right');
}