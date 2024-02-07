
const products = [{
    "title": "Nike",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    "color": "#deaf01"
},{
    "title": "Independent",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
    "color": "#554a33"
}, {
    "title": "Michael Kors",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
    "color": "#01322f"
}, {
    "title": "Champion",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/18734115/pexels-photo-18734115/free-photo-of-model-in-brand-sportswear.jpeg",
    "color": "#FFFF00"
}, {
    "title": "Xbox",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg",
    "color": "#0e7a0d"
}, {
    "title": "Playstation",
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "image": "https://images.pexels.com/photos/18417233/pexels-photo-18417233/free-photo-of-a-white-controller-sitting-on-top-of-a-white-box.jpeg",
    "color": "#0070D1"
}]


const container = document.querySelector('#container')
const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

container.removeChild(nextButton.parentNode)

// create additional card in html
const newCard = document.createElement('div')
newCard.id = "card-4"
newCard.classList.add('card')
container.append(newCard)

const infoDiv = document.createElement('div')
newCard.append(infoDiv)

const header = document.createElement('h1')
infoDiv.append(header)

const paragraph = document.createElement('p')
infoDiv.append(paragraph)

container.append(nextButton.parentNode)

const displayProduct = (card, {title, text, image, color}) => {

    card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}

const cards = document.querySelectorAll('.card')
let offset = 0
const updateCards = shift => {
    offset += shift || 0
    cards.forEach((card, index) => {
        const productIndex = (index + offset) % products.length
        displayProduct(card, products[productIndex])
    })
}

updateCards(0)



previousButton.addEventListener('click', () => updateCards(-1))
nextButton.addEventListener('click', () => updateCards(1))


/*
const greeting = name => `Hello ${name}!`
console.log(greeting("Brendan"))


//setTimeout(() => createCard(cards[0], cardInfo1), 3000)

const names = ["ryan", "marek", "aidan", "ashton"]
const names2 = [...names.splice(0, 5), "tevin"]
//console.log(names2)

const upperCase = text => `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`

names2.forEach(name => console.log(upperCase(name)))

const input = "Valentines Day"
if ([ 'Christmas', 'Hollowween', 'St. Patricks Day', 'Valentines Day'].includes(input)) {
    console.log("Found")
}


console.log(names[names.length - 1])

const [fav,leastFav, fav2] = names
console.log({leastFav, fav2})

const sentence = 'This is a bunch of words.'
//const words = sentence.split(' ')
const [first] = sentence.split(' ')
console.log({first})

const printNames = (name1, name2) => {
    console.log(name1)
    console.log(name2)
}

printNames(...names)
*/