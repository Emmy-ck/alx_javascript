#!/usr/bin/bash

const request = require('request');

// Retrieve API from command line argument
const apiUrl = process.argv[2]

// GET request to API URL
request(apiUrl, (err, res, body) => {
    if (err) {
        console.error('Error:', err);
    } else {
        const todos = JSON.parse(body);

        // Object to store the number of completed todos
        const completedTasksByUserId = {};

        todos.forEach((todo) => {
            if (todo.completed) {
                if (completedTasksByUserId[todo.userId]) {
                    completedTasksByUserId[todo.userId]++;
                } else {
                    completedTasksByUserId[todo.userId] = 1;
                }
            }
        });

        console.log(completedTasksByUserId);
    }
});