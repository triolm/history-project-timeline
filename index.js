const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set("view engine", "ejs")
app.set('path', path.join(__dirname + "views"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.render("form")
})

app.post("/rendered", (req, res) => {
    data = parse(req.body.txt);
    res.render("index", { sheet: data, minDist: smallestDiff(data) })
})

app.listen(port, (req, res) => {
    console.log(`listening on port ${port}`)
})


parse = (str) => {
    let json = {}
    let arr = str.split("\n")
    id = 0;
    for (i of arr) {
        let el = i.split('\t')
        if (json[el[0].trim()]) {
            json[el[0].trim()].push({ txt: el[1].trim(), url: el[2].trim(), id })
        }
        else {
            json[el[0].trim()] = [{ txt: el[1].trim(), url: el[2].trim(), id }]
        }
        id++;
    }
    return json;
}

smallestDiff = (obj) => {
    smallest = 1000;
    let prev = 0;
    for (i in obj) {
        if (i - prev < smallest) smallest = i - prev;
        prev = i;
    }
    return smallest
}
