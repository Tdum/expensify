//
// Object destructuring
//



// const person = {
//     name: 'Andrew',
//     age: 26, 
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// // default value
// const {age, name = 'anonymous' } = person
// // rename
// const { city, temp: temperature } = person.location

// console.log(`${name} is ${age}`)
// if (city && temperature) {
//     console.log(temperature, city)
// }

const book =  {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { title, author } = book
const { name : publishedName = 'self published' } = book.publisher

console.log(publishedName)

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia']

const [, city, state = "New York"] = address

console.log(`You are in ${city}, located in ${state}`)

const item = ['coffee', '2', '2,5', '2;75']

const [product, priceMedium] = item

console.log(product, priceMedium)