"use strict";
const axios = require('axios');

const getPosts = async function(req, res, next) {
    console.log("**GET posts data**");
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        console.log("**GET posts data SUCCESS**");
        res.json(posts);

    } catch (error) {
        console.log("**GET posts data FAILED**");
        res.status(500).json({ error: 'Internal server error' });
    }
};

const createPost = async function(req, res, next) {
    console.log("**POST Create Post**");
    try {
        const post = { title: req.body.title, body: req.body.body };
        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post);
        console.log("**POST Create Post SUCCESS**");
        res.json(response.data);
      } catch (error) {
        console.log("**POST Create FAILED**");
        res.status(500).json({ error: 'Internal server error' });
      }
}


module.exports = {
    getPosts,
    createPost
}
