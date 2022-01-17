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
    data = parse(req.body.txt.replaceAll("'", "&#39;").replaceAll('"', "&#34;"));
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
        specificity = ["year", "month", "day"][el[0].trim().split(" ").length - 1];
        el[0] = new Date(el[0]).toISOString();
        if (json[el[0].trim()]) {
            json[el[0].trim()].push({ txt: el[1].trim(), url: el[2].trim(), cat: el[3].trim(), id, specificity })
        }
        else {
            json[el[0].trim()] = [{ txt: el[1].trim(), url: el[2].trim(), cat: el[3].trim(), id, specificity }]
        }
        id++;
    }
    json = Object.fromEntries(Object.entries(json).sort())
    return json;
}

smallestDiff = (obj) => {
    smallest = Infinity;
    let prev = Infinity;
    for (i in obj) {
        if (new Date(i).getTime() - new Date(prev).getTime() < smallest) { smallest = new Date(i).getTime() - new Date(prev).getTime() };
        prev = i;
    }
    return smallest
}

