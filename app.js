const cardArray = [
    {
        name: "fries",
        png: "images/fries.png"
    },
    {
        name: "cheesburger",
        png: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        png: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        png: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        png: "images/milkshake.png"
    },
    {
        name: "pizza",
        png: "images/pizza.png"
    },
    {
        name: "fries",
        png: "images/fries.png"
    },
    {
        name: "cheesburger",
        png: "images/cheeseburger.png"
    },
    {
        name: "hotdog",
        png: "images/hotdog.png"
    },
    {
        name: "ice-cream",
        png: "images/ice-cream.png"
    },
    {
        name: "milkshake",
        png: "images/milkshake.png"
    },
    {
        name: "pizza",
        png: "images/pizza.png"
    },
].sort(() => .5 - Math.random())
blank = "images/blank.png"
white = "images/white.png"
console.log(cardArray)

const gridDisplay = document.querySelector("#grid")

const createBoard = () => {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', blank);
        card.setAttribute('class', `card${i}`);
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        console.log(card)
        gridDisplay.append(card)
    }
}

const flipCard = (card) => {
    if (wait == 1) return;
    console.log(card)
    id = card.target.getAttribute('data-id')
    console.log(`${id} was clicked`)
    document.querySelector(`.card${id}`).setAttribute('src', cardArray[id].png)
    flipped.push(id)
    console.log(flipped)
    if (flipped.length >= 2) wait = 1;
    setTimeout(() => {
        if (flipped.length >= 2) {
            guesses++;
            document.querySelector("#guesses").innerHTML = guesses;
            if (cardArray[flipped[0]].name == cardArray[flipped[1]].name) {
                //you won it
                score++;
                document.querySelector("#result").innerHTML = score;
                document.querySelector(`.card${flipped[0]}`).setAttribute('src', white)
                document.querySelector(`.card${flipped[1]}`).setAttribute('src', white)
                document.querySelector(`.card${flipped[0]}`).removeEventListener('click', flipCard)
                document.querySelector(`.card${flipped[1]}`).removeEventListener('click', flipCard)
            }
            else {
                document.querySelector(`.card${flipped[0]}`).setAttribute('src', blank)
                document.querySelector(`.card${flipped[1]}`).setAttribute('src', blank)
            }
            flipped = []
        }
        wait = 0;
        if (score == 6) {
            document.querySelector("#grid").innerHTML = "You Win!";
            setTimeout(() => {
                location.reload();
            }, 3000)
        }
    }, 1500)
}
let wait = 0
let score = 0;
let guesses = 0;
let flipped = []
createBoard()