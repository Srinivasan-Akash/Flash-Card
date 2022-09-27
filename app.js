// Fetching Elements
let submitBtn = document.querySelector(".edit .form button")
let title = document.querySelector(".title")
let tagline = document.querySelector(".tagline")
let bg = document.querySelector(".bg-img")
let desc = document.querySelector(".desc")
let textTheme = document.querySelector(".text-color")
let bgTheme = document.querySelector(".bg-color")
let cardTitle = document.querySelector(".card__title")
let cardDesc = document.querySelector(".card__body")
let cardTagline = document.querySelector(".card__subtitle")
let cardFront = document.querySelector(".card__front")
let cardBack = document.querySelector(".card__back")

// Hamburger
let isVisible = false;
function myFunction(x) {
    x.classList.toggle("change");
    if(!isVisible){
        document.querySelector(".edit").classList.add("show");
        isVisible = true;
    } else{
        document.querySelector(".edit").classList.remove("show");
        isVisible = false;
    }
}

submitBtn.addEventListener("click", (e) => {
    SetDataToCard()
    pushToLocalStorage()
})


window.addEventListener('load', (event) =>{
    getDataFromLocalStorage()
});

function SetDataToCard() {
    cardTitle.innerText = title.value
    cardDesc.innerText = desc.value
    cardTagline.innerText = tagline.value
    cardFront.style.backgroundImage = `url('${bg.value}')`
    cardFront.style.color = textTheme.value
    cardBack.style.background = bgTheme.value 
}

function pushToLocalStorage(){
    let dataArr = [cardTitle.innerText,
                   cardDesc.innerText,
                   cardTagline.innerText,
                   cardFront.style.backgroundImage,
                   cardFront.style.color,
                   cardBack.style.background
                  ]
    localStorage.setItem("cardData", JSON.stringify(dataArr))
}

function getDataFromLocalStorage(){
    let cardData = JSON.parse(localStorage.getItem("cardData"))
    cardTitle.innerText = cardData[0]
    cardDesc.innerText = cardData[1]
    cardTagline.innerText = cardData[2]
    cardFront.style.backgroundImage = cardData[3]
    cardFront.style.color = cardData[4]
    cardBack.style.background = cardData[5]
}