const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');

app.set("view engine", "ejs")
app.set('path', path.join(__dirname + "views"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("form")
})

app.post("/rendered", (req, res) => {
    data = parse(req.body.txt);
    res.render("index", { sheet: data })
})

app.listen(3000, (req, res) => {
    console.log("aaaaa")
})


parse = (str) => {
    let json = []
    let arr = str.split("\n")
    for (i of arr) {
        el = i.split('\t')
        j = {}
        j.year = el[0]
        j.text = el[1]
        j.url = el[2]
        json.push(j)
    }
    return json;
}