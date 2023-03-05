// Importing required dependecies
const https = require('https');
const fs = require('fs');

// Function to check plaindrome
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
console.log("ACA is palindrome: " + isPalindrome("aca"))


// Function to list all the files in directory
function listFilesInDirectory(directory) {
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.log('Unable to scan directory: ' + err);
            return;
        }
        files.forEach((file) => {
            console.log(file);
        });
    });
}

//Function to check all the files asyncronously
function readFileAsync(path, callback) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

// Function to make HTTP Request
function makeHttpRequest(url) {
  https.get('https://jsonplaceholder.typicode.com/posts/1', (res) => { //Using random url for api
    console.log(`Status code: ${res.statusCode}`); // Getting status code for the url
    res.setEncoding('utf8'); // Settinng encode
    res.on('data', (data) => {
      console.log(`Response: ${data}`);
    });
  }).on('error', (err) => {
    console.log(`Error: ${err.message}`);
  });
}
