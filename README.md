# Setting up a Basic API with NodeJS and Express

## Step 1: Setting Up the Project
Start in the root of your 'workspace' folder, navigate to that folder in the terminal, 
and run the following command to initialize the project:

`express --view=hbs apiWorkshop`


### Add to the bin\www file:
`console.log("Server started, listening on port:", port);`

### Navigate into the apiWorkshop folder and run the following commands:
```
npm install
npm start
```

### Make controllers and models folders for MVC 
- Add index.js to controllers
- Move code from index.js in routes to index.js controllers getHomePage function
- index.js controllers

index.js in controllers
```
"use strict";
const getHomePage = function(req, res, next) {
    res.render('index', { title: 'Express' });
};
module.exports = {
    getHomePage
}
```

index.js in routes
```
const ctrlSite = require('../controllers/index');

router.get('/', ctrlSite.getHomePage);
```

## Step 2: Setting Up the Home Page
- Create index.js in public\javascripts folder.
- Add DOMContentLoaded event listener.
- Add <script> to layout.hbs

layout.hbs
`<script src="../javascripts/index.js"></script>`

index.js in javascripts
```
"use strict";

document.addEventListener("DOMContentLoaded", () =>{
    console.log("hello");

});
```

Add code to index.hbs
```
<hr>
<h2>Create Post</h2>
<form>
    <label for="title">Title</label>
    <input id="title" type="text">
    <br>
    <label for="body">Body</label>
    <input id="body" type="text">
    <br>
    <br>
    <button id="btnCreatePost" type="button">Create Post</button>
    <br>
    <br>
    <span id="msgCreatePost"></span>
</form>
<br>
<hr>
<h2>Get Posts</h2>
<button id="btnGetPosts" type="button">Get Posts</button>
<br>
<table id="resultTable" style="display: none;"></table>
```

## Step 3: Setting Up GET request
- npm Install axios.
- Create api.js in controllers folder and require in route file.
- Add getPosts function to api.js in controllers
- Add GET route to index.js in routes.
- Add getPosts function and eventListener to index.js in javascripts


## Step 4: Setting Up POST request
- Add createPost function to api.js in controllers
- Add POST route to index.js in routes.
- Add createPost function and eventListener to index.js in javascripts

## Conclusion
In this workshop, we have learned how to build a simple API using Node.js and Express. We covered setting up the project, defining routes, implementing middleware, and the startings of an MVC pattern. This is just the beginning of your journey into building APIs and web applications with Node.js and Express. There is much more to explore and learn, such as a fully realized MVC pattern, database integration, authentication, and more complex API features.

## Additional Resources:
Continue your Node.js learning journey with these additional resources:

[Official Node.js Documentation](https://nodejs.org/en/docs/): Explore the official Node.js documentation for in-depth information about Node.js and its modules.

[Express.js Documentation](https://expressjs.com/): Refer to the official Express.js documentation for detailed explanations of Express features and best practices.

[RESTful API Design Best Practices](https://restfulapi.net/): Study the best practices and principles of RESTful API design to create efficient and user-friendly APIs.

[Mongoose (for MongoDB integration)](https://mongoosejs.com/): If you want to dive into using databases with Node.js, Mongoose is a popular library for MongoDB integration.

[MySQL npm (for MySQL integration)](https://www.npmjs.com/package/mysql): Node.js also pairs well with relational databases and the mysql package on npm is a great place to get started.

[JWT Authentication in Node.js](https://jwt.io/): Learn about JSON Web Tokens (JWT) and how to implement token-based authentication in Node.js applications.

[Postman](https://www.postman.com/): Use Postman for testing and interacting with APIs.

Online tutorials and YouTube videos: There are numerous tutorials and guides available online that cover various aspects of Node.js, Express, and API development.
