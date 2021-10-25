// Boton para el Nav Bar

const menuBtn=document.querySelector('.menu-btn');
const links=document.querySelector('.links');

    let menuOpen=false;
    let openClose = ()=>{
        if (!menuOpen){
            menuBtn.classList.add('open');
            menuOpen=true;
            links.classList.remove('show')
        } else {
            menuBtn.classList.remove('open');
            menuOpen=false;
            links.classList.add('show')
        }
    };

menuBtn.addEventListener('click',openClose);

