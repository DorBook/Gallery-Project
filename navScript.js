const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const buttons = document.getElementsByClassName('buttons')[0]
const links = document.getElementsByClassName('links')[0]


toggleMenu.addEventListener("click", () =>{
    buttons.classList.toggle("active")
    links.classList.toggle("active")
    toggle-submit.classList.toggle("active")
}

let form = document.getElementsByClassName('artForm');
form.addEventListener("submit", onSubmit){
    function onSumbit(ev){
        ev.preventDefault()
        addProd
    }
}
    function addProd(){
        let addName = document.getElementById("#artName")
        let addDesc = document.getElementById("#artDesc")
        let addlink = document.getElementById("#artLink")

        let newDiv:HTMLDivElement = document.createElement("div")
        let newName:HTMLHeadingElement = document.createElement("h1")
        let newDesc:HTMLParagraphElement = document.createElement("p")
        let newLink:HTMLImageElement = document.createElement("img")

        newName.innerText = addName.value
        newDesc.innerText = addDesc.value
        newLink.setAttribute("src",inputImage.value)
    
        newDiv.appendChild(newName)
        newDiv.appendChild(newDesc)
        newDiv.appendChild(newLink)
    
        let container = getElementsByClassName(".container")
        container[0].appendChild(newDiv)
    }