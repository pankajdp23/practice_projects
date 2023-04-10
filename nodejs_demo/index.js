const express = require('express');
const path = require('path');
const app = express();

const users = require('./src/utils/constant');
const PORT = process.env.PORT || 3000;


app.use(express.static("public"));
app.use(express.json());
app.get('/', (req, res) => {
    console.log(req.method, req.url);
    res.send(users);
})

app.get("/register",(req, res) => {
    console.log("inside get register method");
    res.sendFile(path.join(__dirname,"/public/register.html"));
});

app.post("/register", (req, res) => {
    users.push(req.body);
    res.send(users);
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
