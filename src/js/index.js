let boxModels    = document.querySelector(".box_models")
let boxHairstyle = document.querySelector(".box_hairstyle")
let boxBlondes   = document.querySelector(".box_blondes")
let boxBride     = document.querySelector(".box_bride")
let boxSpace     = document.querySelector(".container_space")

function addCards(box) {
     box.forEach(element => {
        if (element.type == "blondes") {
            boxBlondes.appendChild(createCards(element))
        }else if(element.type == "hairstyle"){
            boxHairstyle.appendChild(createCards(element))
        }else if (element.type == "afterr") {
            boxModels.appendChild(createCards(element))
        }else if (element.type == "bride") {
            boxBride.appendChild(createBrides(element))
        }else if (element.type == "space") {
            boxSpace.appendChild(createSpace(element))
        }
     });

}
addCards(base)

function createCards(element) {
    let tagImg = document.createElement('img')
    let tagLi  = document.createElement('li')
    
    tagImg.classList.add("photos_models")
    tagLi.classList.add("box_photos--models")

    tagImg.src = element.img

    tagLi.append(tagImg)

    return tagLi

}

function createBrides(element) {
    let tagImg = document.createElement('img')
    let tagLi  = document.createElement('li')
    
    tagImg.classList.add("photos_brides")
    tagLi.classList.add("box_photos--brides")

    tagImg.src = element.img

    tagLi.append(tagImg)

    return tagLi

}

function createAfter(element) {
    let tagImg = document.createElement('img')
    let tagLi  = document.createElement('li')

    tagImg.classList.add("photos_models")
    tagLi.classList.add("box_photos--models")

    tagImg.src = element.img

    tagLi.append(tagImg)

    return tagLi
}

function createSpace(element) {
    let tagImg = document.createElement('img')
    let tagLi  = document.createElement('li')

    tagImg.classList.add("box_space--img")
    tagLi.classList.add("box_space")

    tagImg.src = element.img

    tagLi.append(tagImg)

    return tagLi 
}


let dialog              = document.querySelector("dialog")
let buttInfoBlonde      = document.querySelector(".photo_info--blonde")
let buttInfoHairstyle   = document.querySelector(".photo_info--hairstyle")
let buttInfoVisagismo   = document.querySelector(".photo_info--visagismo")


function butts() {
    buttInfoBlonde.addEventListener("click", ()=>{
        dialog.showModal()
        let infoBlonde = "O cabelo loiro pode ser benéfico, pois muitas pessoas acham que essa tonalidade ilumina o rosto, adiciona um toque de juventude e pode realçar seus traços, proporcionando uma aparência mais radiante e confiante. Experimente pintar o cabelo de loiro e ilumine sua beleza natural com um toque de brilho e ousadia!"
        dialog.append(modalInfo(infoBlonde))
    })
    buttInfoHairstyle.addEventListener("click", ()=>{
        dialog.showModal()
        let info = "Um penteado cuidadosamente escolhido para um evento é como a moldura perfeita para uma obra de arte - ele não só complementa sua roupa, mas também destaca seus traços faciais, expressa sua personalidade e ajuda você a se destacar, tornando o momento ainda mais memorável e especial. Que tal experimentar um penteado novo para realçar sua beleza e se sentir ainda mais incrível? Um penteado diferente pode ser a chave para uma dose extra de confiança e um visual deslumbrante!"
        dialog.append(modalInfo(info))
    })
    buttInfoVisagismo.addEventListener("click", ()=>{
        dialog.showModal()
        let info = "O corte de cabelo com visagismo é essencial, pois leva em consideração a sua fisionomia, estilo de vida e personalidade, criando uma harmonia única entre o seu rosto e o seu cabelo. Isso não apenas realça a sua beleza natural, mas também revela quem você é de forma autêntica, fazendo com que você se sinta confiante e radiante em qualquer ocasião. Um corte personalizado pode fazer maravilhas pelo seu visual e autoestima, revelando sua verdadeira essência!. Que tal considerar um corte de cabelo com visagismo? "
        dialog.append(modalInfo(info))
})
}
butts()

function modalInfo(info) {
   let tagH3  = document.createElement('h3')
   let tagBox = document.createElement('div')
   let buttClose = document.createElement('button')

   tagH3.innerText = info
   buttClose.innerText = "X"

   tagH3.classList.add("modal_info")
   tagBox.classList.add("modal_box")
   buttClose.classList.add("modal_buttClose")

   buttClose.addEventListener('click', (e)=>{
      e.preventDefault()
      dialog.close()
      tagBox.innerText = ""
   })

   tagBox.append(tagH3, buttClose)

   return tagBox
}