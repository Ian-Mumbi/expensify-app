import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// // child_removed sunscription
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // database.ref('expenses').once('value').then((snapshot) => {
// //     const expenses = []

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })

// //     console.log(expenses)
// // }).catch((e) => console.log(e))

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = []

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         })
// //     })

// //     console.log(expenses)
// // }, (e) => console.log(e))

// // database.ref('expenses').push({
// //     description: 'Credit Card',
// //     note: '',
// //     amount: 4500,
// //     createdAt: 890
// // })


// // database.ref('notes/M2XoeSTTNCCo2RDaC-1').remove()

// // database.ref('notes').push({
// //     title: 'To Do title',
// //     body: 'Note body'
// // })

// // const firebaseNotes = {
// //     notes: {
// //         jhsgjhdghx: {
// //             title: 'First note',
// //             body: 'This is my note body.'
// //         },
// //         bxyunfgxtfyx: {
// //             title: 'Another note',
// //             body: 'This is note body'
// //         }
// //     }
// // }


// // const notes = [{
// //     id: '12',
// //     title: 'First note',
// //     body: 'This is my note body'
// // }, {
// //     id: '761hd7d8',
// //     title: 'Another note',
// //     body: 'This is my note body'
// // }]

// // database.ref('notes').set(notes)

// // const onDataChange = database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val()
// //     console.log(`${val.name.split(' ')[0]} is a ${val.job.title} at ${val.job.company}.`)
// // }, (e) => {
// //     console.log(e)
// // })

// // database.ref()
// //     .once('value')
// //     .then((snapshot) => {
// //         const val =snapshot.val()
// //         console.log(val)
// //     }).catch((e) => {
// //         console.log(e)
// //     })

// // database.ref().set({
// //     name: 'Ian Mumbi',
// //     age: 22,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         city: 'Nairobi',
// //         country: 'Kenya'
// //     }
// // }).then(() => {
// //     console.log('Data is saved.')
// // }).catch((e) => {
// //     console.log('This failed.', e)
// // })

// // // database.ref('age').set(null)

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // })