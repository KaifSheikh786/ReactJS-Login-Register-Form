// const express = require("express");
// const { MongoClient, Collection } = require('mongodb');
// const BodyParser = require("body-parser");
// const ObjectId = require("mongodb").ObjectID;
// const CONNECTION_URL ="mongodb://localhost:27017/" ;
// const DATABASE_NAME = "College";
// const cors = require('cors');



// const app = express()
// app.use(BodyParser.json());
// app.use(BodyParser.urlencoded({ extended: true }))
// app.use(cors())

// var db, collection;
// app.listen(5000, () => {
//          const client = new MongoClient(CONNECTION_URL);
//          client.connect();

//           db = client.db(DATABASE_NAME);
//           collection = db.collection("college");
//           console.log("Connected to `" + DATABASE_NAME + "`!");
//     });

//     const userSchema = MongoClient.Schema({
//       name: "Kaif",
//       email: "kaif@gmail.com",
//       password: "iwrdnsie"
//   })

// app.get("/studata", async (request, response) => {
//       var result = await collection.find({}).toArray();
//       response.send(result);
//   });

// app.get("/studata/:id", async (request, response) => {
//       var result= await collection.findOne({"Roll-No":request.params.id});
//       response.send(result);
//       console.log(result);
//   });

  
// app.post("/studata", async (request, response) => {
//       var result = await collection.insertOne(userSchema);
//        response.send(result);
// });

const express = require("express");
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const CONNECTION_URL = "mongodb://localhost:27017/";
const DATABASE_NAME = "College";
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

let db, collection;

MongoClient.connect(CONNECTION_URL, { useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error occurred while connecting to MongoDB', err);
        return;
    }
    db = client.db(DATABASE_NAME);
    collection = db.collection("college");
    console.log("Connected to `" + DATABASE_NAME + "`!");
});

app.get("/studata", async (request, response) => {
    try {
        const result = await collection.find({}).toArray();
        response.send(result);
    } catch (err) {
        console.error('Error fetching data:', err);
        response.status(500).send('Error fetching data');
    }
});

app.get("/studata/:id", async (request, response) => {
    try {
        const result = await collection.findOne({ "_id": request.params.id });
        response.send(result);
        console.log(result);
    } catch (err) {
        console.error('Error fetching data:', err);
        response.status(500).send('Error fetching data');
    }
});

app.post("/studata", async (request, response) => {
    try {
        const user = {
            name: "Kaif",
            email: "kaif@gmail.com",
            password: "iwrdnsie"
        };
        const result = await collection.update(user);
        response.send(result);
    } catch (err) {
        console.error('Error inserting data:', err);
        response.status(500).send('Error inserting data');
    }
});

app.listen(5000, () => {
    console.log('Server started on port 5000');
});
