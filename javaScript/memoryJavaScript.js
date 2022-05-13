const cardArray = [
    {
        name: 'fries',
        img: './imagens/fries.png'
    },

    {
        name: 'chesseburguer',
        img: './imagens/cheeseburger.png'
    },

    {
        name: 'ice-cream',
        img: './imagens/ice-cream.png'
    },

    {
        name: 'pizza',
        img: './imagens/pizza.png'
    },

    {
        name: 'milkshake',
        img: './imagens/milkshake.png'
    },

    {
        name: 'hotdog',
        img: './imagens/hotdog.png'
    },

    {
        name: 'fries',
        img: './imagens/fries.png'
    },

    {
        name: 'chesseburguer',
        img: './imagens/cheeseburger.png'
    },

    {
        name: 'ice-cream',
        img: './imagens/ice-cream.png'
    },

    {
        name: 'pizza',
        img: './imagens/pizza.png'
    },

    {
        name: 'milkshake',
        img: './imagens/milkshake.png'
    },

    {
        name: 'hotdog',
        img: './imagens/hotdog.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())  //Deixando array random

const gridDisplay = document.querySelector('#grid')
let cardsChosen= []
let cardsChosenIds = []
const cardsWon = []

function createBoard (){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', './imagens/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
        console.log(card, i)
    }
}

createBoard()


function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log('check for match!')

    if(optionOneId == optionTwoId){
        alert('Tou have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', './imagens/white.png')
        cards[optionTwoId].setAttribute('src', './imagens/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    }
    cardsChosen = []
    cardsChosenIds = []
}

function flipCard(){
    console.log(cardArray)
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)//putting whatever is beeing clicked into an array
    cardsChosenIds.push(cardId)
    //console.log('clicked',cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}