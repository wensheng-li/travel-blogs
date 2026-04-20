// Load environment variables from .env.dev file
require("dotenv").config({ path: ".env.dev" });

const express = require("express");
const app = express();
app.set("view engine", "ejs");

// Set environment variable to be globally EJS templates
app.locals.siteName = process.env.SITE_NAME;
app.locals.env = process.env.NODE_ENV;
const port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Middleware to set current page for navbar active state
app.use((req, res, next) => {
  let currentPage = 'home';
  if (req.path.startsWith("/blogs")) {
    currentPage = "blogs";
  } else if (req.path.startsWith("/about")) {
    currentPage = "about";
  } else if (req.path.startsWith("/contact")) {
    currentPage = "contact";
  }
  res.locals.currentPage = currentPage;
  next();
});

// Sample blog data
const blogs = [
  {
    id: 1,
    image: "/images/image1.jpg",
    title: "My First Blog Post",
    date: "2024-06-01",
    author: "Bruce Lee",
    content: `Risus quis varius quam quisque id diam vel. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Quis varius quam quisque id diam. Quis ipsum suspendisse ultrices gravida dictum fusce. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Cras semper auctor neque vitae tempus quam pellentesque.
      Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ac odio tempor orci dapibus ultrices in. Enim nulla aliquet porttitor lacus luctus. Eget lorem dolor sed viverra ipsum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Odio ut sem nulla pharetra diam sit amet nisl. Quam quisque id diam vel quam elementum pulvinar etiam.
Senectus et netus et malesuada fames ac turpis egestas. Sed libero enim sed faucibus turpis in eu. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in vitae turpis massa sed elementum tempus egestas. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nulla pellentesque dignissim enim sit amet. Eleifend mi in nulla posuere.

Morbi tristique senectus et netus. Est pellentesque elit ullamcorper dignissim cras. Scelerisque mauris pellentesque pulvinar pellentesque. Nisl purus in mollis nunc sed. Quam vulputate dignissim suspendisse in. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.

Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in vitae turpis massa sed elementum tempus egestas. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nulla pellentesque dignissim enim sit amet. Eleifend mi in nulla posuere.`,
  },
  {
    id: 2,
    image: "/images/image2.jpg",
    title: "My Second Blog Post",
    date: "2024-05-02",
    author: "Jackie White",
    content: `Risus quis varius quam quisque id diam vel. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Quis varius quam quisque id diam. Quis ipsum suspendisse ultrices gravida dictum fusce. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Cras semper auctor neque vitae tempus quam pellentesque.
      Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ac odio tempor orci dapibus ultrices in. Enim nulla aliquet porttitor lacus luctus. Eget lorem dolor sed viverra ipsum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Odio ut sem nulla pharetra diam sit amet nisl. Quam quisque id diam vel quam elementum pulvinar etiam.
Senectus et netus et malesuada fames ac turpis egestas. Sed libero enim sed faucibus turpis in eu. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in vitae turpis massa sed elementum tempus egestas. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nulla pellentesque dignissim enim sit amet. Eleifend mi in nulla posuere.

Morbi tristique senectus et netus. Est pellentesque elit ullamcorper dignissim cras. Scelerisque mauris pellentesque pulvinar pellentesque. Nisl purus in mollis nunc sed. Quam vulputate dignissim suspendisse in. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.

Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in vitae turpis massa sed elementum tempus egestas. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nulla pellentesque dignissim enim sit amet. Eleifend mi in nulla posuere.`,
  },
  {
    id: 3,
    image: "/images/image3.jpeg",
    title: "My Third Blog Post",
    date: "2024-06-02",
    author: "Karen Green",
    content: `Risus quis varius quam quisque id diam vel. Scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt. Quis varius quam quisque id diam. Quis ipsum suspendisse ultrices gravida dictum fusce. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Cras semper auctor neque vitae tempus quam pellentesque.
      Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ac odio tempor orci dapibus ultrices in. Enim nulla aliquet porttitor lacus luctus. Eget lorem dolor sed viverra ipsum. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Odio ut sem nulla pharetra diam sit amet nisl. Quam quisque id diam vel quam elementum pulvinar etiam.
Senectus et netus et malesuada fames ac turpis egestas. Sed libero enim sed faucibus turpis in eu. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in vitae turpis massa sed elementum tempus egestas. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nulla pellentesque dignissim enim sit amet. Eleifend mi in nulla posuere.

Morbi tristique senectus et netus. Est pellentesque elit ullamcorper dignissim cras. Scelerisque mauris pellentesque pulvinar pellentesque. Nisl purus in mollis nunc sed. Quam vulputate dignissim suspendisse in. Tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum.

Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Leo in vitae turpis massa sed elementum tempus egestas. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nulla pellentesque dignissim enim sit amet. Eleifend mi in nulla posuere.`,
  },
];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/blogs", (req, res) => {
  res.render("blogs.ejs", { blogs: blogs });
});

app.get("/blogs/new", (req, res) => {
  res.render("new-blog.ejs", {
    currentDate: new Date().toISOString().split("T")[0],
  });
});

app.get("/blogs/:id/edit", (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === blogId);
  if (!blog) {
    return res.status(404).send("Blog not found");
  }

  res.render("blog-update.ejs", {
    blog: blog,
    currentDate: new Date().toISOString().split("T")[0],
  });
});

app.post("/blogs/new", (req, res) => {
  const newBlog = {
    id: blogs.length + 1,
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    date: req.body.date,
    image:
      req.body.image && req.body.image.trim()
        ? req.body.image
        : "/images/default.jpeg", // Local default image
  };
  
  blogs.push(newBlog);
  res.redirect("/blogs");
});

app.get("/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const blog = blogs.find((b) => b.id === blogId);
  // console.log("Blog ID:", blogId);

  if (blog) {
    res.render("blog-details.ejs", { blog: blog });
  } else {
    res.status(404).send("Blog not found");
  }
});

app.post("/blogs/:id/update", (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return res.status(404).send("Blog not found");
  }
  blog.title = req.body.title;
  blog.date = req.body.date;
  blog.content = req.body.content;
  blog.image =
    req.body.image && req.body.image.trim()
      ? req.body.image
      : "/images/default.jpeg"; // Local default image
  
  res.redirect(`/blogs/${blogId}`);
});

app.post("/blogs/:id/delete", (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const index = blogs.findIndex((b) => b.id === blogId);
  if (index === -1) {
    return res.status(404).send("Blog not found");
  }
  blogs.splice(index, 1);
  res.redirect("/blogs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Current environment: ${process.env.NODE_ENV}`);
});
