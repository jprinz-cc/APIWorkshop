"use strict";

document.addEventListener("DOMContentLoaded", () =>{
    console.log("hello");
    const btnGetPosts = document.querySelector("#btnGetPosts");
    const btnCreatePost = document.querySelector("#btnCreatePost");

    const getPosts = async () => {

        const settings = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        };

        await fetch('/api/posts', settings)
            .then(response => response.json())
            .then(json => {
                console.log("json: ", json);
                const resultTable = document.querySelector("#resultTable");
                resultTable.innerHTML = '';
                resultTable.style.display = 'block';
                for(let i = 0; i < json.length; i++){
                    let row = resultTable.insertRow(i);
                    let cellID = row.insertCell(0);
                    let cellTitle = row.insertCell(1);
                    cellID.innerHTML = json[i].id;
                    cellTitle.innerHTML = json[i].title;
                }
            });

    }

    const createPost = async () => {
        const inputTitle = document.querySelector("#title");
        const inputBody = document.querySelector("#body");
        const msgCreatePost = document.querySelector('#msgCreatePost');

        const settings = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: inputTitle.value, body: inputBody.value})
        };

        await fetch('/api/post', settings)
            .then(response => response.json())
            .then(json => {
                console.log("json: ", json);
                msgCreatePost.innerHTML = `PostID: ${json.id} -- PostTitle: ${json.title} -- PostBody: ${json.body}`;
            });
    }

    btnGetPosts.addEventListener("click", getPosts);
    btnCreatePost.addEventListener("click", createPost);

});
