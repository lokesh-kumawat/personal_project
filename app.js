
const mongoose = require("mongoose");
const User = require("./models/user");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// database connect
main()
    .then((res) => {
        console.log("connected to the database");
    }).catch((err) => {
        console.log("Some error to connected to the database");
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Api_test');
}


// routers
app.get("/", (req, res) => {
    res.send("code is running perferct");
});

// Add new user
app.post("/user", async (req, res) => {
    let { name, email, phone } = req.body;
    try {
        const newUser = new User({
        name: name,
        email: email,
        phone: phone
    });
    await newUser.save();
    res.send(201).json({message: "User created successfully"})
    } catch (err) {
        console.log(err);
        res.send(500).json({ error: "Something went wrong"})
    }
    
});



let port = 3000;
app.listen(port, () => {
    console.log('Server is running on port localhost:3000');
})

