/* MENU FIJO */
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})

/* BOTON MENU */
const button = document.querySelector('.button-menu')
const nav = document.querySelector('.nav')

button.addEventListener('click',() =>{
    nav.classList.toggle('activo')
})

/* PILLS */

const li = document.querySelectorAll('.li');
const bloque = document.querySelectorAll('.bloque');

li.forEach ( ( cadaLi , i )=>{//En esta linea estamos recorriendo todos los LI
    li[i].addEventListener('click',()=>{//En esta linea estamos asignando un CLICK a CADALI

        //Volvemos a recorrer TODOS los li
        li.forEach( (cadaLi, i)=>{
            //Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            //Quitando la clase activo de cada bloque
            bloque[i].classList.remove('activo')
        })
        //En el li que hemos hecho click le añadimos la clase activo
        li[i].classList.add('activo')
        //En el bloque con la misma posicion le añadimos la clase activo
        bloque[i].classList.add('activo')
    })
})
