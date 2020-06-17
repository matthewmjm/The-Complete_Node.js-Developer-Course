// CRUD

//------------------------------------------------------


// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     console.log('Connected correctly!')
// })

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)
//     db.collection('users').insertOne({
//         name: 'Andrew',
//         age: 27
//     })
// })

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // },(error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Andrew',
    //         age: 27
    //     }, {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunthur',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // Goal:  Insert 3 tasks into a new tasks collection
    //
    // 1. Use insertMany to insert the documents
    //      - description (string), completed (boolean)
    // 2. Setup the callback to handle error or print ops
    // 3. Run the script
    // 4. Refresh teh database in Robo 3t and view data in tasks collection

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Take out the trash',
    //         completed: true
    //     }, {
    //         description: 'Do the dishes',
    //         completed: false
    //     }, {
    //         description: 'Cut the grass',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert document!')
    //     }
    //     console.log(result.ops)

    // })


// })



// GENERATE ID's
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// destructuring
// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)

//     db.collection('users').insertOne({
//         _id: id,
//         name: 'Vikram',
//         age: 26
//         },(error, result) => {
//             if (error) {
//                 return console.log('Unable to insert user')
//          }

//         console.log(result.ops)
//      })
// })

//node mongodb.js
// =>   5ee82d9e69da4dc728277ef3
// =>   2020-06-16T02:35:04.000Z

/* looking up mongodb manual for ObjectID   https://docs.mongodb.com/manual/reference/method/ObjectId/   */

/* ObjectId(<hexadecimal>)
Returns a new ObjectId value. The 12-byte ObjectId value consists of:

a 4-byte timestamp value, representing the ObjectId’s creation, measured in seconds since the Unix epoch
a 5-byte random value
a 3-byte incrementing counter, initialized to a random value   */

// Now back to the API MongoDB Driver docs for ObjectID   
/*  https://mongodb.github.io/node-mongodb-native/3.5/api/ObjectID.html  */
// then choose the 'getTimestamp' method for ObjectID
/*  https://mongodb.github.io/node-mongodb-native/3.5/api/ObjectID.html#getTimestamp
getTimestamp(){date}
node_modules/bson/lib/bson/objectid.js, line 255
Returns the generation date (accurate up to the second) that this ID was generated.

Returns:
generation date
*/




// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)   // returns 12
// console.log(id.toHexString().length)  // returns 24

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)

//     // db.collection('users').insertOne({
//     //     name: 'Vikram',
//     //     age: 26
//     //     },(error, result) => {
//     //         if (error) {
//     //             return console.log('Unable to insert user')
//     //      }

//     //     console.log(result.ops)
//     //  })
// })
 


//------------------------------------------------------

//READ
// Collection methods
//  find and findOne
// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)
// FIND BY NAME 
    // db.collection('users').findOne({ name: 'Vikram'}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }

    //     console.log(user)

    // })

// FIND BY _ID (note the different format)
    // db.collection('users').findOne({ _id: new ObjectID('5ee831323fa416c96c04f973')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }

    //     console.log(user)

    // })

    // db.collection('users').find({ age: 27 }).toArray((error, users) => {
    //         return console.log(users)
    //     })

    // db.collection('users').find({ age: 27 }).count((error, count) => {
    //     return console.log(count)
    // })

    // Challenge Time
    // Goal:  Use find and findOne with tasks
    //
    // 1. Use findOne to fetch the last task by its id (print doc to console)
    // 2. Use find to fetch all tasks that are not completed (print docs to console)
    // 3. Test your work!

    // db.collection('tasks').findOne({ _id: new ObjectID('5ee82d12391c67c6fc89ddbf')}, (error, task) => {
    //     if (error) {
    //         return console.log('Unable to find task')
    //     }

    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: true }).toArray((error, task) => {
    //     return console.log(task)
    // })
 


//------------------------------------------------------

//UPDATE
// Collection methods
//  updateOne and updateMany
// NOTE: just "update" is deprecated
// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }
//     const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateOne( {
    //     _id: new ObjectID('5ee8da13e9c5d6df30fa2c80')
    // }, {
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc {
    //         age: 1
    //     }

    // })

    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany( {
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    //     console.log(result.matchedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })


// })
 


//------------------------------------------------------

//DELETE
// Collection methods
//  deleteOne and deleteMany
// NOTE: just "delete" is deprecated
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        _id: new ObjectID('5ee82d12391c67c6fc89ddbf')
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    


})




 

