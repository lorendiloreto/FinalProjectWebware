var express = require( 'express' )
const bodyParser = require("body-parser")
var app = express()
const path = require('path')
    
const mongodb = require( 'mongodb' ),
    mongoDatabase = 'goatconnect',
    mongoCollection = 'users',
    mongoCollection2 = 'userInfo',
    cookie = require( 'cookie-session' )

// ----- MongoDB Set up ------

const uri = 'mongodb+srv://GoatConnect:DMx7JlUVQ04R5jLi@a3-cluster.wk5nt.mongodb.net/goatconnect?retryWrites=true&w=majority'

const client = new mongodb.MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology:true })
let userCollection = null
let userInfoCollection = null

client.connect()
    .then( () => {
        // will only create collection if it doesn't exist
        return client.db( mongoDatabase ).collection( mongoCollection )
    })
    .then( __collection => {
        // store reference to collection
        userCollection = __collection
    })
    .then( () => {
        return client.db( mongoDatabase ).collection( mongoCollection2 )
    })
    .then( __collection => {
        userInfoCollection = __collection
        return "Connected to Databases"
    })
    .then( console.log )

// ----- MongoDB Set up ------


const publicDirectoryPath = path.join(__dirname, 'build')

app.use( cookie({
    name: 'session',
    keys: ['knawpkdnawdnp wjdnao ajwndoo oawndoa', 'ownefa awindaownawk awnda own']
}))

app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.post( "/createaccount", async (req, res) => {
    console.log(req.body)
    
    let repeat = false

    let count = await userCollection.find({'username':req.body.find(elm => elm.name === "username").value}).count()
    
    if (count > 0 ) {
        repeat = true
    }
    
    if (repeat) {
        res.status(409).end("Duplicate username")
        return
    }

    let data = {}
    req.body.forEach(el => {
        if (el.name !== 'password2')
            data[el.name] = el.value
    })

    let response = await userCollection.insertOne( data )
    
    userInfoCollection.insertOne( {
        userID : response.insertedId,
        portfolio : []

    } )

    req.session.login = true
    req.session.userID = response.insertedId
    res.redirect("") // *** Change to authenticated endpoint ***

})

/* 

    Expects requests with JSON body in Format:
    {
        "username":value,
        "password":value
        ...
    }

 */

app.post( "/login", async (req, res) => { 
    console.log("---------LOG------------")
    console.log(req.body)
    console.log("---------LOG------------")

    let uName = req.body.username
    let pWord = req.body.password

    let arr = await userCollection.findOne({'username':uName})
    console.log(arr)

    if (arr === null) {
        //incorect username/password
        req.session.login= false
        req.session.userID = null
        res.status(401).end()
    } else if (arr.username === uName && arr.password === pWord) { 
        // correct user/pass
        req.session.login = true
        req.session.userID = arr._id

        res.redirect("") // *** Redirect to authenticated pages ***
    } else {
        // incorrect user/pass
        req.session.login= false
        req.session.userID = null
        res.status(401).end()
    }

})

/**** Mobile Routes *****/

app.post("/mobile/login", async (req, res) => {
    console.log("---------LOG------------")
    console.log(req.body)
    console.log("---------LOG------------")

    let uName = req.body.username
    let pWord = req.body.password

    let arr = await userCollection.findOne({'username':uName})
    console.log(arr)

    if (arr === null) {
        //incorect username/password
        res.status(401).end()
    } else if (arr.username === uName && arr.password === pWord) { 
        // correct user/pass
        res.status(200).end()
    } else {
        // incorrect user/pass
        req.session.login= false
        req.session.userID = null
        res.status(401).end()
    }
    
})

/***********************/

/** Example request */
app.post( "/exampleRequest", (req, res) => {
    console.log("Click Received")
    res.end()
})
app.get('/', function(request, response) {

    response.sendFile( __dirname + '/views/index.html' )
})

app.listen(process.env.PORT || 3000)
