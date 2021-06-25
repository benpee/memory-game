document.addEventListener('DOMContentLoaded', function () {

});

const cardArray = [
    {
        name: 'bread',
        img: 'images/bread.jpg'
    },
    {
        name: 'bread',
        img: 'images/bread.jpg'
    },
    {
        name: 'cheese',
        img: 'images/cheese.jpg'
    },
    {
        name: 'cheese',
        img: 'images/cheese.jpg'
    },
    {
        name: 'chocolate',
        img: 'images/chocolate.jpg'
    },
    {
        name: 'chocolate',
        img: 'images/chocolate.jpg'
    },
    {
        name: 'grapes',
        img: 'images/grapes.jpg'
    },
    {
        name: 'grapes',
        img: 'images/grapes.jpg'
    },
    {
        name: 'croissant',
        img: 'images/croissant.jpg'
    },
    {
        name: 'croissant',
        img: 'images/croissant.jpg'
    },
    {
        name: 'strawberries',
        img: 'images/strawberries.jpg'
    },
    {
        name: 'strawberries',
        img: 'images/strawberries.jpg'
    },
];

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const cardChoosen = [];
const cardChoosenId = [];
const cardsWon = [];

// Randomize the card Array
cardArray.sort(() => 0.5 - Math.random());

const createBoard = function () {
    cardArray.forEach((_, i) => {
        let cardEl = document.createElement('img');
        cardEl.setAttribute('src', 'images/IMG.jpg');
        cardEl.setAttribute('data-id', i);
        cardEl.addEventListener('click', flipCard)
        grid.appendChild(cardEl);
    })
};
createBoard();

// Check for match
const checkForMatch = function () {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardChoosenId[0];
    const optionTwoId = cardChoosenId[1];

    if (cardChoosen[0] === cardChoosen[1]) {
        alert('You found a match!');
        cards[optionOneId].setAttribute('src', 'images/IMG.jpg');
        cards[optionTwoId].setAttribute('src', 'images/IMG.jpg');
        cardsWon.push(cardChoosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/IMG.jpg')
        cards[optionTwoId].setAttribute('src', 'images/IMG.jpg')
    }
    cardChoosen = [];
    cardChoosenId = [];
    resultDisplay.textContent = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2)
        alert('Congrats! You won the game!!!');
}

// Flip your card
const flipCard = function () {
    const cardId = this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenId.push(cardId);

    this.setAttribute('src', cardArray[cardId].img);

    if (cardChoosen.length === 2) {
        setTimeout(checkForMatvh, 500);
    }
}