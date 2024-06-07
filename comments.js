// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, it should display the message "Welcome to the homepage".
// When you visit the URL /cats, it should display the message "Meow".
// When you visit the URL /dogs, it should display the message "Woof".
// When you visit the URL /cats_and_dogs, it should display the message "Dogs and cats living together...mass hysteria!!"

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

app.get('/cats', (req, res) => {
    res.send('Meow');
});

app.get('/dogs', (req, res) => {
    res.send('Woof');
});

app.get('/cats_and_dogs', (req, res) => {
    res.send('Dogs and cats living together...mass hysteria!!');
});

app.listen(port, () => {
    console.log('Server is running on port', port);
});