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


// Declaración de elementos

let btn=document.getElementById('comprarTickets');
let link=document.querySelector('.verde');


// Se declara los valores de los carteles
let estudiante=document.querySelector('.estudiante');
let estudianteValor=Number(estudiante.getElementsByClassName('estudianteValor')[0].getAttribute('value'));

let trainee=document.querySelector('.trainee');
let traineeValor=Number(trainee.getElementsByClassName('traineeValor')[0].getAttribute('value'));

let junior=document.querySelector('.junior');
let juniorValor=Number(junior.getElementsByClassName('juniorValor')[0].getAttribute('value'));



//Funciones para ver el nuevo Sector

let botonCambiar=false;

function esconder(){
      // seleccionando partes a esconder
      let conferencia=document.getElementById('conferencia');
      let moderador=document.getElementById('box-moderador');
      let images=document.getElementById('images-Octubre');
      let orador=document.getElementById('convertir-orador');

      var arraySections=[conferencia,moderador,images,orador];
      let ventaTicket=document.getElementById('displayTicket');


      if (!botonCambiar) {
        arraySections.forEach((e) => {
          e.classList.add('hidden')});
          botonCambiar=true;
        ventaTicket.classList.remove('hidden');
        clearAll();
      } else {
        arraySections.forEach((e) => {
          e.classList.remove('hidden')});
          botonCambiar=false;
        ventaTicket.classList.add('hidden');
        clearAll();
      };

}

function setEstudiante(){
document.getElementById('categoriasLista').value='';
document.getElementById('categoriasLista').value='Estudiante';
}


function setTrainee(){
document.getElementById('categoriasLista').value='';
document.getElementById('categoriasLista').value='Trainee';
}


function setJunior(){
document.getElementById('categoriasLista').value='';
document.getElementById('categoriasLista').value='Junior';
}

// coloco todo
function clearAll(){
    document.querySelector('.nameNombre').value='';
    document.querySelector('.nameLast').value='';
    document.querySelector('.nameCorreo').value='';
    document.getElementById('nombre').value='';
    document.getElementById('categoriasLista').value='';
    document.getElementById('totalPagar').innerText='';

    let nombre=document.querySelector('.nameNombre');
    let apellido=document.querySelector('.nameLast');
    let correo=document.querySelector('.nameCorreo');
    let cantidad=document.getElementById('nombre');
    let categoria=document.getElementById('categoriasLista');

    document.getElementById('totalPagar').classList.add('hidden')
}



function selectorDescuento() {

  let seleccionado=document.getElementById('categoriasLista').value
  let selectorDescuento='';

switch (seleccionado) {
    case 'Estudiante':
      return estudianteValor;

    break;
    case 'Trainee':
      return traineeValor;
      break;
    case 'Junior':
        return juniorValor;
        break;
      };

};




function valorFinal(percDesc){

// Obtiene los valores de Valor de Ticket General
let valorTicket=Number(document.querySelector('.valorTicket').getAttribute('value'));


// Cantidad de Tickets
let cantidadTickets=Number(document.querySelector('.nameCant').value);

// Valor final con descuento

let valor= (Number(valorTicket)-(percDesc/100) * Number(valorTicket))*cantidadTickets;


valor=valor.toFixed(2);


//Inserta el valor Final

let total=document.getElementById('totalPagar');
total.innerText= `Total a Pagar: ${valor}`;

}

function displayValor(){

let descuento=selectorDescuento();
let total=valorFinal(descuento);
document.getElementById('totalPagar').classList.remove('hidden');

return false;

}
// Eventos


btn.addEventListener('click',esconder);
link.addEventListener('click',esconder);
estudiante.addEventListener('click',setEstudiante);
trainee.addEventListener('click',setTrainee);
junior.addEventListener('click',setJunior);


let resumen=document.querySelector('.resumen');
    resumen.addEventListener('click',displayValor);
