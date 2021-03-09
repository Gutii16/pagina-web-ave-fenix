const menus = document.querySelector('.menus')
const menu = document.querySelector('.menu-navegacion')


menus.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != menus){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})