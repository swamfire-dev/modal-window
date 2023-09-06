'use strict';

const closeModal = function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

const opemModal = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")
console.log(btnsOpenModal)

for (let i=0;i<btnsOpenModal.length;i++){
    console.log(btnsOpenModal[i].textContent)
    btnsOpenModal[i].addEventListener("click", opemModal)
    // btnsOpenModal[i].addEventListener("click", ()=>{
    //     // console.log(`${btnsOpenModal[i].textContent} Clicked`)
    //     modal.classList.remove("hidden")
    //     overlay.classList.remove("hidden")
    //     // modal.computedStyleMap.display = "block"
    // })
}
btnCloseModal.addEventListener("click",closeModal)
overlay.addEventListener("click",closeModal)
// btnCloseModal.addEventListener("click", ()=>{
//     console.log(`${btnCloseModal.textContent} Clicked`)
//     modal.classList.add("hidden")
//     overlay.classList.add("hidden")
// })
// overlay.addEventListener("click",() =>{
//     console.log(`${overlay.textContent} Clicked`)
//     modal.classList.add("hidden")
//     overlay.classList.add("hidden")
// })

document.addEventListener("keydown", (e)=>{
    // console.log("a key was pressed")
    console.log(e.key)
    if(e.key === "Escape" && !modal.classList.contains("hidden")){
            closeModal()
    }
})