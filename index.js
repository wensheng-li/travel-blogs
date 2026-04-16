// Load environment variables from .env.dev file
require('dotenv').config({ path: '.env.dev' });

const express = require("express");
const app = express();
app.set("view engine", "ejs");

// Set environment variable to be globally EJS templates
app.locals.siteName = process.env.SITE_NAME;
app.locals.env = process.env.NODE_ENV;
const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("index.ejs");
});

app.get("/blogs", (req, res) => {
    res.render("blogs.ejs", { blogs: blogs });
});

app.get("/blogs/:id", (req, res) => {
    const blogId = parseInt(req.params.id);
    const blog = blogs.find(b => b.id === blogId);
    // console.log("Blog ID:", blogId);
    
    if (blog) {
        res.render("blog-details.ejs", { blog: blog });
    } else {
        res.status(404).send("Blog not found");
    }
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

// Sample blog data
const blogs = [
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "My First Blog Post",
    date: "2024-06-01",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
  },
  {
    id: 2,
    image: "/images/image2.jpg",
    title: "My Second Blog Post",
    date: "2024-05-02",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
  },
  {
    id: 3,
    image: "/images/image3.jpeg",
    title: "My Third Blog Post",
    date: "2024-06-02",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.",
  },
];    