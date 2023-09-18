const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Connect to MongoDB
const username = 'root';
const password = 'Abcd1234';
const dbName = 'mvc-example';
const dbHost = 'localhost';

const url = 'mongodb+srv://' + username + ':' + password + '@' + dbName + '.elbom2r.mongodb.net/?retryWrites=true&w=majority';

async function connect() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connect();

// mongoose.connect(`mongodb://${username}:${password}@${dbHost}/${dbName}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('Connected to MongoDB');
//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB', err);
//     });

// Set view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;  // for testing
