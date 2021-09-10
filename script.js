let menu=document .querySelectot('#menu-bar');
let navbar=document .querySelectot('#menu-bar');

menu.onclick=() =>{
    menu.classList.toggle('fa-items');
    navbar.classList.toggle('active');

}

window.onscroll=()=>{
    menu.classList.remove('fa-items');
    navbar.classList.remove('active');

}
 