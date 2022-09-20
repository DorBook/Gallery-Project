const toggleMenu = document.getElementsByClassName('toggle-menu')[0]
const toggleForm = document.getElementsByClassName('toggle-form')[0]
const buttons = document.getElementsByClassName('buttons')[0]
const links = document.getElementsByClassName('links')[0]


toggleMenu.addEventListener("click", () =>{
    buttons.classList.toggle("active")
    links.classList.toggle("active")
})


let form = document.getElementsByClassName("artForm")[0]

toggleForm.addEventListener("click", () =>{
    form.classList.toggle("active")
    })
form.addEventListener("submit", onSubmit)

function onSubmit(ev){
    ev.preventDefault()
    let add = addArt()
}

function addArt(){
    let artName = document.getElementById("inputName")
    let artDesc = document.getElementById("inputDesc")
    let artLink = document.getElementById("inputLink")

    let divCreate = document.createElement("div")
    let newName = document.createElement("h2")
    let newDesc = document.createElement("p")
    let newImg = document.createElement("img")
    
    newName.innerText=artName.value
    newDesc.innerText=artDesc.value
    newImg.setAttribute("src",artLink.value)

     
    divCreate.appendChild(newName)
    divCreate.appendChild(newImg)
    divCreate.appendChild(newDesc)


    let container =document.getElementsByClassName("container")[0]
  
    container.appendChild(divCreate)

    let art = addArt.value
    artLink.value = ""
    artDesc.value = ""
    artName.value = ""
    return art
}


