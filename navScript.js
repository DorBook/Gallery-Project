const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const buttons = document.getElementsByClassName('buttons')[0]
const links = document.getElementsByClassName('links')[0]

toggleMenu.addEventListener("click", () =>{
    buttons.classList.toggle("active")
    links.classList.toggle("active")
})
