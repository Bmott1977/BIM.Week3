
const getCardInfo = index => {

    if (index === 0 ) return {
        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "color": "#deaf01"
    }

    if (index === 1 ) return {
        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "color": "#554a33"
    }

    if (index === 2 ) return {
        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"
    }


    const title = "Champion"
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    const image = "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg"
    const color = "#ff0000"

    if (index === 3) return {title, text, image, color}
}

//console.log({cardInfo4})

/*function bla(text)
{
    console.log(text || "Give a value")
    return 5
}
console.log(bla("Hi"))*/

const createCard = (card, {title, text, image, color}) => {

    card.style.backgroundImage = `url(${image})`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}

const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
createCard(cards[i], getCardInfo(i))
}

const greeting = name => `Hello ${name}!`
console.log(greeting("Brendan"))

const names = ["Ryan", "Marek", "Aidan", "Ashton"]
console.log(names[names.length - 1])

const [fav,leastFav, fav2] = names
console.log({leastFav, fav2})

const sentence = 'This is a bunch of words.'
const words = sentence.split(' ')
const [first] = sentence.split(' ')
console.log({first})
