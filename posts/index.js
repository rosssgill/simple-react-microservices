const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

// Route handler 1
app.get('/posts', (req, res) => {
    res.send(posts); // returns all posts
});


// Route handler 2
app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex'); // generate random HEX id
    const { title } = req.body;



    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});