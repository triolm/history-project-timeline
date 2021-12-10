const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path')

app.set("view engine", "ejs")
app.set('path', __dirname + "views");

app.get("/", (req, res) => {
    res.render("index", { sheet })
})

app.listen(3000, (req, res) => {
    console.log("aaaaa")
})


sheet = [
    {
        "year": 1900,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1901,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1902,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1903,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1904,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1905,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1906,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1907,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1908,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1909,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1910,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1911,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1912,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1913,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1914,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1915,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1916,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1917,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    },
    {
        "year": 1918,
        "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto eveniet rerum commodi, a omnis atque non, laboriosam nam aperiam iste maiores similique mollitia facere officia amet voluptatem. Ut, dolor?",
        "url": "www.google.com"
    }
]