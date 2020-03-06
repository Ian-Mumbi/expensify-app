// const person = {
//     age: 22,
//     location: {
//         'city': 'Nairobi',
//         temperature: 76
//     }
// }

// function getBio ({ name: firstName = 'Anonymous', age }) {
//     console.log(firstName + ' is ' + age + ' years old.')
// }

// getBio(person) 

// const {city, temperature: temp} = person.location

// if (temp && city){
//     console.log(`It's ${temp} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher 
// console.log(publisherName)


// Array Descructuring
// 
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19417']

const [, city, state] = address

console.log(`You are in ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [coffee, , mediumPrice] = item
console.log('A medium ' + coffee + ' costs ' + mediumPrice)



















