let boxModels    = document.querySelector(".box_models")
let boxHairstyle = document.querySelector(".box_hairstyle")
let boxBlondes   = document.querySelector(".box_blondes")
let boxBride     = document.querySelector(".box_bride")

function addCards(box) {
     box.forEach(element => {
        if (element.type == "blondes") {
            boxBlondes.appendChild(createCards(element))
        }else if(element.type == "hairstyle"){
            boxHairstyle.appendChild(createCards(element))
        }else if (element.type == "after") {
            boxModels.appendChild(createCards(element))
        }else if (element.type == "bride") {
            boxBride.appendChild(createBrides(element))
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

{/* <li class="box_photos--models">
      <img class="photos_models" src="./src/acets/models/01.jpg" alt="">
</li> */}