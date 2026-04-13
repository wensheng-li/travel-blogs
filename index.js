// Load environment variables from .env.dev file
require('dotenv').config({ path: '.env.dev' });

const express = require("express");
const app = express();
app.set("view engine", "ejs");

// Set envrionment variable to be globally EJS templates
app.locals.siteName = process.env.SITE_NAME;
app.locals.env = process.env.NODE_ENV;
const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Current environment: ${process.env.NODE_ENV}`);
});