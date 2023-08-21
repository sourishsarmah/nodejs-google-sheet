const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname, 'public')));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
    extended: true
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.post('/user', (req, res) => {
    console.log(req.body.user)
    res.json({ message: 'Hello from the server!' });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});