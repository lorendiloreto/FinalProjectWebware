var express = require( 'express' )
const bodyParser = require("body-parser")
var app = express()
const path = require('path')

const { 
      v1: uuidv1,
      v4: uuidv4
} = require('uuid')

const mongodb = require( 'mongodb' ),
    mongoDatabase = 'goatconnect',
    mongoCollection = 'users',
    mongoCollection2 = 'userInfo',
    mongoCollection3 = 'signup-keys',
    cookie = require( 'cookie-session' )

// ----- MongoDB Set up ------

const uri = 'mongodb+srv://GoatConnect:DMx7JlUVQ04R5jLi@a3-cluster.wk5nt.mongodb.net/goatconnect?retryWrites=true&w=majority'

const client = new mongodb.MongoClient( uri, { useNewUrlParser: true, useUnifiedTopology:true })
let userCollection = null
let userInfoCollection = null
let keysCollection = null

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
    })
    .then( () => {
        return client.db( mongoDatabase ).collection( mongoCollection3 )
    })
    .then( __collection => {
        keysCollection = __collection
        return "Connected to Databases"
    })
    .then( console.log ) 

// ----- MongoDB Set up ------

//app.get('/', function(request, response) {
//
//    response.sendFile( __dirname + '/build/index.html' )
//})

const publicDirectoryPath = path.join(__dirname, 'build/public')

app.use( cookie({
    name: 'session',
    keys: ['knawpkdnawdnp wjdnao ajwndoo oawndoa', 'ownefa awindaownawk awnda own']
}))

app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.get('/logout', (req, res) => {
    req.session.athlogin= false
    req.session.alumlogin= false
    res.redirect('/')
})

app.get("/_snowpack/*", (req, res) => {
    res.sendFile( __dirname + '/build' + req.path)
})

app.get("/athlete", (req, res) => {
    if (req.session.athlogin)
        res.sendFile( __dirname + '/build/athlete.html')
    else
        res.status(401).redirect('/')
})

app.get("/alumni", (req, res) => {
    if (req.session.alumlogin)
        res.sendFile( __dirname + '/build/alumni.html')
    else
        res.status(401).redirect('/')
})

app.post( "/createaccount", async (req, res) => {
    console.log(req.body)

    let repeat = false

    let count = await userCollection.find({'username':req.body.username}).count()

    if (count > 0 ) {
        repeat = true
    }

    if (repeat) {
        res.status(409).end("Email already registered")
        return
    }

    let data = {}

    Object.keys(req.body).forEach(el => {
        data[el] = req.body[el]
    })

    let alumKeys = await keysCollection.findOne({'type':'alumniKeys'})
    let stuKeys = await keysCollection.findOne({'type':'studentKeys'})

    let comp = false
    let invalidKey = true 

    if (alumKeys.alumniKeys.find(el => el === data.key)) {
        //alum
        comp = true
        invalidKey = false
    } else if (stuKeys.studentKeys.find(el => el === data.key)) { 
        // student
        comp = false
        invalidKey = false
    } else {
        // invalid key
    }

    if (invalidKey) {
        res.status(404).end("Invalid Key")
        return
    }

    if (data.username === "") {
        res.status(401).end("empty username")
        return
    }

    let response = await userCollection.insertOne( {"username":data.username, "password":data.password} )

    delete data.password


    userInfoCollection.insertOne( {
        userID : response.insertedId,
        userInfo : data,
        type : (comp ? "Company" : "Athlete")
    } )
    if (comp) {
        req.session.alumlogin = true
    } else {
        req.session.athlogin = true
    }
    req.session.userID = response.insertedId
    res.redirect(comp ? "/alumni" : "/athlete") // *** Change to authenticated endpoint ***

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
        req.session.athlogin= false
        req.session.alumlogin= false
        req.session.userID = null
        res.status(401).end()
    } else if (arr.username === uName && arr.password === pWord) { 
        // correct user/pass
        if (arr.type === "Company" ) {
            req.session.alumlogin = true
        } else if (arr.type === "Athlete") {
            req.session.athlogin = true
        }
        req.session.userID = arr._id
        res.status(200)
        if (arr.type === "Athlete") {
            res.redirect("/athlete") // *** Redirect to authenticated pages ***
        } else if (arr.type === "Company") {
            res.redirect("/alumni")
        }
    } else {
        // incorrect user/pass
        req.session.athlogin= false
        req.session.alumlogin= false
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

app.post( "/mobile/createaccount", async (req, res) => {
    console.log(req.body)

    let repeat = false

    let count = await userCollection.find({'username':req.body.username}).count()

    if (count > 0 ) {
        repeat = true
    }

    if (repeat) {
        res.status(409).end("Duplicate username")
        return
    }

    let data = {}

    Object.keys(req.body).forEach(el => {
        data[el] = req.body[el]
    })

    let alumKeys = await keysCollection.findOne({'type':'alumniKeys'})
    let stuKeys = await keysCollection.findOne({'type':'studentKeys'})

    let comp = false
    let invalidKey = true 

    if (alumKeys.alumniKeys.find(el => el === data.key)) {
        //alum
        comp = true
        invalidKey = false
    } else if (stuKeys.studentKeys.find(el => el === data.key)) { 
        // student
        comp = false
        invalidKey = false
    } else {
        // invalid key
    }

    if (invalidKey) {
        res.status(404).end("Invalid Key")
        return
    }

    if (data.username === "") {
        res.status(401).end("empty username")
        return
    }

    let type = comp ? "Company" : "Athlete"
    let response = await userCollection.insertOne( {"username":data.username, "password":data.password, type} )

    delete data.password

    userInfoCollection.insertOne( {
        userID : response.insertedId,
        userInfo : data,
        type
    } )

    res.status(200).end()
})

/***********************/

//app.get("/generateKeys", (req, res) => {
//    console.log("generating...")
//    
//    let studentArr = []
//    let alumniArr = []
//
//    for (let i = 0; i < 50; i++) {
//        studentArr.push(uuidv4())
//        alumniArr.push(uuidv4())
//    }
//    
//    keysCollection.insertOne( {"type": "studentKeys", "studentKeys":studentArr } )
//        .then( console.log )
//    keysCollection.insertOne( {"type": "alumniKeys", "alumniKeys":alumniArr } )
//        .then( console.log )
//    
//    res.end("Done")
//})

/** Example request */
app.post( "/exampleRequest", (req, res) => {
    console.log("Click Received")
    res.end()
})
app.post( "/getPlayers",  async (req, res) => {
    let data = await userInfoCollection.find({ }).toArray()
    res.json(data)
})

app.get('/*', (req, res) => {
    res.redirect('/')
})

app.listen(process.env.PORT || 3000)
