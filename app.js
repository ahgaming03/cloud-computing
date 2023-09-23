const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const itemRoutes = require("./routes/itemRoutes");
const bookRoutes = require("./routes/bookRoutes");

// Connect to MongoDB
const username = "root";
const password = "Abcd1234";
const dbname = "Library2";

const url =
    "mongodb+srv://" +
    username +
    ":" +
    password +
    "@mvc-example.elbom2r.mongodb.net/" +
    dbname +
    "?retryWrites=true&w=majority";

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
        (result) => console.log("Connected to MongoDB"),
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    )
    .catch((err) => console.error("Error connecting to MongoDB", err));

// Set view engine
app.set("view engine", "hbs");

// Register partials
hbs.registerPartials(__dirname + "/views/partials");

// Set middleware & static file
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
    res.redirect("/books");
});

// about page
app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

// item routes
app.use("/items", itemRoutes);

// book routes
app.use("/books", bookRoutes);

// 404 page
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});

module.exports = app; // for testing
