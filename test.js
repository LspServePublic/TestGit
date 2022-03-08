'use strict'

var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
    }
});

fs.readFile('dogHead.jpg', function(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + 'bytes');
    }
});

var data = 'Hello node.js!';
fs.writeFile('output.txt', data, function(err){
    if(err){
        console.log(err);
    } else {
        console.log('output complete!');
    }
});