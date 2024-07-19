const express = require("express");
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb://localhost:27017';
const DATABASE_NAME = 'myLoginRegisterDB';
let db;
let collection;

MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        console.error('Error occurred while connecting to MongoDB', err);
        return;
    }
    db = client.db(DATABASE_NAME);
    collection = db.collection('users');
    console.log('DB connected');
});

app.post("/login", async (request, response) => {
    try {
        const result = await collection.findOne({ "email": request.body.email, "password": request.body.password });
        if (result) {
            response.send({ "status": "1", "msg": "Login success" });
        } else {
            response.send({ "msg": "Login failed" });
        }
    } catch (error) {
        console.error('Error during login:', error);
        response.status(500).send('Error during login');
    }
});

app.post('/register', async (request, response) => {
    const { name, email, password } = request.body;
    try {
        const user = await collection.findOne({ email: email });
        if (user) {
            response.send({ message: 'User already registered' });
        } else {
            await collection.insertOne({ name, email, password });
            response.send({ message: 'Successfully Registered, Please login now.' });
        }
    } catch (error) {
        console.error('Error during registration:', error);
        response.status(500).send('Error during registration');
    }
});

app.listen(3002, () => {
    console.log('BE started at port 3002');
});
